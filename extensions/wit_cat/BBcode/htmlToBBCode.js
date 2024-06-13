const htmltobbcode = (htmlInput) => {
  // Replace <br> tags with BBCode line breaks (换行)
  let bbcodeText = htmlInput.replace(/<br\s*\/?>/gi, '\n');

  // Replace <div> tags with BBCode line breaks (换行)
  bbcodeText = bbcodeText.replace(/<div\s*\/?>/gi, '\n');

  // Replace <b> tags with BBCode bold ([b])
  bbcodeText = bbcodeText.replace(/<strong\b[^>]*>(.*?)<\/strong>/gi, '[b]$1[/b]');

  // Replace <i> tags with BBCode italic ([i])
  bbcodeText = bbcodeText.replace(/<em\b[^>]*>(.*?)<\/em>/gi, '[i]$1[/i]');

  // Replace <s> tags with BBCode deleteline ([s])
  bbcodeText = bbcodeText.replace(/<strike\b[^>]*>(.*?)<\/strike>/gi, '[s]$1[/s]');

  // Replace <u> tags with BBCode underline ([u])
  bbcodeText = bbcodeText.replace(/<u\b[^>]*>(.*?)<\/u>/gi, '[u]$1[/u]');

  // Replace <a> tags with BBCode URL ([url])
  bbcodeText = bbcodeText.replace(/<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1[^>]*>(.*?)<\/a>/gi, '[url=$2]$3[/url]');

  // Replace <img> tags with BBCode image ([img])
  bbcodeText = bbcodeText.replace(/<img\s+(?:[^>]*?\s+)?src=(["'])(.*?)\1[^>]*>/gi, '[img]$2[/img]');

  // Replace <blockquote> tags with BBCode quote ([quote])
  bbcodeText = bbcodeText.replace(/<blockquote\b[^>]*>(.*?)<\/blockquote>/gi, '[quote]$1[/quote]');

  // Replace <code> tags with BBCode code ([code])
  bbcodeText = bbcodeText.replace(/<code\b[^>]*>(.*?)<\/code>/gi, '[code]$1[/code]');

  // Replace <h1> to <h6> tags with BBCode headers ([h1] to [h6])
  bbcodeText = bbcodeText.replace(/<h([1-6])\b[^>]*>(.*?)<\/h\1>/gi, '[h$1]$2[/h$1]');

  // Replace <ol> and <li> tags with BBCode ordered list ([list=1] and [*])
  bbcodeText = bbcodeText.replace(
    /<ol\s+style=(["'])list-style-type:lower-alpha;\1[^>]*>([\s\S]*?)<\/ol>/gi,
    '[list=a]$2[/list]'
  );
  bbcodeText = bbcodeText.replace(/<ol\b[^>]*>([\s\S]*?)<\/ol>/gi, '[list=1]$1[/list]');

  // Replace <ul> and <li> tags with BBCode list ([list] and [*])
  bbcodeText = bbcodeText.replace(/<ul\b[^>]*>([\s\S]*?)<\/ul>/gi, '[list]$1[/list]');
  bbcodeText = bbcodeText.replace(/<li\b[^>]*>(.*?)<\/li>/gi, '[*]$1');

  // Replace <p> tags with BBCode paragraph ([p])
  bbcodeText = bbcodeText.replace(/<p\b[^>]*>(.*?)<\/p>/gi, '[p]$1[/p]');

  // Replace <span style="font-size:Xpx"> with BBCode size ([size=X])
  bbcodeText = bbcodeText.replace(
    /<span\s+style=(["'])font-size:([\d]+)px\1[^>]*>(.*?)<\/span>/gi,
    '[size=$2]$3[/size]'
  );

  // Replace <span style="color:X"> with BBCode color ([color=X])
  bbcodeText = bbcodeText.replace(
    /<color\s+style=(["'])color:(#[0-9A-Fa-f]+|[a-zA-Z]+)\1[^>]*>(.*?)<\/color>/gi,
    '[color=$2]$3[/color]'
  );

  // Replace <pre> tags with BBCode line breaks (换行)
  bbcodeText = bbcodeText.replace(/<pre([\s\S]*?)>/gi, '\n');

  // Remove all other HTML tags
  bbcodeText = bbcodeText.replace(/<\/?[^>]+(>|$)/g, '');

  return bbcodeText;
};

export default htmltobbcode;
