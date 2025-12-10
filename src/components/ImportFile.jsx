import React, { useRef } from 'react';
import * as XLSX from 'xlsx';

/**
 * Komponen Import CSV/XLSX universal
 * Props:
 * - onImport: function(dataArray) => void
 * - templateFields: array of string (optional, untuk validasi kolom)
 * - label: string (optional, label tombol)
 */
const ImportFile = ({ onImport, templateFields = [], label = 'Import CSV/XLSX' }) => {
  const inputRef = useRef();

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const data = new Uint8Array(evt.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      // Ambil sheet pertama
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(sheet, { defval: '' });
      // Validasi kolom jika templateFields diberikan
      if (templateFields.length > 0) {
        const fileFields = Object.keys(json[0] || {});
        const missing = templateFields.filter(f => !fileFields.includes(f));
        if (missing.length > 0) {
          alert('Kolom berikut wajib ada: ' + missing.join(', '));
          return;
        }
      }
      onImport(json);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <input
        type="file"
        accept=".csv,.xlsx"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleFile}
      />
      <button
        className="rounded-lg bg-emerald-600 px-4 py-2 text-white font-semibold shadow hover:bg-emerald-500 transition"
        onClick={() => inputRef.current && inputRef.current.click()}
      >
        {label}
      </button>
    </div>
  );
};

export default ImportFile;
