import React from 'react';

const ToolsPage = () => {
  const tools = [
    {
      id: 1,
      name: '文字数カウント',
      description: 'テキストの文字数・行数・単語数をリアルタイムでカウント',
      link: '/charcount',
      icon: '📝'
    },
    {
      id: 2,
      name: 'URLエンコード',
      description: 'URLエンコード・デコードを簡単に変換',
      link: '/url',
      icon: '🔗'
    },
    {
      id: 3,
      name: 'QRコード生成',
      description: 'テキストやURLから高品質なQRコードを生成',
      link: '/qr',
      icon: '📱'
    },
    {
      id: 4,
      name: 'Base64変換',
      description: 'テキストをBase64エンコード・デコード',
      link: '/base64',
      icon: '🔐'
    },
    {
      id: 5,
      name: 'JSONフォーマッター',
      description: 'JSONデータを整形・圧縮・検証',
      link: '/json',
      icon: '📋'
    },
    {
      id: 6,
      name: 'カラーパレット',
      description: 'カラーコードの変換と色見本の生成',
      link: '/color',
      icon: '🎨'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            <span className="text-indigo-600">Pokoro</span> Tools
          </h1>
          <p className="text-center text-gray-600 mt-2">便利なWebツール集</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{tool.icon}</span>
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {tool.name}
                  </h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tool.description}
                </p>
                <a
                  href={tool.link}
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200 group-hover:scale-105 transform"
                >
                  使ってみる
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-500">© Pokoro 2025. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2">
              Simple tools for everyday tasks
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ToolsPage;