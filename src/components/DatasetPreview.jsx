import React from 'react'

const sampleRows = [
  {
    customer_id: 'C0001', plan_type: 'Prepaid', device_brand: 'Realme', avg_data_usage_gb: 1.5,
    pct_video_usage: 40.1, avg_call_duration: 15.0, sms_freq: 5, monthly_spend: 120000,
    topup_freq: 2, travel_score: 3, complaint_count: 0, target_offer: 'General Offer'
  },
  {
    customer_id: 'C0002', plan_type: 'Postpaid', device_brand: 'Vivo', avg_data_usage_gb: 10.9,
    pct_video_usage: 9.0, avg_call_duration: 107.6, sms_freq: 25, monthly_spend: 630000,
    topup_freq: 0, travel_score: 3, complaint_count: 0, target_offer: 'General Offer'
  },
  {
    customer_id: 'C0003', plan_type: 'Postpaid', device_brand: 'Xiaomi', avg_data_usage_gb: 2.34,
    pct_video_usage: 31.8, avg_call_duration: 39.8, sms_freq: 20, monthly_spend: 413400,
    topup_freq: 4, travel_score: 1, complaint_count: 0, target_offer: 'General Offer'
  }
]

const DatasetPreview = () => {
  return (
    <div className="max-w-full overflow-auto rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Dataset Preview (UI-only)</h3>
        <p className="mt-1 text-sm text-gray-600">Contoh kolom dari CSV sample — preview saja, tidak melakukan koneksi database.</p>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="min-w-[900px] w-full table-auto">
          <thead className="bg-gray-50">
            <tr className="text-left text-xs font-semibold text-gray-700">
              <th className="px-3 py-2">customer_id</th>
              <th className="px-3 py-2">plan_type</th>
              <th className="px-3 py-2">device_brand</th>
              <th className="px-3 py-2">avg_data_usage_gb</th>
              <th className="px-3 py-2">pct_video_usage</th>
              <th className="px-3 py-2">avg_call_duration</th>
              <th className="px-3 py-2">sms_freq</th>
              <th className="px-3 py-2">monthly_spend</th>
              <th className="px-3 py-2">topup_freq</th>
              <th className="px-3 py-2">travel_score</th>
              <th className="px-3 py-2">complaint_count</th>
              <th className="px-3 py-2">target_offer</th>
            </tr>
          </thead>
          <tbody>
            {sampleRows.map((r) => (
              <tr key={r.customer_id} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="px-3 py-2 text-sm text-gray-800">{r.customer_id}</td>
                <td className="px-3 py-2 text-sm text-gray-800">{r.plan_type}</td>
                <td className="px-3 py-2 text-sm text-gray-800">{r.device_brand}</td>
                <td className="px-3 py-2 text-sm text-gray-800">{r.avg_data_usage_gb}</td>
                <td className="px-3 py-2 text-sm text-gray-800">{r.pct_video_usage}</td>
                <td className="px-3 py-2 text-sm text-gray-800">{r.avg_call_duration}</td>
                <td className="px-3 py-2 text-sm text-gray-800">{r.sms_freq}</td>
                <td className="px-3 py-2 text-sm text-gray-800">{r.monthly_spend}</td>
                <td className="px-3 py-2 text-sm text-gray-800">{r.topup_freq}</td>
                <td className="px-3 py-2 text-sm text-gray-800">{r.travel_score}</td>
                <td className="px-3 py-2 text-sm text-gray-800">{r.complaint_count}</td>
                <td className="px-3 py-2 text-sm text-gray-800">{r.target_offer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DatasetPreview
