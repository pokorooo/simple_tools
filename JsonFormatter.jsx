import React, { useState } from 'react';

const JsonFormatter = () => {
  const [inputJson, setInputJson] = useState('');
  const [formattedJson, setFormattedJson] = useState('');
  const [error, setError] = useState('');
  const [copyMessage, setCopyMessage] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputJson(value);
    
    if (value.trim() === '') {
      setFormattedJson('');
      setError('');
      return;
    }

    try {
      const parsed = JSON.parse(value);
      const formatted = JSON.stringify(parsed, null, 2);
      setFormattedJson(formatted);
      setError('');
    } catch (err) {
      setError('無効なJSON形式です: ' + err.message);
      setFormattedJson('');
    }
  };

  const handleCopy = async () => {
    if (formattedJson) {
      try {
        await navigator.clipboard.writeText(formattedJson);
        setCopyMessage('コピーしました');
        setTimeout(() => setCopyMessage(''), 2000);
      } catch (err) {
        setCopyMessage('コピーに失敗しました');
        setTimeout(() => setCopyMessage(''), 2000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          JSONフォーマッター（整形・検証）
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 入力欄 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-700">入力</h2>
            </div>
            <textarea
              value={inputJson}
              onChange={handleInputChange}
              placeholder="ここにJSONを入力してください"
              className="w-full h-96 p-4 border border-gray-300 rounded-lg font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* 出力欄 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-700">整形結果</h2>
              {formattedJson && (
                <div className="flex items-center gap-2">
                  {copyMessage && (
                    <span className="text-green-600 text-sm">{copyMessage}</span>
                  )}
                  <button
                    onClick={handleCopy}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 text-sm"
                  >
                    コピー
                  </button>
                </div>
              )}
            </div>
            
            {error ? (
              <div className="w-full h-96 p-4 bg-red-50 border border-red-300 rounded-lg">
                <p className="text-red-600 font-mono text-sm">{error}</p>
              </div>
            ) : (
              <textarea
                value={formattedJson}
                readOnly
                placeholder="整形されたJSONがここに表示されます"
                className="w-full h-96 p-4 border border-gray-300 rounded-lg font-mono text-sm resize-none bg-gray-50 focus:outline-none"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsonFormatter;