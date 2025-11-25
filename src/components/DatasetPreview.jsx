import React from 'react'
import '../styles/Admin/DatasetPreview.css'

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
    <div className="dataset-preview">
      <div className="dataset-header">
        <h3>Dataset Preview (UI-only)</h3>
        <p>Contoh kolom dari CSV sample — UI hanya menampilkan preview, tidak melakukan koneksi database.</p>
      </div>

      <div className="dataset-table-wrap">
        <table className="dataset-table">
          <thead>
            <tr>
              <th>customer_id</th>
              <th>plan_type</th>
              <th>device_brand</th>
              <th>avg_data_usage_gb</th>
              <th>pct_video_usage</th>
              <th>avg_call_duration</th>
              <th>sms_freq</th>
              <th>monthly_spend</th>
              <th>topup_freq</th>
              <th>travel_score</th>
              <th>complaint_count</th>
              <th>target_offer</th>
            </tr>
          </thead>
          <tbody>
            {sampleRows.map((r) => (
              <tr key={r.customer_id}>
                <td>{r.customer_id}</td>
                <td>{r.plan_type}</td>
                <td>{r.device_brand}</td>
                <td>{r.avg_data_usage_gb}</td>
                <td>{r.pct_video_usage}</td>
                <td>{r.avg_call_duration}</td>
                <td>{r.sms_freq}</td>
                <td>{r.monthly_spend}</td>
                <td>{r.topup_freq}</td>
                <td>{r.travel_score}</td>
                <td>{r.complaint_count}</td>
                <td>{r.target_offer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DatasetPreview
