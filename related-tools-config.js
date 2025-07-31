// 関連ツール設定ファイル
const RELATED_TOOLS_CONFIG = {
  // 手動マッピング - 特定のツール同士の関連性を定義
  manualMapping: {
    'base-converter': ['bitwise-calculator', 'hex-dump', 'utf8-sjis'],
    'bitwise-calculator': ['base-converter', 'hex-dump', 'base64'],
    'hex-dump': ['base-converter', 'bitwise-calculator', 'utf8-sjis'],
    'utf8-sjis': ['base-converter', 'hex-dump', 'csv-dedup'],
    
    'csv-dedup': ['csvjson', 'tsvcsv', 'utf8-sjis'],
    'csvjson': ['csv-dedup', 'tsvcsv', 'yamljson'],
    'tsvcsv': ['csvjson', 'csv-dedup', 'yamljson'],
    'yamljson': ['csvjson', 'json', 'markdown-to-html'],
    
    'json': ['base64', 'yamljson', 'text-formatter'],
    'base64': ['json', 'utf8-sjis', 'text-formatter'],
    'text-formatter': ['json', 'line-tab-converter', 'markdown-to-html'],
    'line-tab-converter': ['text-formatter', 'markdown-to-html', 'kutouten'],
    'markdown-to-html': ['markdown-pdf', 'text-formatter', 'yamljson'],
    'markdown-pdf': ['markdown-to-html', 'image-resizer', 'image-grayscale'],
    
    'image-resizer': ['image-grayscale', 'markdown-pdf', 'exifviewer'],
    'image-grayscale': ['image-resizer', 'exifviewer', 'color'],
    'exifviewer': ['image-resizer', 'image-grayscale', 'color'],
    'color': ['exifviewer', 'image-grayscale', 'qr'],
    
    'qr': ['urlshortener', 'url', 'color'],
    'urlshortener': ['qr', 'url', 'utm'],
    'url': ['urlshortener', 'utm', 'qr'],
    'utm': ['url', 'urlshortener', 'regex'],
    
    'regex': ['textdiff', 'utm', 'text-formatter'],
    'textdiff': ['regex', 'text-formatter', 'line-tab-converter'],
    
    'password': ['passwordchecker', 'base64', 'bitwise-calculator'],
    'passwordchecker': ['password', 'regex', 'text-formatter'],
    
    'cron': ['regex', 'textdiff', 'yamljson'],
    'kutouten': ['line-tab-converter', 'text-formatter', 'utf8-sjis'],
    'bytebit': ['base-converter', 'bitwise-calculator', 'hex-dump'],
    'moji_count': ['text-formatter', 'line-tab-converter', 'kutouten']
  },

  // 全ツール情報（表示名とパス）
  toolsInfo: {
    'base-converter': { name: '進数変換ツール（2/8/10/16進数）', path: './base-converter.html' },
    'bitwise-calculator': { name: 'AND / OR / XOR 2数演算ツール', path: './bitwise-calculator.html' },
    'hex-dump': { name: 'Hex Dump Viewer（バイナリダンプ表示）', path: './hex-dump.html' },
    'utf8-sjis': { name: 'UTF-8 ⇄ Shift_JIS 変換ツール', path: './utf8-sjis.html' },
    'csv-dedup': { name: 'CSV 行の重複削除ツール', path: './csv-dedup.html' },
    'csvjson': { name: 'CSV ⇄ JSON 変換ツール', path: './csvjson/' },
    'tsvcsv': { name: 'TSV ⇄ CSV 変換ツール', path: './tsvcsv/' },
    'yamljson': { name: 'YAML ⇄ JSON 変換ツール', path: './yamljson/' },
    'json': { name: 'JSONフォーマッター', path: './json.html' },
    'base64': { name: 'Base64変換', path: './base64.html' },
    'text-formatter': { name: 'テキスト整形', path: './text-formatter.html' },
    'line-tab-converter': { name: '改行コード＆タブ変換', path: './line-tab-converter.html' },
    'markdown-to-html': { name: 'Markdown → HTML変換', path: './markdown-to-html.html' },
    'markdown-pdf': { name: 'Markdown → PDF コンバーター', path: './markdown-pdf.html' },
    'image-resizer': { name: '画像リサイズ＆品質調整ツール', path: './image-resizer.html' },
    'image-grayscale': { name: '画像白黒変換ツール', path: './image-grayscale.html' },
    'exifviewer': { name: '画像 EXIF ビューア', path: './exifviewer/' },
    'color': { name: 'カラーパレット', path: './color.html' },
    'qr': { name: 'QRコード生成', path: './qr/' },
    'urlshortener': { name: 'URL短縮ツール', path: './urlshortener/' },
    'url': { name: 'URLエンコード', path: './url/' },
    'utm': { name: 'URL クエリ抽出 & UTM ビルダー', path: './utm/' },
    'regex': { name: '正規表現テスター', path: './regex/' },
    'textdiff': { name: 'テキスト差分ツール', path: './textdiff/' },
    'password': { name: 'ランダムパスワード生成ツール', path: './password/' },
    'passwordchecker': { name: 'パスワード強度チェッカー', path: './passwordchecker/' },
    'cron': { name: 'Cron式パーサー & 次回実行表示ツール', path: './cron/' },
    'kutouten': { name: '句読点一括置換ツール', path: './kutouten/' },
    'bytebit': { name: 'バイト⇄ビット換算ツール', path: './bytebit/' },
    'moji_count': { name: '文字数カウント', path: './moji_count/' }
  },

  // カテゴリー分類（フォールバック用）
  categories: {
    'encoding': ['base64', 'utf8-sjis', 'url'],
    'data-conversion': ['csvjson', 'tsvcsv', 'yamljson', 'json', 'markdown-to-html'],
    'text-processing': ['text-formatter', 'line-tab-converter', 'kutouten', 'moji_count'],
    'binary-numeric': ['base-converter', 'bitwise-calculator', 'hex-dump', 'bytebit'],
    'image-processing': ['image-resizer', 'image-grayscale', 'exifviewer', 'color'],
    'web-tools': ['qr', 'urlshortener', 'utm', 'regex'],
    'file-processing': ['csv-dedup', 'textdiff', 'markdown-pdf'],
    'security': ['password', 'passwordchecker'],
    'system': ['cron']
  }
};

// 関連ツール取得機能
function getRelatedTools(currentSlug) {
  // 手動マッピングを最優先
  if (RELATED_TOOLS_CONFIG.manualMapping[currentSlug]) {
    return RELATED_TOOLS_CONFIG.manualMapping[currentSlug]
      .filter(slug => slug !== currentSlug)
      .slice(0, 4)
      .map(slug => ({
        slug,
        name: RELATED_TOOLS_CONFIG.toolsInfo[slug]?.name || slug,
        path: RELATED_TOOLS_CONFIG.toolsInfo[slug]?.path || `./${slug}/`
      }));
  }

  // フォールバック: カテゴリベースの推測
  const currentCategory = Object.keys(RELATED_TOOLS_CONFIG.categories).find(category =>
    RELATED_TOOLS_CONFIG.categories[category].includes(currentSlug)
  );

  if (currentCategory) {
    return RELATED_TOOLS_CONFIG.categories[currentCategory]
      .filter(slug => slug !== currentSlug)
      .slice(0, 4)
      .map(slug => ({
        slug,
        name: RELATED_TOOLS_CONFIG.toolsInfo[slug]?.name || slug,
        path: RELATED_TOOLS_CONFIG.toolsInfo[slug]?.path || `./${slug}/`
      }));
  }

  // 最終フォールバック: ランダムに3件
  const allSlugs = Object.keys(RELATED_TOOLS_CONFIG.toolsInfo).filter(slug => slug !== currentSlug);
  const shuffled = allSlugs.sort(() => 0.5 - Math.random());
  
  return shuffled.slice(0, 3).map(slug => ({
    slug,
    name: RELATED_TOOLS_CONFIG.toolsInfo[slug]?.name || slug,
    path: RELATED_TOOLS_CONFIG.toolsInfo[slug]?.path || `./${slug}/`
  }));
}

// グローバルに公開
window.RELATED_TOOLS_CONFIG = RELATED_TOOLS_CONFIG;
window.getRelatedTools = getRelatedTools;