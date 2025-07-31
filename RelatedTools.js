// 関連ツールコンポーネント
const RelatedTools = ({ currentSlug, variant = 'default' }) => {
  const relatedTools = window.getRelatedTools ? window.getRelatedTools(currentSlug) : [];
  
  // 3件未満の場合は表示しない
  if (relatedTools.length < 3) {
    return null;
  }

  // サイドバー用のスタイル
  if (variant === 'sidebar') {
    return React.createElement('section', {}, [
      React.createElement('div', {
        key: 'header',
        className: "mb-4"
      }, [
        React.createElement('h2', {
          key: 'title',
          className: "text-lg font-bold text-gray-800 mb-2"
        }, '🔗 関連ツール'),
        React.createElement('p', {
          key: 'subtitle',
          className: "text-gray-600 text-xs"
        }, 'あなたの作業に役立つ関連ツール')
      ]),
      
      React.createElement('div', {
        key: 'list',
        className: "space-y-3"
      }, 
        relatedTools.slice(0, 5).map((tool, index) =>
          React.createElement('div', {
            key: tool.slug || index,
            className: "group"
          },
            React.createElement('a', {
              href: tool.path,
              className: "block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 border border-gray-100"
            }, [
              React.createElement('h3', {
                key: 'name',
                className: "font-medium text-gray-800 text-sm mb-1 group-hover:text-blue-600 transition-colors"
              }, tool.name),
              React.createElement('div', {
                key: 'arrow',
                className: "flex items-center text-xs text-gray-500 group-hover:text-blue-500 transition-colors"
              }, [
                React.createElement('span', {
                  key: 'text'
                }, 'ツールを使う'),
                React.createElement('svg', {
                  key: 'icon',
                  className: "w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                },
                  React.createElement('path', {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M9 5l7 7-7 7"
                  })
                )
              ])
            ])
          )
        )
      )
    ]);
  }

  // デフォルトのスタイル（既存のグリッド形式）
  return React.createElement('section', {
    className: "mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100"
  }, [
    React.createElement('div', {
      key: 'header',
      className: "text-center mb-6"
    }, [
      React.createElement('h2', {
        key: 'title',
        className: "text-2xl font-bold text-gray-800 mb-2"
      }, '🔗 関連ツール'),
      React.createElement('p', {
        key: 'subtitle',
        className: "text-gray-600 text-sm"
      }, 'あなたの作業に役立つ関連ツールをご紹介')
    ]),
    
    React.createElement('div', {
      key: 'grid',
      className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    }, 
      relatedTools.map((tool, index) =>
        React.createElement('div', {
          key: tool.slug || index,
          className: "group"
        },
          React.createElement('a', {
            href: tool.path,
            className: "block p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all duration-200 transform hover:-translate-y-1"
          }, [
            React.createElement('div', {
              key: 'icon',
              className: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors"
            },
              React.createElement('span', {
                className: "text-blue-600 text-lg font-bold"
              }, '🛠️')
            ),
            React.createElement('h3', {
              key: 'name',
              className: "font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors"
            }, tool.name),
            React.createElement('div', {
              key: 'arrow',
              className: "flex items-center text-xs text-gray-500 group-hover:text-blue-500 transition-colors"
            }, [
              React.createElement('span', {
                key: 'text'
              }, 'ツールを使う'),
              React.createElement('svg', {
                key: 'icon',
                className: "w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              },
                React.createElement('path', {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M9 5l7 7-7 7"
                })
              )
            ])
          ])
        )
      )
    )
  ]);
};

// グローバルに公開
window.RelatedTools = RelatedTools;