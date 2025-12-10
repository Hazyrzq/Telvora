import React, { useState } from 'react';
import { getPackages, getCustomers, getAnalytics, getProductSimulations } from '../services/api';
import * as XLSX from 'xlsx';

const ExportAllData = () => {
  const [loading, setLoading] = useState(false);

  const handleExport = async () => {
    setLoading(true);
    try {
      // Fetch all data in parallel
      const [products, customers, analytics, simulations] = await Promise.all([
        getPackages(),
        getCustomers(),
        getAnalytics(),
        getProductSimulations(),
      ]);

      // Prepare sheets
      const sheets = {};
      // Products (no duplicate fields)
      const productFields = [
        'productId', 'productName', 'category', 'price', 'duration', 'dataCapacity', 'minutes', 'sms', 'vodCapacity', 'description'
      ];
      const cleanProducts = products.map(p => {
        const obj = {};
        productFields.forEach(f => obj[f] = p[f]);
        return obj;
      });
      sheets['Produk'] = XLSX.utils.json_to_sheet(cleanProducts);

      // Customers (no duplicate fields)
      const customerFields = [
        'customerId', 'planType', 'device', 'dataUsage', 'videoPercentage', 'callMinutes', 'smsCount', 'totalSpend', 'complaintCount', 'churnRate', 'targetOffer', 'travelScore', 'topupFreq'
      ];
      const cleanCustomers = customers.map(c => {
        const obj = {};
        customerFields.forEach(f => obj[f] = c[f]);
        return obj;
      });
      sheets['Customer'] = XLSX.utils.json_to_sheet(cleanCustomers);

      // Analytics (one sheet, sectioned, readable)
      if (analytics) {
        let analyticRows = [];
        // Model Performance
        if (analytics.model_performance) {
          analyticRows.push(['Model Performance']);
          analyticRows.push(Object.keys(analytics.model_performance));
          analyticRows.push(Object.values(analytics.model_performance));
          analyticRows.push([]);
        }
        // Plan Counts
        if (analytics.plan_counts) {
          analyticRows.push(['Plan Counts']);
          analyticRows.push(Object.keys(analytics.plan_counts));
          analyticRows.push(Object.values(analytics.plan_counts));
          analyticRows.push([]);
        }
        // Top Products
        if (analytics.top_products) {
          analyticRows.push(['Top Products']);
          analyticRows.push(['product_name', 'count', 'percentage']);
          analytics.top_products.forEach(prod => {
            analyticRows.push([prod.product_name, prod.count, prod.percentage]);
          });
          analyticRows.push([]);
        }
        // Video/Voice Behaviour
        if (analytics.video_voice) {
          analyticRows.push(['Video/Voice Behaviour']);
          analyticRows.push(Object.keys(analytics.video_voice));
          analyticRows.push(Object.values(analytics.video_voice));
          analyticRows.push([]);
        }
        // Plan Spend
        if (analytics.plan_spend) {
          analyticRows.push(['Plan Spend']);
          analyticRows.push(Object.keys(analytics.plan_spend));
          analyticRows.push(Object.values(analytics.plan_spend));
          analyticRows.push([]);
        }
        // High Data
        if (analytics.high_data) {
          analyticRows.push(['High Data Users']);
          analyticRows.push(Object.keys(analytics.high_data));
          analyticRows.push(Object.values(analytics.high_data));
          analyticRows.push([]);
        }
        // Summary
        analyticRows.push(['Summary']);
        analyticRows.push(['total_users']);
        analyticRows.push([analytics.total_users || 0]);
        analyticRows.push([]);
        // Generated at
        if (analytics.generated_at) {
          analyticRows.push(['generated_at']);
          analyticRows.push([analytics.generated_at]);
        }
        sheets['Analitik'] = XLSX.utils.aoa_to_sheet(analyticRows);
      }

      // Product Simulations (no duplicate fields)
      if (simulations && simulations.length > 0) {
        const simFields = [
          'productName', 'category', 'price', 'duration', 'dataCapacity', 'minutes', 'sms', 'vodCapacity', 'matchScore', 'estimatedRecommendations', 'conversionRate', 'priceSegment', 'recommendation', 'createdAt'
        ];
        const cleanSim = simulations.map(s => {
          const obj = {};
          simFields.forEach(f => obj[f] = s[f]);
          return obj;
        });
        sheets['SimulasiProduk'] = XLSX.utils.json_to_sheet(cleanSim);
      }

      // Create workbook
      const wb = XLSX.utils.book_new();
      Object.entries(sheets).forEach(([name, sheet]) => {
        XLSX.utils.book_append_sheet(wb, sheet, name);
      });
      // Export as XLSX (multi-sheet, readable in Excel/Google Sheets)
      XLSX.writeFile(wb, 'telvora_data.xlsx');
    } catch (err) {
      alert('Export gagal: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={loading}
      className="rounded-lg bg-cyan-600 px-4 py-2 text-white font-semibold shadow hover:bg-cyan-500 transition"
    >
      {loading ? 'Exporting...' : 'Export Data'}
    </button>
  );
};

export default ExportAllData;
