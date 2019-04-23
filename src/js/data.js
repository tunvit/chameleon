// useragent list
let uaList = {
	"win": [{
		"ua": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36",
		"name": "Chrome 73 (Win 7)",
		"value": "win1"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36",
		"name": "Chrome 73 (Win 8)",
		"value": "win2"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36",
		"name": "Chrome 73 (Win 8.1)",
		"value": "win3"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36",
		"name": "Chrome 73 (Win 10)",
		"value": "win4"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/605.1 Edge/19.17763",
		"name": "Edge 19 (Win 10)",
		"value": "win5"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
		"name": "Firefox 66 (Win 7)",
		"value": "win6"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
		"name": "Firefox 66 (Win 8)",
		"value": "win7"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 6.3; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
		"name": "Firefox 66 (Win 8.1)",
		"value": "win8"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
		"name": "Firefox 66 (Win 10)",
		"value": "win9"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 6.1; rv:60.0) Gecko/20100101 Firefox/60.0",
		"name": "Firefox 60 ESR (Win 7)",
		"value": "win13"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 6.3; rv:60.0) Gecko/20100101 Firefox/60.0",
		"name": "Firefox 60 ESR (Win 8.1)",
		"value": "win14"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 10.0; rv:60.0) Gecko/20100101 Firefox/60.0",
		"name": "Firefox 60 ESR (Win 10)",
		"value": "win15"
	}, {
		"ua": "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)",
		"name": "Internet Explorer 10 (Win 8)",
		"value": "win10"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko",
		"name": "Internet Explorer 11 (Win 7)",
		"value": "win11"
	}, {
		"ua": "Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko",
		"name": "Internet Explorer 11 (Win 8.1)",
		"value": "win12"
	}],
	"mac": [{
		"ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36",
		"name": "Chrome 73 (macOS 10.12)",
		"value": "mac1"
	}, {
		"ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36",
		"name": "Chrome 73 (macOS 10.13)",
		"value": "mac2"
	}, {
		"ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:66.0) Gecko/20100101 Firefox/66.0",
		"name": "Firefox 66 (macOS 10.12)",
		"value": "mac3"
	}, {
		"ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:66.0) Gecko/20100101 Firefox/66.0",
		"name": "Firefox 66 (macOS 10.13)",
		"value": "mac4"
	}, {
		"ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:60.0) Gecko/20100101 Firefox/60.0",
		"name": "Firefox 60 ESR (macOS 10.12)",
		"value": "mac8"
	}, {
		"ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Safari/604.1.38",
		"name": "Safari 11 (macOS 10.12)",
		"value": "mac5"
	}, {
		"ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Safari/605.1.15",
		"name": "Safari 12.1 (macOS 10.13)",
		"value": "mac6"
	}, {
		"ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Safari/605.1.15",
		"name": "Safari 12.1 (macOS 10.14)",
		"value": "mac7"
	}],
	"linux": [{
		"ua": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36",
		"name": "Chrome 73 (Linux 64)",
		"value": "linux1"
	}, {
		"ua": "Mozilla/5.0 (X11; Fedora; x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36",
		"name": "Chrome 73 (Fedora 64)",
		"value": "linux2"
	}, {
		"ua": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chrome/73.0.3683.86 Safari/537.36",
		"name": "Chrome 73 (Ubuntu 64)",
		"value": "linux3"
	}, {
		"ua": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/73.0.3683.86 Chrome/73.0.3683.86 Safari/537.36",
		"name": "Chromium 73 (Linux 64)",
		"value": "linux4"
	}, {
		"ua": "Mozilla/5.0 (X11; Fedora; x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chromium/73.0.3683.86 Chrome/73.0.3683.86 Safari/537.36",
		"name": "Chromium 73 (Fedora 64)",
		"value": "linux5"
	}, {
		"ua": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/73.0.3683.86 Chrome/73.0.3683.86 Safari/537.36",
		"name": "Chromium 73 (Ubuntu 64)",
		"value": "linux6"
	}, {
		"ua": "Mozilla/5.0 (X11; Linux x86_64; rv:66.0) Gecko/20100101 Firefox/66.0",
		"name": "Firefox 66 (Linux 64)",
		"value": "linux7"
	}, {
		"ua": "Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:66.0) Gecko/20100101 Firefox/66.0",
		"name": "Firefox 66 (Fedora 64)",
		"value": "linux8"
	}, {
		"ua": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:66.0) Gecko/20100101 Firefox/66.0",
		"name": "Firefox 66 (Ubuntu 64)",
		"value": "linux9"
	}, {
		"ua": "Mozilla/5.0 (X11; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/60.0",
		"name": "Firefox 60 ESR (Linux 64)",
		"value": "linux10"
	}, {
		"ua": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/60.0",
		"name": "Firefox 60 ESR (Ubuntu 64)",
		"value": "linux11"
	}],
	"ios": [{
		"ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13G36 Safari/601.1",
		"name": "iOS 9.3.5 - iPhone - Safari 9",
		"value": "ios1"
	}, {
		"ua": "Mozilla/5.0 (iPad; CPU OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13G36 Safari/601.1",
		"name": "iOS 9.3.5 - iPad - Safari 9",
		"value": "ios2"
	}, {
		"ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/51.0.2704.104 Mobile/13F69 Safari/601.1.46",
		"name": "iOS 9.3.2 - iPhone - Chrome 51",
		"value": "ios3"
	}, {
		"ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.0 Mobile/14G60 Safari/602.1",
		"name": "iOS 10.3 - iPad - Safari 10",
		"value": "ios4",
	}, {
		"ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) CriOS/72.0.3626.74 Mobile/15E148 Safari/604.1",
		"name": "iOS 11.3 - iPhone - Chrome 72",
		"value": "ios5"
	}, {
		"ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1",
		"name": "iOS 11.3 - iPhone - Safari 11",
		"value": "ios6"
	}, {
		"ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1",
		"name": "iOS 12 - iPhone - Safari 12",
		"value": "ios7"
	}, {
		"ua": "Mozilla/5.0 (iPad; CPU OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1",
		"name": "iOS 12.1 - iPad - Safari 12",
		"value": "ios8"
	}, {
		"ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0_1 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) CriOS/73.0.3683.68 Mobile/15E148 Safari/604.1",
		"name": "iOS 12 - iPhone - Chrome 73",
		"value": "ios9"
	}],
	"android": [{
		"ua": "Mozilla/5.0 (Android; Mobile; rv:66.0) Gecko/66.0 Firefox/66.0",
		"name": "Android - Firefox 66",
		"value": "android1"
	}, {
		"ua": "Mozilla/5.0 (Linux; Android 4.4.2; SM-G800Y Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36",
		"name": "Android 4.4.2 - Chrome 73",
		"value": "android2"
	}, {
		"ua": "Mozilla/5.0 (Linux; Android 5.1.1; SAMSUNG-SM-G530AZ Build/LMY48B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36",
		"name": "Android 5.1.1 - Chrome 73",
		"value": "android3"
	}, {
		"ua": "Mozilla/5.0 (Linux; Android 6.0.1; N9136 Build/MMB29M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36",
		"name": "Android 6.0.1 - Chrome 73",
		"value": "android4"
	}, {
		"ua": "Mozilla/5.0 (Linux; U; Android 6.0.1; en-US; SM-J700F Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/40.0.2214.89 UCBrowser/11.5.1.944 Mobile Safari/537.36",
		"name": "Android 6.0.1 - UC Browser 11.5",
		"value": "android5"
	}, {
		"ua": "Mozilla/5.0 (Linux; Android 7.0; SM-N920C Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/73.0.3683.90 Mobile Safari/537.36",
		"name": "Android 7.0 - Chrome 73",
		"value": "android6"
	}, {
		"ua": "Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-J710F Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.0 Chrome/67.0.3396.87 Mobile Safari/537.36",
		"name": "Android 7.0 - Samsung Browser 9",
		"value": "android7"
	}, {
		"ua": "Mozilla/5.0 (Linux; U; Android 8.0.0; en-US; ONEPLUS A3003 Build/OPR6.170623.013) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.108 UCBrowser/12.0.0.1088 Mobile Safari/537.36",
		"name": "Android 8.0 - UC Browser 12",
		"value": "android8"
	}, {
		"ua": "Mozilla/5.0 (Linux; Android 9; Mi A1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.90 Mobile Safari/537.36",
		"name": "Android 9.0 - Chrome 73",
		"value": "android9"
	}]
}

let languages = [
	{ display: "Acholi", value: "ach,en-GB;q=0.8,en-US;q=0.5,en;q=0.3", lang: "ach", langs: ["ach","en-GB", "en-US", "en"]},
	{ display: "Afrikaans", value: "af,en-ZA;q=0.8,en-GB;q=0.6,en-US;q=0.4,en;q=0.2", lang: "af", langs: ["af", "en-ZA", "en-GB", "en"]},
	{ display: "Albanian", value: "sq,sq-AL;q=0.8,en-US;q=0.5,en;q=0.3", lang: "sq", langs: ["sq", "sq-AL", "en-US", "en"] },
	{ display: "Arabic", value: "ar,en-US;q=0.7,en;q=0.3", lang: "ar", langs: ["ar", "en-US", "en"] },
	{ display: "Aragonese", value: "an,es-ES;q=0.8,es;q=0.7,ca;q=0.5,en-US;q=0.3,en;q=0.2", lang: "an", langs: ["an", "es-ES", "es", "ca", "en-US", "en"] },
	{ display: "Armenian", value: "hy-AM,hy;q=0.8,en-US;q=0.5,en;q=0.3", lang: "hy-AM", langs: ["hy-AM", "hy", "en-US", "en"] },
	{ display: "Assamese", value: "as,en-US;q=0.7,en;q=0.3", lang: "as", langs: ["as", "en-US", "en"] },
	{ display: "Asturian", value: "ast,es-ES;q=0.8,es;q=0.6,en-US;q=0.4,en;q=0.2", lang: "ast", langs: ["ast", "es-ES", "es", "en-US", "en"] },
	{ display: "Azerbaijani", value: "az-AZ,az;q=0.8,en-US;q=0.5,en;q=0.3", lang: "az-AZ", langs: ["az-AZ", "az", "en-US", "en"] },
	{ display: "Basque", value: "eu,en-US;q=0.7,en;q=0.3", lang: "eu", langs: ["eu", "en-US", "en"] },
	{ display: "Belarusian", value: "be,en-US;q=0.7,en;q=0.3", lang: "be", langs: ["be", "en-US", "en"] },
	{ display: "Bengali (Bangladesh)", value: "bn-BD,bn;q=0.8,en-US;q=0.5,en;q=0.3", lang: "bn-BD", langs: ["bn-BD", "bn", "en-US", "en"] },
	{ display: "Bengali (India)", value: "bn-IN,bn;q=0.8,en-US;q=0.5,en;q=0.3", lang: "bn-IN", langs: ["bn-IN", "bn", "en-US", "en"] },
	{ display: "Bosnian", value: "bs-BA,bs;q=0.8,en-US;q=0.5,en;q=0.3", lang: "bs-BA", langs: ["bs-BA", "bs", "en-US", "en"] },
	{ display: "Breton", value: "br,fr-FR;q=0.8,fr;q=0.6,en-US;q=0.4,en;q=0.2", lang: "br", langs: ["br", "fr-FR", "fr", "en-US", "en"] },
	{ display: "Bulgarian", value: "bg,en-US;q=0.7,en;q=0.3", lang: "bg", langs: ["bg", "en-US", "en"] },
	{ display: "Burmese", value: "my,en-GB;q=0.7,en;q=0.3", lang: "my", langs: ["my", "en-GB", "en"] },
	{ display: "Catalan", value: "ca,en-US;q=0.7,en;q=0.3", lang: "ca", langs: ["ca", "en-US", "en"] },
	{ display: "Chinese (Hong Kong)", value: "zh-HK,zh;q=0.8,en-US;q=0.5,en;q=0.3", lang: "zh-HK", langs: ["zh-HK", "zh", "en-US", "en"] },
	{ display: "Chinese (Simplified)", value: "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2", lang: "zh-CN", langs: ["zh-CN", "zh", "zh-TW", "zh-HK", "en-US", "en"] },
	{ display: "Chinese (Traditional)", value: "zh-TW,zh;q=0.8,en-US;q=0.5,en;q=0.3", lang: "zh-TW", langs: ["zh-TW", "zh", "en-US", "en"] },
	{ display: "Croatian", value: "hr-HR,hr;q=0.8,en-US;q=0.5,en;q=0.3", lang: "hr-HR", langs: ["hr-HR", "hr", "en-US", "en"] },
	{ display: "Czech", value: "cs,sk;q=0.8,en-US;q=0.5,en;q=0.3", lang: "cs", langs: ["cs", "sk", "en-US", "en"] },
	{ display: "Danish", value: "da,en-US;q=0.7,en;q=0.3", lang: "da", langs: ["da", "en-US", "en"] },
	{ display: "Dutch", value: "nl,en-US;q=0.7,en;q=0.3", lang: "nl", langs: ["nl", "en-US", "en"] },
	{ display: "English (Australian)", value: "en-AU,en;q=0.5", lang: "en-AU", langs: ["en-AU", "en"] },
	{ display: "English (British)", value: "en-GB,en;q=0.5", lang: "en-GB", langs: ["en-GB", "en"] },
	{ display: "English (Canadian)", value: "en-CA,en-US;q=0.7,en;q=0.3", lang: "en-CA", langs: ["en-CA", "en-US", "en"] },
	{ display: "English (South African)", value: "en-ZA,en-GB;q=0.8,en-US;q=0.5,en;q=0.3", lang: "en-ZA", langs: ["en-ZA", "en-GB", "en-US", "en"] },
	{ display: "English (US)", value: "en-US,en;q=0.5", lang: "en-US", langs: ["en-US", "en"] },
	{ display: "Esperanto", value: "eo,en-US;q=0.7,en;q=0.3", lang: "eo", langs: ["eo", "en-US", "en"] },
	{ display: "Estonian", value: "et,et-EE;q=0.8,en-US;q=0.5,en;q=0.3", lang: "et", langs: ["et", "et-EE", "en-US", "en"] },
	{ display: "Finnish", value: "fi-FI,fi;q=0.8,en-US;q=0.5,en;q=0.3", lang: "fi-FI", langs: ["fi-FI", "fi", "en-US", "en"] },
	{ display: "French", value: "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3", lang: "fr", langs: ["fr", "fr-FR", "en-US", "en"] },
	{ display: "Frisian", value: "fy-NL,fy;q=0.8,nl;q=0.6,en-US;q=0.4,en;q=0.2", lang: "fy-NL", langs: ["fy-NL", "fy", "nl", "en-US", "en"] },
	{ display: "Fulah", value: "ff,fr-FR;q=0.8,fr;q=0.7,en-GB;q=0.5,en-US;q=0.3,en;q=0.2", lang: "ff", langs: ["ff", "fr-FR", "fr", "en-GB", "en-US", "en"] },
	{ display: "Gaelic (Scotland)", value: "gd-GB,gd;q=0.8,en-GB;q=0.6,en-US;q=0.4,en;q=0.2", lang: "gd-GB", langs: ["gd-GB", "gd", "en-GB", "en-US", "en"] },
	{ display: "Galician", value: "gl-GL,gl;q=0.8,en-US;q=0.5,en;q=0.3", lang: "gl-GL", langs: ["gl-GL", "gl", "en-US", "en"] },
	{ display: "Georgian", value: "ka,ka-GE;q=0.7,en;q=0.3", lang: "ka", langs: ["ka", "ka-GE", "en"] },
	{ display: "German", value: "de,en-US;q=0.7,en;q=0.3", lang: "de", langs: ["de", "en-US", "en"] },
	{ display: "German (Switzerland)", value: "de-CH,de;q=0.8,en-US;q=0.5,en;q=0.3", lang: "de-CH", langs: ["de-CH", "de", "en-US", "en"] },
	{ display: "Greek", value: "el-GR,el;q=0.8,en-US;q=0.5,en;q=0.3", lang: "el-GR", langs: ["el-GR", "el", "en-US", "en"] },
	{ display: "Guarani", value: "gn,es;q=0.8,en;q=0.5,en-US;q=0.3", lang: "gn", langs: ["gn", "es", "en", "en-US"] },
	{ display: "Gujarati (India)", value: "gu-IN,gu;q=0.8,en-US;q=0.5,en;q=0.3", lang: "gu-IN", langs: ["gu-IN", "gu", "en-US", "en"] },
	{ display: "Hebrew", value: "he,he-IL;q=0.8,en-US;q=0.5,en;q=0.3", lang: "he", langs: ["he", "he-IL", "en-US", "en"] },
	{ display: "Hindi (India)", value: "hi-IN,hi;q=0.8,en-US;q=0.5,en;q=0.3", lang: "hi-IN", langs: ["hi-IN", "hi", "en-US", "en"] },
	{ display: "Hungarian", value: "hu-HU,hu;q=0.8,en-US;q=0.5,en;q=0.3", lang: "hu-HU", langs: ["hu-HU", "hu", "en-US", "en"] },
	{ display: "Icelandic", value: "is,en-US;q=0.7,en;q=0.3", lang: "is", langs: ["is", "en-US", "en"] },
	{ display: "Indonesian", value: "id,en-US;q=0.7,en;q=0.3", lang: "id", langs: ["id", "en-US", "en"] },
	{ display: "Interlingua", value: "ia,en-US;q=0.7,en;q=0.3", lang: "ia", langs: ["ia", "en-US", "en"] },
	{ display: "Irish", value: "ga-IE,ga;q=0.8,en-IE;q=0.7,en-GB;q=0.5,en-US;q=0.3,en;q=0.2", lang: "ga-IE", langs: ["ga-IE", "ga", "en-IE", "en-GB", "en-US", "en"] },
	{ display: "Italian", value: "it-IT,it;q=0.8,en-US;q=0.5,en;q=0.3", lang: "it-IT", langs: ["it-IT", "it", "en-US", "en"] },
	{ display: "Japanese", value: "ja,en-US;q=0.7,en;q=0.3", lang: "ja", langs: ["ja", "en-US", "en"] },
	{ display: "Kabyle", value: "kab-DZ,kab;q=0.8,fr-FR;q=0.7,fr;q=0.5,en-US;q=0.3,en;q=0.2", lang: "kab-DZ", langs: ["kab-DZ", "kab", "fr-FR", "fr", "en-US", "en"] },
	{ display: "Kannada", value: "kn-IN,kn;q=0.8,en-US;q=0.5,en;q=0.3", lang: "kn-IN", langs: ["kn-IN", "kn", "en-US", "en"] },
	{ display: "Kaqchikel", value: "cak,kaq;q=0.8,es;q=0.6,en-US;q=0.4,en;q=0.2", lang: "cak", langs: ["cak", "kaq", "es", "en-US", "en"] },
	{ display: "Kazakh", value: "kk,ru;q=0.8,ru-RU;q=0.6,en-US;q=0.4,en;q=0.2", lang: "kk", langs: ["kk", "ru", "ru-RU", "en-US", "en"] },
	{ display: "Khmer", value: "km,en-US;q=0.7,en;q=0.3", lang: "km", langs: ["km", "en-US", "en"] },
	{ display: "Korean", value: "ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3", lang: "ko-KR", langs: ["ko-KR", "ko", "en-US", "en"] },
	{ display: "Latvian", value: "lv,en-US;q=0.7,en;q=0.3", lang: "lv", langs: ["lv", "en-US", "en"] },
	{ display: "Ligurian", value: "lij,it;q=0.8,en-US;q=0.5,en;q=0.3", lang: "lij", langs: ["lij", "it", "en-US", "en"] },
	{ display: "Lithuanian", value: "lt,en-US;q=0.8,en;q=0.6,ru;q=0.4,pl;q=0.2", lang: "lt", langs: ["lt", "en-US", "en", "ru", "pl"] },
	{ display: "Lower Sorbian", value: "dsb,hsb;q=0.8,de;q=0.6,en-US;q=0.4,en;q=0.2", lang: "dsb", langs: ["dsb", "hsb", "de", "en-US", "en"] },
	{ display: "Macedonian", value: "mk-MK,mk;q=0.8,en-US;q=0.5,en;q=0.3", lang: "mk-MK", langs: ["mk-MK", "mk", "en-US", "en"] },
	{ display: "Maithili", value: "mai,hi-IN;q=0.7,en;q=0.3", lang: "mai", langs: ["mai", "hi-IN", "en"] },
	{ display: "Malay", value: "ms,en-US;q=0.7,en;q=0.3", lang: "ms", langs: ["ms", "en-US", "en"] },
	{ display: "Malayalam", value: "ml-IN,ml;q=0.8,en-US;q=0.5,en;q=0.3", lang: "ml-IN", langs: ["ml-IN", "ml", "en-US", "en"] },
	{ display: "Marathi", value: "mr-IN,mr;q=0.8,en-US;q=0.5,en;q=0.3", lang: "mr-IN", langs: ["mr-IN", "mr", "en-US", "en"] },
	{ display: "Nepali", value: "ne-NP,ne;q=0.8,en-US;q=0.5,en;q=0.3", lang: "ne-NP", langs: ["ne-NP", "ne", "en-US", "en"] },
	{ display: "Norwegian (Bokmål)", value: "nb-NO,nb;q=0.9,no-NO;q=0.8,no;q=0.6,nn-NO;q=0.5,nn;q=0.4,en-US;q=0.3,en;q=0.1", lang: "nb-NO", langs: ["nb-NO", "nb", "no-NO", "no", "nn-NO", "nn", "en-US", "en"] },
	{ display: "Norwegian (Nynorsk)", value: "nn-NO,nn;q=0.9,no-NO;q=0.8,no;q=0.6,nb-NO;q=0.5,nb;q=0.4,en-US;q=0.3,en;q=0.1", lang: "nn-NO", langs: ["nn-NO", "nn", "no-NO", "no", "nb-NO", "nb", "en-US", "en"] },
	{ display: "Occitan (Lengadocian)", value: "oc-OC,oc;q=0.9,ca;q=0.8,fr;q=0.6,es;q=0.5,it;q=0.4,en-US;q=0.3,en;q=0.1", lang: "oc-OC", langs: ["oc-OC", "oc", "ca", "fr", "es", "it", "en-US", "en"] },
	{ display: "Odia", value: "or,en-US;q=0.7,en;q=0.3", lang: "or", langs: ["or", "en-US", "en"] },
	{ display: "Persian", value: "fa-IR,fa;q=0.8,en-US;q=0.5,en;q=0.3", lang: "fa-IR", langs: ["fa-IR", "fa", "en-US", "en"] },
	{ display: "Polish", value: "pl,en-US;q=0.7,en;q=0.3", lang: "pl", langs: ["pl", "en-US", "en"] },
	{ display: "Portuguese (Brazilian)", value: "pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3", lang: "pt-BR", langs: ["pt-BR", "pt", "en-US", "en"] },
	{ display: "Portuguese (Portugal)", value: "pt-PT,pt;q=0.8,en;q=0.5,en-US;q=0.3", lang: "pt-PT", langs: ["pt-PT", "pt", "en-US", "en"] },
	{ display: "Punjabi (India)", value: "pa,pa-IN;q=0.8,en-US;q=0.5,en;q=0.3", lang: "pa", langs: ["pa", "pa-IN", "en-US", "en"] },
	{ display: "Romanian", value: "ro-RO,ro;q=0.8,en-US;q=0.6,en-GB;q=0.4,en;q=0.2", lang: "ro-RO", langs: ["ro-RO", "ro", "en-US", "en-GB", "en"] },
	{ display: "Romansh", value: "rm,rm-CH;q=0.8,de-CH;q=0.7,de;q=0.5,en-US;q=0.3,en;q=0.2", lang: "rm", langs: ["rm", "rm-CH", "de-CH", "de", "en-US", "en"] },
	{ display: "Russian", value: "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3", lang: "ru-RU", langs: ["ru-RU", "ru", "en-US", "en"] },
	{ display: "Serbian", value: "sr,sr-RS;q=0.8,sr-CS;q=0.6,en-US;q=0.4,en;q=0.2", lang: "sr", langs: ["sr", "sr-RS", "sr-CS", "en-US", "en"] },
	{ display: "Sinhala", value: "si,si-LK;q=0.8,en-GB;q=0.5,en;q=0.3", lang: "si", langs: ["si", "si-LK", "en-GB", "en"] },
	{ display: "Slovak", value: "sk,cs;q=0.8,en-US;q=0.5,en;q=0.3", lang: "sk", langs: ["sk", "cs", "en-US", "en"] },
	{ display: "Slovenian", value: "sl,en-GB;q=0.7,en;q=0.3", lang: "sl", langs: ["sl", "en-GB", "en"] },
	{ display: "Songhai", value: "son,son-ML;q=0.8,fr;q=0.6,en-US;q=0.4,en;q=0.2", lang: "son", langs: ["son", "son-ML", "fr", "en-US", "en"] },
	{ display: "Spanish (Argentina)", value: "es-AR,es;q=0.8,en-US;q=0.5,en;q=0.3", lang: "es-AR", langs: ["es-AR", "es", "en-US", "en"] },
	{ display: "Spanish (Chile)", value: "es-CL,es;q=0.8,en-US;q=0.5,en;q=0.3", lang: "es-CL", langs: ["es-CL", "es", "en-US", "en"] },
	{ display: "Spanish (Mexico)", value: "es-MX,es;q=0.8,en-US;q=0.5,en;q=0.3", lang: "es-MX", langs: ["es-MX", "es", "en-US", "en"] },
	{ display: "Spanish (Spain)", value: "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3", lang: "es-ES", langs: ["es-ES", "es", "en-US", "en"] },
	{ display: "Swedish", value: "sv-SE,sv;q=0.8,en-US;q=0.5,en;q=0.3", lang: "sv-SE", langs: ["sv-SE", "sv", "en-US", "en"] },
	{ display: "Tamil", value: "ta-IN,ta;q=0.8,en-US;q=0.5,en;q=0.3", lang: "ta-IN", langs: ["ta-IN", "ta", "en-US", "en"] },
	{ display: "Telugu", value: "te-IN,te;q=0.8,en-US;q=0.5,en;q=0.3", lang: "te-IN", langs: ["te-IN", "te", "en-US", "en"] },
	{ display: "Thai", value: "th,en-US;q=0.7,en;q=0.3", lang: "th", langs: ["th", "en-US", "en"] },
	{ display: "Turkish", value: "tr-TR,tr;q=0.8,en-US;q=0.5,en;q=0.3", lang: "tr-TR", langs: ["tr-TR", "tr", "en-US", "en"] },
	{ display: "Ukranian", value: "uk,ru;q=0.8,en-US;q=0.5,en;q=0.3", lang: "uk", langs: ["uk", "ru", "en-US", "en"] },
	{ display: "Upper Sorbian", value: "hsb,dsb;q=0.8,de;q=0.6,en-US;q=0.4,en;q=0.2", lang: "hsb", langs: ["hsb", "dsb", "de", "en-US", "en"] },
	{ display: "Urdu", value: "ur-PK,ur;q=0.8,en-US;q=0.5,en;q=0.3", lang: "ur-PK", langs: ["ur-PK", "ur", "en-US", "en"] },
	{ display: "Uzbek", value: "uz,ru;q=0.8,en;q=0.5,en-US;q=0.3", lang: "uz", langs: ["uz", "ru", "en", "en-US"] },
	{ display: "Vietnamese", value: "vi-VN,vi;q=0.8,en-US;q=0.5,en;q=0.3", lang: "vi-VN", langs: ["vi-VN", "vi", "en-US", "en"] },
	{ display: "Welsh", value: "cy-GB,cy;q=0.8,en-US;q=0.5,en;q=0.3", lang: "cy-GB", langs: ["cy-GB", "cy", "en-US", "en"] },
	{ display: "Xhosa", value: "xh-ZA,xh;q=0.8,en-US;q=0.5,en;q=0.3", lang: "xh-ZA", langs: ["xh-ZA", "xh", "en-US", "en"] }
];

let langList = languages.map(l => l.value.match(/([a-z]{2,3})(-[A-Z]{2})?/g))

// platform list
let platforms = Object.keys(uaList);
platforms.push("custom");

// menu headers
let menu = ["profile", "headers", "options", "whitelist", "about"];

// options
let options = ["scriptInjection", "standard", "cookies", "misc", "reporting"];

// whitelist
let whitelist = ["whitelistProfile", "whitelistRules"];

const timezones = [
  {
    "zone": "Etc/GMT+12",
    "offset": "-12:00"
  },
  {
    "zone": "Etc/GMT+11",
    "offset": "-11:00"
  },
  {
    "zone": "Pacific/Midway",
    "offset": "-11:00"
  },
  {
    "zone": "Pacific/Niue",
    "offset": "-11:00"
  },
  {
    "zone": "Pacific/Pago_Pago",
    "offset": "-11:00"
  },
  {
    "zone": "Pacific/Samoa",
    "offset": "-11:00"
  },
  {
    "zone": "US/Samoa",
    "offset": "-11:00"
  },
  {
    "zone": "Etc/GMT+10",
    "offset": "-10:00"
  },
  {
    "zone": "HST",
    "offset": "-10:00"
  },
  {
    "zone": "Pacific/Honolulu",
    "offset": "-10:00"
  },
  {
    "zone": "Pacific/Johnston",
    "offset": "-10:00"
  },
  {
    "zone": "Pacific/Rarotonga",
    "offset": "-10:00"
  },
  {
    "zone": "Pacific/Tahiti",
    "offset": "-10:00"
  },
  {
    "zone": "US/Hawaii",
    "offset": "-10:00"
  },
  {
    "zone": "Pacific/Marquesas",
    "offset": "-09:30"
  },
  {
    "zone": "America/Adak",
    "offset": "-09:00"
  },
  {
    "zone": "America/Atka",
    "offset": "-09:00"
  },
  {
    "zone": "Etc/GMT+9",
    "offset": "-09:00"
  },
  {
    "zone": "Pacific/Gambier",
    "offset": "-09:00"
  },
  {
    "zone": "US/Aleutian",
    "offset": "-09:00"
  },
  {
    "zone": "America/Anchorage",
    "offset": "-08:00"
  },
  {
    "zone": "America/Juneau",
    "offset": "-08:00"
  },
  {
    "zone": "America/Metlakatla",
    "offset": "-08:00"
  },
  {
    "zone": "America/Nome",
    "offset": "-08:00"
  },
  {
    "zone": "America/Sitka",
    "offset": "-08:00"
  },
  {
    "zone": "America/Yakutat",
    "offset": "-08:00"
  },
  {
    "zone": "Etc/GMT+8",
    "offset": "-08:00"
  },
  {
    "zone": "Pacific/Pitcairn",
    "offset": "-08:00"
  },
  {
    "zone": "US/Alaska",
    "offset": "-08:00"
  },
  {
    "zone": "America/Creston",
    "offset": "-07:00"
  },
  {
    "zone": "America/Dawson",
    "offset": "-07:00"
  },
  {
    "zone": "America/Dawson_Creek",
    "offset": "-07:00"
  },
  {
    "zone": "America/Ensenada",
    "offset": "-07:00"
  },
  {
    "zone": "America/Fort_Nelson",
    "offset": "-07:00"
  },
  {
    "zone": "America/Hermosillo",
    "offset": "-07:00"
  },
  {
    "zone": "America/Los_Angeles",
    "offset": "-07:00"
  },
  {
    "zone": "America/Phoenix",
    "offset": "-07:00"
  },
  {
    "zone": "America/Santa_Isabel",
    "offset": "-07:00"
  },
  {
    "zone": "America/Tijuana",
    "offset": "-07:00"
  },
  {
    "zone": "America/Vancouver",
    "offset": "-07:00"
  },
  {
    "zone": "America/Whitehorse",
    "offset": "-07:00"
  },
  {
    "zone": "Canada/Pacific",
    "offset": "-07:00"
  },
  {
    "zone": "Canada/Yukon",
    "offset": "-07:00"
  },
  {
    "zone": "Etc/GMT+7",
    "offset": "-07:00"
  },
  {
    "zone": "MST",
    "offset": "-07:00"
  },
  {
    "zone": "Mexico/BajaNorte",
    "offset": "-07:00"
  },
  {
    "zone": "PST8PDT",
    "offset": "-07:00"
  },
  {
    "zone": "US/Arizona",
    "offset": "-07:00"
  },
  {
    "zone": "US/Pacific",
    "offset": "-07:00"
  },
  {
    "zone": "US/Pacific-New",
    "offset": "-07:00"
  },
  {
    "zone": "America/Belize",
    "offset": "-06:00"
  },
  {
    "zone": "America/Boise",
    "offset": "-06:00"
  },
  {
    "zone": "America/Cambridge_Bay",
    "offset": "-06:00"
  },
  {
    "zone": "America/Chihuahua",
    "offset": "-06:00"
  },
  {
    "zone": "America/Costa_Rica",
    "offset": "-06:00"
  },
  {
    "zone": "America/Denver",
    "offset": "-06:00"
  },
  {
    "zone": "America/Edmonton",
    "offset": "-06:00"
  },
  {
    "zone": "America/El_Salvador",
    "offset": "-06:00"
  },
  {
    "zone": "America/Guatemala",
    "offset": "-06:00"
  },
  {
    "zone": "America/Inuvik",
    "offset": "-06:00"
  },
  {
    "zone": "America/Managua",
    "offset": "-06:00"
  },
  {
    "zone": "America/Mazatlan",
    "offset": "-06:00"
  },
  {
    "zone": "America/Ojinaga",
    "offset": "-06:00"
  },
  {
    "zone": "America/Regina",
    "offset": "-06:00"
  },
  {
    "zone": "America/Shiprock",
    "offset": "-06:00"
  },
  {
    "zone": "America/Swift_Current",
    "offset": "-06:00"
  },
  {
    "zone": "America/Tegucigalpa",
    "offset": "-06:00"
  },
  {
    "zone": "America/Yellowknife",
    "offset": "-06:00"
  },
  {
    "zone": "Canada/Mountain",
    "offset": "-06:00"
  },
  {
    "zone": "Canada/Saskatchewan",
    "offset": "-06:00"
  },
  {
    "zone": "Chile/EasterIsland",
    "offset": "-06:00"
  },
  {
    "zone": "Etc/GMT+6",
    "offset": "-06:00"
  },
  {
    "zone": "MST7MDT",
    "offset": "-06:00"
  },
  {
    "zone": "Mexico/BajaSur",
    "offset": "-06:00"
  },
  {
    "zone": "Navajo",
    "offset": "-06:00"
  },
  {
    "zone": "Pacific/Easter",
    "offset": "-06:00"
  },
  {
    "zone": "Pacific/Galapagos",
    "offset": "-06:00"
  },
  {
    "zone": "US/Mountain",
    "offset": "-06:00"
  },
  {
    "zone": "America/Atikokan",
    "offset": "-05:00"
  },
  {
    "zone": "America/Bahia_Banderas",
    "offset": "-05:00"
  },
  {
    "zone": "America/Bogota",
    "offset": "-05:00"
  },
  {
    "zone": "America/Cancun",
    "offset": "-05:00"
  },
  {
    "zone": "America/Cayman",
    "offset": "-05:00"
  },
  {
    "zone": "America/Chicago",
    "offset": "-05:00"
  },
  {
    "zone": "America/Coral_Harbour",
    "offset": "-05:00"
  },
  {
    "zone": "America/Eirunepe",
    "offset": "-05:00"
  },
  {
    "zone": "America/Guayaquil",
    "offset": "-05:00"
  },
  {
    "zone": "America/Indiana/Knox",
    "offset": "-05:00"
  },
  {
    "zone": "America/Indiana/Tell_City",
    "offset": "-05:00"
  },
  {
    "zone": "America/Jamaica",
    "offset": "-05:00"
  },
  {
    "zone": "America/Knox_IN",
    "offset": "-05:00"
  },
  {
    "zone": "America/Lima",
    "offset": "-05:00"
  },
  {
    "zone": "America/Matamoros",
    "offset": "-05:00"
  },
  {
    "zone": "America/Menominee",
    "offset": "-05:00"
  },
  {
    "zone": "America/Merida",
    "offset": "-05:00"
  },
  {
    "zone": "America/Mexico_City",
    "offset": "-05:00"
  },
  {
    "zone": "America/Monterrey",
    "offset": "-05:00"
  },
  {
    "zone": "America/North_Dakota/Beulah",
    "offset": "-05:00"
  },
  {
    "zone": "America/North_Dakota/Center",
    "offset": "-05:00"
  },
  {
    "zone": "America/North_Dakota/New_Salem",
    "offset": "-05:00"
  },
  {
    "zone": "America/Panama",
    "offset": "-05:00"
  },
  {
    "zone": "America/Porto_Acre",
    "offset": "-05:00"
  },
  {
    "zone": "America/Rainy_River",
    "offset": "-05:00"
  },
  {
    "zone": "America/Rankin_Inlet",
    "offset": "-05:00"
  },
  {
    "zone": "America/Resolute",
    "offset": "-05:00"
  },
  {
    "zone": "America/Rio_Branco",
    "offset": "-05:00"
  },
  {
    "zone": "America/Winnipeg",
    "offset": "-05:00"
  },
  {
    "zone": "Brazil/Acre",
    "offset": "-05:00"
  },
  {
    "zone": "CST6CDT",
    "offset": "-05:00"
  },
  {
    "zone": "Canada/Central",
    "offset": "-05:00"
  },
  {
    "zone": "EST",
    "offset": "-05:00"
  },
  {
    "zone": "Etc/GMT+5",
    "offset": "-05:00"
  },
  {
    "zone": "Jamaica",
    "offset": "-05:00"
  },
  {
    "zone": "Mexico/General",
    "offset": "-05:00"
  },
  {
    "zone": "US/Central",
    "offset": "-05:00"
  },
  {
    "zone": "US/Indiana-Starke",
    "offset": "-05:00"
  },
  {
    "zone": "America/Anguilla",
    "offset": "-04:00"
  },
  {
    "zone": "America/Antigua",
    "offset": "-04:00"
  },
  {
    "zone": "America/Aruba",
    "offset": "-04:00"
  },
  {
    "zone": "America/Asuncion",
    "offset": "-04:00"
  },
  {
    "zone": "America/Barbados",
    "offset": "-04:00"
  },
  {
    "zone": "America/Blanc-Sablon",
    "offset": "-04:00"
  },
  {
    "zone": "America/Boa_Vista",
    "offset": "-04:00"
  },
  {
    "zone": "America/Campo_Grande",
    "offset": "-04:00"
  },
  {
    "zone": "America/Caracas",
    "offset": "-04:00"
  },
  {
    "zone": "America/Cuiaba",
    "offset": "-04:00"
  },
  {
    "zone": "America/Curacao",
    "offset": "-04:00"
  },
  {
    "zone": "America/Detroit",
    "offset": "-04:00"
  },
  {
    "zone": "America/Dominica",
    "offset": "-04:00"
  },
  {
    "zone": "America/Fort_Wayne",
    "offset": "-04:00"
  },
  {
    "zone": "America/Grand_Turk",
    "offset": "-04:00"
  },
  {
    "zone": "America/Grenada",
    "offset": "-04:00"
  },
  {
    "zone": "America/Guadeloupe",
    "offset": "-04:00"
  },
  {
    "zone": "America/Guyana",
    "offset": "-04:00"
  },
  {
    "zone": "America/Havana",
    "offset": "-04:00"
  },
  {
    "zone": "America/Indiana/Indianapolis",
    "offset": "-04:00"
  },
  {
    "zone": "America/Indiana/Marengo",
    "offset": "-04:00"
  },
  {
    "zone": "America/Indiana/Petersburg",
    "offset": "-04:00"
  },
  {
    "zone": "America/Indiana/Vevay",
    "offset": "-04:00"
  },
  {
    "zone": "America/Indiana/Vincennes",
    "offset": "-04:00"
  },
  {
    "zone": "America/Indiana/Winamac",
    "offset": "-04:00"
  },
  {
    "zone": "America/Indianapolis",
    "offset": "-04:00"
  },
  {
    "zone": "America/Iqaluit",
    "offset": "-04:00"
  },
  {
    "zone": "America/Kentucky/Louisville",
    "offset": "-04:00"
  },
  {
    "zone": "America/Kentucky/Monticello",
    "offset": "-04:00"
  },
  {
    "zone": "America/Kralendijk",
    "offset": "-04:00"
  },
  {
    "zone": "America/La_Paz",
    "offset": "-04:00"
  },
  {
    "zone": "America/Louisville",
    "offset": "-04:00"
  },
  {
    "zone": "America/Lower_Princes",
    "offset": "-04:00"
  },
  {
    "zone": "America/Manaus",
    "offset": "-04:00"
  },
  {
    "zone": "America/Marigot",
    "offset": "-04:00"
  },
  {
    "zone": "America/Martinique",
    "offset": "-04:00"
  },
  {
    "zone": "America/Montreal",
    "offset": "-04:00"
  },
  {
    "zone": "America/Montserrat",
    "offset": "-04:00"
  },
  {
    "zone": "America/Nassau",
    "offset": "-04:00"
  },
  {
    "zone": "America/New_York",
    "offset": "-04:00"
  },
  {
    "zone": "America/Nipigon",
    "offset": "-04:00"
  },
  {
    "zone": "America/Pangnirtung",
    "offset": "-04:00"
  },
  {
    "zone": "America/Port-au-Prince",
    "offset": "-04:00"
  },
  {
    "zone": "America/Port_of_Spain",
    "offset": "-04:00"
  },
  {
    "zone": "America/Porto_Velho",
    "offset": "-04:00"
  },
  {
    "zone": "America/Puerto_Rico",
    "offset": "-04:00"
  },
  {
    "zone": "America/Santiago",
    "offset": "-04:00"
  },
  {
    "zone": "America/Santo_Domingo",
    "offset": "-04:00"
  },
  {
    "zone": "America/St_Barthelemy",
    "offset": "-04:00"
  },
  {
    "zone": "America/St_Kitts",
    "offset": "-04:00"
  },
  {
    "zone": "America/St_Lucia",
    "offset": "-04:00"
  },
  {
    "zone": "America/St_Thomas",
    "offset": "-04:00"
  },
  {
    "zone": "America/St_Vincent",
    "offset": "-04:00"
  },
  {
    "zone": "America/Thunder_Bay",
    "offset": "-04:00"
  },
  {
    "zone": "America/Toronto",
    "offset": "-04:00"
  },
  {
    "zone": "America/Tortola",
    "offset": "-04:00"
  },
  {
    "zone": "America/Virgin",
    "offset": "-04:00"
  },
  {
    "zone": "Brazil/West",
    "offset": "-04:00"
  },
  {
    "zone": "Canada/Eastern",
    "offset": "-04:00"
  },
  {
    "zone": "Chile/Continental",
    "offset": "-04:00"
  },
  {
    "zone": "Cuba",
    "offset": "-04:00"
  },
  {
    "zone": "EST5EDT",
    "offset": "-04:00"
  },
  {
    "zone": "Etc/GMT+4",
    "offset": "-04:00"
  },
  {
    "zone": "US/East-Indiana",
    "offset": "-04:00"
  },
  {
    "zone": "US/Eastern",
    "offset": "-04:00"
  },
  {
    "zone": "US/Michigan",
    "offset": "-04:00"
  },
  {
    "zone": "America/Araguaina",
    "offset": "-03:00"
  },
  {
    "zone": "America/Argentina/Buenos_Aires",
    "offset": "-03:00"
  },
  {
    "zone": "America/Argentina/Catamarca",
    "offset": "-03:00"
  },
  {
    "zone": "America/Argentina/ComodRivadavia",
    "offset": "-03:00"
  },
  {
    "zone": "America/Argentina/Cordoba",
    "offset": "-03:00"
  },
  {
    "zone": "America/Argentina/Jujuy",
    "offset": "-03:00"
  },
  {
    "zone": "America/Argentina/La_Rioja",
    "offset": "-03:00"
  },
  {
    "zone": "America/Argentina/Mendoza",
    "offset": "-03:00"
  },
  {
    "zone": "America/Argentina/Rio_Gallegos",
    "offset": "-03:00"
  },
  {
    "zone": "America/Argentina/Salta",
    "offset": "-03:00"
  },
  {
    "zone": "America/Argentina/San_Juan",
    "offset": "-03:00"
  },
  {
    "zone": "America/Argentina/San_Luis",
    "offset": "-03:00"
  },
  {
    "zone": "America/Argentina/Tucuman",
    "offset": "-03:00"
  },
  {
    "zone": "America/Argentina/Ushuaia",
    "offset": "-03:00"
  },
  {
    "zone": "America/Bahia",
    "offset": "-03:00"
  },
  {
    "zone": "America/Belem",
    "offset": "-03:00"
  },
  {
    "zone": "America/Buenos_Aires",
    "offset": "-03:00"
  },
  {
    "zone": "America/Catamarca",
    "offset": "-03:00"
  },
  {
    "zone": "America/Cayenne",
    "offset": "-03:00"
  },
  {
    "zone": "America/Cordoba",
    "offset": "-03:00"
  },
  {
    "zone": "America/Fortaleza",
    "offset": "-03:00"
  },
  {
    "zone": "America/Glace_Bay",
    "offset": "-03:00"
  },
  {
    "zone": "America/Goose_Bay",
    "offset": "-03:00"
  },
  {
    "zone": "America/Halifax",
    "offset": "-03:00"
  },
  {
    "zone": "America/Jujuy",
    "offset": "-03:00"
  },
  {
    "zone": "America/Maceio",
    "offset": "-03:00"
  },
  {
    "zone": "America/Mendoza",
    "offset": "-03:00"
  },
  {
    "zone": "America/Moncton",
    "offset": "-03:00"
  },
  {
    "zone": "America/Montevideo",
    "offset": "-03:00"
  },
  {
    "zone": "America/Paramaribo",
    "offset": "-03:00"
  },
  {
    "zone": "America/Punta_Arenas",
    "offset": "-03:00"
  },
  {
    "zone": "America/Recife",
    "offset": "-03:00"
  },
  {
    "zone": "America/Rosario",
    "offset": "-03:00"
  },
  {
    "zone": "America/Santarem",
    "offset": "-03:00"
  },
  {
    "zone": "America/Sao_Paulo",
    "offset": "-03:00"
  },
  {
    "zone": "America/Thule",
    "offset": "-03:00"
  },
  {
    "zone": "Antarctica/Palmer",
    "offset": "-03:00"
  },
  {
    "zone": "Antarctica/Rothera",
    "offset": "-03:00"
  },
  {
    "zone": "Atlantic/Bermuda",
    "offset": "-03:00"
  },
  {
    "zone": "Atlantic/Stanley",
    "offset": "-03:00"
  },
  {
    "zone": "Brazil/East",
    "offset": "-03:00"
  },
  {
    "zone": "Canada/Atlantic",
    "offset": "-03:00"
  },
  {
    "zone": "Etc/GMT+3",
    "offset": "-03:00"
  },
  {
    "zone": "America/St_Johns",
    "offset": "-02:30"
  },
  {
    "zone": "Canada/Newfoundland",
    "offset": "-02:30"
  },
  {
    "zone": "America/Godthab",
    "offset": "-02:00"
  },
  {
    "zone": "America/Miquelon",
    "offset": "-02:00"
  },
  {
    "zone": "America/Noronha",
    "offset": "-02:00"
  },
  {
    "zone": "Atlantic/South_Georgia",
    "offset": "-02:00"
  },
  {
    "zone": "Brazil/DeNoronha",
    "offset": "-02:00"
  },
  {
    "zone": "Etc/GMT+2",
    "offset": "-02:00"
  },
  {
    "zone": "Atlantic/Cape_Verde",
    "offset": "-01:00"
  },
  {
    "zone": "Etc/GMT+1",
    "offset": "-01:00"
  },
  {
    "zone": "Africa/Abidjan",
    "offset": ""
  },
  {
    "zone": "Africa/Accra",
    "offset": ""
  },
  {
    "zone": "Africa/Bamako",
    "offset": ""
  },
  {
    "zone": "Africa/Banjul",
    "offset": ""
  },
  {
    "zone": "Africa/Bissau",
    "offset": ""
  },
  {
    "zone": "Africa/Conakry",
    "offset": ""
  },
  {
    "zone": "Africa/Dakar",
    "offset": ""
  },
  {
    "zone": "Africa/Freetown",
    "offset": ""
  },
  {
    "zone": "Africa/Lome",
    "offset": ""
  },
  {
    "zone": "Africa/Monrovia",
    "offset": ""
  },
  {
    "zone": "Africa/Nouakchott",
    "offset": ""
  },
  {
    "zone": "Africa/Ouagadougou",
    "offset": ""
  },
  {
    "zone": "Africa/Sao_Tome",
    "offset": ""
  },
  {
    "zone": "Africa/Timbuktu",
    "offset": ""
  },
  {
    "zone": "America/Danmarkshavn",
    "offset": ""
  },
  {
    "zone": "America/Scoresbysund",
    "offset": ""
  },
  {
    "zone": "Atlantic/Azores",
    "offset": ""
  },
  {
    "zone": "Atlantic/Reykjavik",
    "offset": ""
  },
  {
    "zone": "Atlantic/St_Helena",
    "offset": ""
  },
  {
    "zone": "Etc/GMT",
    "offset": ""
  },
  {
    "zone": "Etc/GMT+0",
    "offset": ""
  },
  {
    "zone": "Etc/GMT-0",
    "offset": ""
  },
  {
    "zone": "Etc/GMT0",
    "offset": ""
  },
  {
    "zone": "Etc/Greenwich",
    "offset": ""
  },
  {
    "zone": "Etc/UCT",
    "offset": ""
  },
  {
    "zone": "Etc/UTC",
    "offset": ""
  },
  {
    "zone": "Etc/Universal",
    "offset": ""
  },
  {
    "zone": "Etc/Zulu",
    "offset": ""
  },
  {
    "zone": "GMT",
    "offset": ""
  },
  {
    "zone": "GMT+0",
    "offset": ""
  },
  {
    "zone": "GMT-0",
    "offset": ""
  },
  {
    "zone": "GMT0",
    "offset": ""
  },
  {
    "zone": "Greenwich",
    "offset": ""
  },
  {
    "zone": "Iceland",
    "offset": ""
  },
  {
    "zone": "UCT",
    "offset": ""
  },
  {
    "zone": "UTC",
    "offset": ""
  },
  {
    "zone": "Universal",
    "offset": ""
  },
  {
    "zone": "Zulu",
    "offset": ""
  },
  {
    "zone": "Africa/Algiers",
    "offset": "+01:00"
  },
  {
    "zone": "Africa/Bangui",
    "offset": "+01:00"
  },
  {
    "zone": "Africa/Brazzaville",
    "offset": "+01:00"
  },
  {
    "zone": "Africa/Casablanca",
    "offset": "+01:00"
  },
  {
    "zone": "Africa/Douala",
    "offset": "+01:00"
  },
  {
    "zone": "Africa/El_Aaiun",
    "offset": "+01:00"
  },
  {
    "zone": "Africa/Kinshasa",
    "offset": "+01:00"
  },
  {
    "zone": "Africa/Lagos",
    "offset": "+01:00"
  },
  {
    "zone": "Africa/Libreville",
    "offset": "+01:00"
  },
  {
    "zone": "Africa/Luanda",
    "offset": "+01:00"
  },
  {
    "zone": "Africa/Malabo",
    "offset": "+01:00"
  },
  {
    "zone": "Africa/Ndjamena",
    "offset": "+01:00"
  },
  {
    "zone": "Africa/Niamey",
    "offset": "+01:00"
  },
  {
    "zone": "Africa/Porto-Novo",
    "offset": "+01:00"
  },
  {
    "zone": "Africa/Tunis",
    "offset": "+01:00"
  },
  {
    "zone": "Atlantic/Canary",
    "offset": "+01:00"
  },
  {
    "zone": "Atlantic/Faeroe",
    "offset": "+01:00"
  },
  {
    "zone": "Atlantic/Faroe",
    "offset": "+01:00"
  },
  {
    "zone": "Atlantic/Madeira",
    "offset": "+01:00"
  },
  {
    "zone": "Eire",
    "offset": "+01:00"
  },
  {
    "zone": "Etc/GMT-1",
    "offset": "+01:00"
  },
  {
    "zone": "Europe/Belfast",
    "offset": "+01:00"
  },
  {
    "zone": "Europe/Dublin",
    "offset": "+01:00"
  },
  {
    "zone": "Europe/Guernsey",
    "offset": "+01:00"
  },
  {
    "zone": "Europe/Isle_of_Man",
    "offset": "+01:00"
  },
  {
    "zone": "Europe/Jersey",
    "offset": "+01:00"
  },
  {
    "zone": "Europe/Lisbon",
    "offset": "+01:00"
  },
  {
    "zone": "Europe/London",
    "offset": "+01:00"
  },
  {
    "zone": "GB",
    "offset": "+01:00"
  },
  {
    "zone": "GB-Eire",
    "offset": "+01:00"
  },
  {
    "zone": "Portugal",
    "offset": "+01:00"
  },
  {
    "zone": "WET",
    "offset": "+01:00"
  },
  {
    "zone": "Africa/Blantyre",
    "offset": "+02:00"
  },
  {
    "zone": "Africa/Bujumbura",
    "offset": "+02:00"
  },
  {
    "zone": "Africa/Cairo",
    "offset": "+02:00"
  },
  {
    "zone": "Africa/Ceuta",
    "offset": "+02:00"
  },
  {
    "zone": "Africa/Gaborone",
    "offset": "+02:00"
  },
  {
    "zone": "Africa/Harare",
    "offset": "+02:00"
  },
  {
    "zone": "Africa/Johannesburg",
    "offset": "+02:00"
  },
  {
    "zone": "Africa/Khartoum",
    "offset": "+02:00"
  },
  {
    "zone": "Africa/Kigali",
    "offset": "+02:00"
  },
  {
    "zone": "Africa/Lubumbashi",
    "offset": "+02:00"
  },
  {
    "zone": "Africa/Lusaka",
    "offset": "+02:00"
  },
  {
    "zone": "Africa/Maputo",
    "offset": "+02:00"
  },
  {
    "zone": "Africa/Maseru",
    "offset": "+02:00"
  },
  {
    "zone": "Africa/Mbabane",
    "offset": "+02:00"
  },
  {
    "zone": "Africa/Tripoli",
    "offset": "+02:00"
  },
  {
    "zone": "Africa/Windhoek",
    "offset": "+02:00"
  },
  {
    "zone": "Antarctica/Troll",
    "offset": "+02:00"
  },
  {
    "zone": "Arctic/Longyearbyen",
    "offset": "+02:00"
  },
  {
    "zone": "Atlantic/Jan_Mayen",
    "offset": "+02:00"
  },
  {
    "zone": "CET",
    "offset": "+02:00"
  },
  {
    "zone": "Egypt",
    "offset": "+02:00"
  },
  {
    "zone": "Etc/GMT-2",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Amsterdam",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Andorra",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Belgrade",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Berlin",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Bratislava",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Brussels",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Budapest",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Busingen",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Copenhagen",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Gibraltar",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Kaliningrad",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Ljubljana",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Luxembourg",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Madrid",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Malta",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Monaco",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Oslo",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Paris",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Podgorica",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Prague",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Rome",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/San_Marino",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Sarajevo",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Skopje",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Stockholm",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Tirane",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Vaduz",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Vatican",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Vienna",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Warsaw",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Zagreb",
    "offset": "+02:00"
  },
  {
    "zone": "Europe/Zurich",
    "offset": "+02:00"
  },
  {
    "zone": "Libya",
    "offset": "+02:00"
  },
  {
    "zone": "MET",
    "offset": "+02:00"
  },
  {
    "zone": "Poland",
    "offset": "+02:00"
  },
  {
    "zone": "Africa/Addis_Ababa",
    "offset": "+03:00"
  },
  {
    "zone": "Africa/Asmara",
    "offset": "+03:00"
  },
  {
    "zone": "Africa/Asmera",
    "offset": "+03:00"
  },
  {
    "zone": "Africa/Dar_es_Salaam",
    "offset": "+03:00"
  },
  {
    "zone": "Africa/Djibouti",
    "offset": "+03:00"
  },
  {
    "zone": "Africa/Juba",
    "offset": "+03:00"
  },
  {
    "zone": "Africa/Kampala",
    "offset": "+03:00"
  },
  {
    "zone": "Africa/Mogadishu",
    "offset": "+03:00"
  },
  {
    "zone": "Africa/Nairobi",
    "offset": "+03:00"
  },
  {
    "zone": "Antarctica/Syowa",
    "offset": "+03:00"
  },
  {
    "zone": "Asia/Aden",
    "offset": "+03:00"
  },
  {
    "zone": "Asia/Amman",
    "offset": "+03:00"
  },
  {
    "zone": "Asia/Baghdad",
    "offset": "+03:00"
  },
  {
    "zone": "Asia/Bahrain",
    "offset": "+03:00"
  },
  {
    "zone": "Asia/Beirut",
    "offset": "+03:00"
  },
  {
    "zone": "Asia/Damascus",
    "offset": "+03:00"
  },
  {
    "zone": "Asia/Famagusta",
    "offset": "+03:00"
  },
  {
    "zone": "Asia/Gaza",
    "offset": "+03:00"
  },
  {
    "zone": "Asia/Hebron",
    "offset": "+03:00"
  },
  {
    "zone": "Asia/Istanbul",
    "offset": "+03:00"
  },
  {
    "zone": "Asia/Jerusalem",
    "offset": "+03:00"
  },
  {
    "zone": "Asia/Kuwait",
    "offset": "+03:00"
  },
  {
    "zone": "Asia/Nicosia",
    "offset": "+03:00"
  },
  {
    "zone": "Asia/Qatar",
    "offset": "+03:00"
  },
  {
    "zone": "Asia/Riyadh",
    "offset": "+03:00"
  },
  {
    "zone": "Asia/Tel_Aviv",
    "offset": "+03:00"
  },
  {
    "zone": "EET",
    "offset": "+03:00"
  },
  {
    "zone": "Etc/GMT-3",
    "offset": "+03:00"
  },
  {
    "zone": "Europe/Athens",
    "offset": "+03:00"
  },
  {
    "zone": "Europe/Bucharest",
    "offset": "+03:00"
  },
  {
    "zone": "Europe/Chisinau",
    "offset": "+03:00"
  },
  {
    "zone": "Europe/Helsinki",
    "offset": "+03:00"
  },
  {
    "zone": "Europe/Istanbul",
    "offset": "+03:00"
  },
  {
    "zone": "Europe/Kiev",
    "offset": "+03:00"
  },
  {
    "zone": "Europe/Kirov",
    "offset": "+03:00"
  },
  {
    "zone": "Europe/Mariehamn",
    "offset": "+03:00"
  },
  {
    "zone": "Europe/Minsk",
    "offset": "+03:00"
  },
  {
    "zone": "Europe/Moscow",
    "offset": "+03:00"
  },
  {
    "zone": "Europe/Nicosia",
    "offset": "+03:00"
  },
  {
    "zone": "Europe/Riga",
    "offset": "+03:00"
  },
  {
    "zone": "Europe/Simferopol",
    "offset": "+03:00"
  },
  {
    "zone": "Europe/Sofia",
    "offset": "+03:00"
  },
  {
    "zone": "Europe/Tallinn",
    "offset": "+03:00"
  },
  {
    "zone": "Europe/Tiraspol",
    "offset": "+03:00"
  },
  {
    "zone": "Europe/Uzhgorod",
    "offset": "+03:00"
  },
  {
    "zone": "Europe/Vilnius",
    "offset": "+03:00"
  },
  {
    "zone": "Europe/Zaporozhye",
    "offset": "+03:00"
  },
  {
    "zone": "Indian/Antananarivo",
    "offset": "+03:00"
  },
  {
    "zone": "Indian/Comoro",
    "offset": "+03:00"
  },
  {
    "zone": "Indian/Mayotte",
    "offset": "+03:00"
  },
  {
    "zone": "Israel",
    "offset": "+03:00"
  },
  {
    "zone": "Turkey",
    "offset": "+03:00"
  },
  {
    "zone": "W-SU",
    "offset": "+03:00"
  },
  {
    "zone": "Asia/Baku",
    "offset": "+04:00"
  },
  {
    "zone": "Asia/Dubai",
    "offset": "+04:00"
  },
  {
    "zone": "Asia/Muscat",
    "offset": "+04:00"
  },
  {
    "zone": "Asia/Tbilisi",
    "offset": "+04:00"
  },
  {
    "zone": "Asia/Yerevan",
    "offset": "+04:00"
  },
  {
    "zone": "Etc/GMT-4",
    "offset": "+04:00"
  },
  {
    "zone": "Europe/Astrakhan",
    "offset": "+04:00"
  },
  {
    "zone": "Europe/Samara",
    "offset": "+04:00"
  },
  {
    "zone": "Europe/Saratov",
    "offset": "+04:00"
  },
  {
    "zone": "Europe/Ulyanovsk",
    "offset": "+04:00"
  },
  {
    "zone": "Europe/Volgograd",
    "offset": "+04:00"
  },
  {
    "zone": "Indian/Mahe",
    "offset": "+04:00"
  },
  {
    "zone": "Indian/Mauritius",
    "offset": "+04:00"
  },
  {
    "zone": "Indian/Reunion",
    "offset": "+04:00"
  },
  {
    "zone": "Asia/Kabul",
    "offset": "+04:30"
  },
  {
    "zone": "Asia/Tehran",
    "offset": "+04:30"
  },
  {
    "zone": "Iran",
    "offset": "+04:30"
  },
  {
    "zone": "Antarctica/Mawson",
    "offset": "+05:00"
  },
  {
    "zone": "Asia/Aqtau",
    "offset": "+05:00"
  },
  {
    "zone": "Asia/Aqtobe",
    "offset": "+05:00"
  },
  {
    "zone": "Asia/Ashgabat",
    "offset": "+05:00"
  },
  {
    "zone": "Asia/Ashkhabad",
    "offset": "+05:00"
  },
  {
    "zone": "Asia/Atyrau",
    "offset": "+05:00"
  },
  {
    "zone": "Asia/Dushanbe",
    "offset": "+05:00"
  },
  {
    "zone": "Asia/Karachi",
    "offset": "+05:00"
  },
  {
    "zone": "Asia/Oral",
    "offset": "+05:00"
  },
  {
    "zone": "Asia/Qyzylorda",
    "offset": "+05:00"
  },
  {
    "zone": "Asia/Samarkand",
    "offset": "+05:00"
  },
  {
    "zone": "Asia/Tashkent",
    "offset": "+05:00"
  },
  {
    "zone": "Asia/Yekaterinburg",
    "offset": "+05:00"
  },
  {
    "zone": "Etc/GMT-5",
    "offset": "+05:00"
  },
  {
    "zone": "Indian/Kerguelen",
    "offset": "+05:00"
  },
  {
    "zone": "Indian/Maldives",
    "offset": "+05:00"
  },
  {
    "zone": "Asia/Calcutta",
    "offset": "+05:30"
  },
  {
    "zone": "Asia/Colombo",
    "offset": "+05:30"
  },
  {
    "zone": "Asia/Kolkata",
    "offset": "+05:30"
  },
  {
    "zone": "Asia/Kathmandu",
    "offset": "+05:45"
  },
  {
    "zone": "Asia/Katmandu",
    "offset": "+05:45"
  },
  {
    "zone": "Antarctica/Vostok",
    "offset": "+06:00"
  },
  {
    "zone": "Asia/Almaty",
    "offset": "+06:00"
  },
  {
    "zone": "Asia/Bishkek",
    "offset": "+06:00"
  },
  {
    "zone": "Asia/Dacca",
    "offset": "+06:00"
  },
  {
    "zone": "Asia/Dhaka",
    "offset": "+06:00"
  },
  {
    "zone": "Asia/Kashgar",
    "offset": "+06:00"
  },
  {
    "zone": "Asia/Omsk",
    "offset": "+06:00"
  },
  {
    "zone": "Asia/Qostanay",
    "offset": "+06:00"
  },
  {
    "zone": "Asia/Thimbu",
    "offset": "+06:00"
  },
  {
    "zone": "Asia/Thimphu",
    "offset": "+06:00"
  },
  {
    "zone": "Asia/Urumqi",
    "offset": "+06:00"
  },
  {
    "zone": "Etc/GMT-6",
    "offset": "+06:00"
  },
  {
    "zone": "Indian/Chagos",
    "offset": "+06:00"
  },
  {
    "zone": "Asia/Rangoon",
    "offset": "+06:30"
  },
  {
    "zone": "Asia/Yangon",
    "offset": "+06:30"
  },
  {
    "zone": "Indian/Cocos",
    "offset": "+06:30"
  },
  {
    "zone": "Antarctica/Davis",
    "offset": "+07:00"
  },
  {
    "zone": "Asia/Bangkok",
    "offset": "+07:00"
  },
  {
    "zone": "Asia/Barnaul",
    "offset": "+07:00"
  },
  {
    "zone": "Asia/Ho_Chi_Minh",
    "offset": "+07:00"
  },
  {
    "zone": "Asia/Hovd",
    "offset": "+07:00"
  },
  {
    "zone": "Asia/Jakarta",
    "offset": "+07:00"
  },
  {
    "zone": "Asia/Krasnoyarsk",
    "offset": "+07:00"
  },
  {
    "zone": "Asia/Novokuznetsk",
    "offset": "+07:00"
  },
  {
    "zone": "Asia/Novosibirsk",
    "offset": "+07:00"
  },
  {
    "zone": "Asia/Phnom_Penh",
    "offset": "+07:00"
  },
  {
    "zone": "Asia/Pontianak",
    "offset": "+07:00"
  },
  {
    "zone": "Asia/Saigon",
    "offset": "+07:00"
  },
  {
    "zone": "Asia/Tomsk",
    "offset": "+07:00"
  },
  {
    "zone": "Asia/Vientiane",
    "offset": "+07:00"
  },
  {
    "zone": "Etc/GMT-7",
    "offset": "+07:00"
  },
  {
    "zone": "Indian/Christmas",
    "offset": "+07:00"
  },
  {
    "zone": "Antarctica/Casey",
    "offset": "+08:00"
  },
  {
    "zone": "Asia/Brunei",
    "offset": "+08:00"
  },
  {
    "zone": "Asia/Choibalsan",
    "offset": "+08:00"
  },
  {
    "zone": "Asia/Chongqing",
    "offset": "+08:00"
  },
  {
    "zone": "Asia/Chungking",
    "offset": "+08:00"
  },
  {
    "zone": "Asia/Harbin",
    "offset": "+08:00"
  },
  {
    "zone": "Asia/Hong_Kong",
    "offset": "+08:00"
  },
  {
    "zone": "Asia/Irkutsk",
    "offset": "+08:00"
  },
  {
    "zone": "Asia/Kuala_Lumpur",
    "offset": "+08:00"
  },
  {
    "zone": "Asia/Kuching",
    "offset": "+08:00"
  },
  {
    "zone": "Asia/Macao",
    "offset": "+08:00"
  },
  {
    "zone": "Asia/Macau",
    "offset": "+08:00"
  },
  {
    "zone": "Asia/Makassar",
    "offset": "+08:00"
  },
  {
    "zone": "Asia/Manila",
    "offset": "+08:00"
  },
  {
    "zone": "Asia/Shanghai",
    "offset": "+08:00"
  },
  {
    "zone": "Asia/Singapore",
    "offset": "+08:00"
  },
  {
    "zone": "Asia/Taipei",
    "offset": "+08:00"
  },
  {
    "zone": "Asia/Ujung_Pandang",
    "offset": "+08:00"
  },
  {
    "zone": "Asia/Ulaanbaatar",
    "offset": "+08:00"
  },
  {
    "zone": "Asia/Ulan_Bator",
    "offset": "+08:00"
  },
  {
    "zone": "Australia/Perth",
    "offset": "+08:00"
  },
  {
    "zone": "Australia/West",
    "offset": "+08:00"
  },
  {
    "zone": "Etc/GMT-8",
    "offset": "+08:00"
  },
  {
    "zone": "Hongkong",
    "offset": "+08:00"
  },
  {
    "zone": "PRC",
    "offset": "+08:00"
  },
  {
    "zone": "ROC",
    "offset": "+08:00"
  },
  {
    "zone": "Singapore",
    "offset": "+08:00"
  },
  {
    "zone": "Australia/Eucla",
    "offset": "+08:45"
  },
  {
    "zone": "Asia/Chita",
    "offset": "+09:00"
  },
  {
    "zone": "Asia/Dili",
    "offset": "+09:00"
  },
  {
    "zone": "Asia/Jayapura",
    "offset": "+09:00"
  },
  {
    "zone": "Asia/Khandyga",
    "offset": "+09:00"
  },
  {
    "zone": "Asia/Pyongyang",
    "offset": "+09:00"
  },
  {
    "zone": "Asia/Seoul",
    "offset": "+09:00"
  },
  {
    "zone": "Asia/Tokyo",
    "offset": "+09:00"
  },
  {
    "zone": "Asia/Yakutsk",
    "offset": "+09:00"
  },
  {
    "zone": "Etc/GMT-9",
    "offset": "+09:00"
  },
  {
    "zone": "Japan",
    "offset": "+09:00"
  },
  {
    "zone": "Pacific/Palau",
    "offset": "+09:00"
  },
  {
    "zone": "ROK",
    "offset": "+09:00"
  },
  {
    "zone": "Australia/Adelaide",
    "offset": "+09:30"
  },
  {
    "zone": "Australia/Broken_Hill",
    "offset": "+09:30"
  },
  {
    "zone": "Australia/Darwin",
    "offset": "+09:30"
  },
  {
    "zone": "Australia/North",
    "offset": "+09:30"
  },
  {
    "zone": "Australia/South",
    "offset": "+09:30"
  },
  {
    "zone": "Australia/Yancowinna",
    "offset": "+09:30"
  },
  {
    "zone": "Antarctica/DumontDUrville",
    "offset": "+10:00"
  },
  {
    "zone": "Asia/Ust-Nera",
    "offset": "+10:00"
  },
  {
    "zone": "Asia/Vladivostok",
    "offset": "+10:00"
  },
  {
    "zone": "Australia/ACT",
    "offset": "+10:00"
  },
  {
    "zone": "Australia/Brisbane",
    "offset": "+10:00"
  },
  {
    "zone": "Australia/Canberra",
    "offset": "+10:00"
  },
  {
    "zone": "Australia/Currie",
    "offset": "+10:00"
  },
  {
    "zone": "Australia/Hobart",
    "offset": "+10:00"
  },
  {
    "zone": "Australia/Lindeman",
    "offset": "+10:00"
  },
  {
    "zone": "Australia/Melbourne",
    "offset": "+10:00"
  },
  {
    "zone": "Australia/NSW",
    "offset": "+10:00"
  },
  {
    "zone": "Australia/Queensland",
    "offset": "+10:00"
  },
  {
    "zone": "Australia/Sydney",
    "offset": "+10:00"
  },
  {
    "zone": "Australia/Tasmania",
    "offset": "+10:00"
  },
  {
    "zone": "Australia/Victoria",
    "offset": "+10:00"
  },
  {
    "zone": "Etc/GMT-10",
    "offset": "+10:00"
  },
  {
    "zone": "Pacific/Chuuk",
    "offset": "+10:00"
  },
  {
    "zone": "Pacific/Guam",
    "offset": "+10:00"
  },
  {
    "zone": "Pacific/Port_Moresby",
    "offset": "+10:00"
  },
  {
    "zone": "Pacific/Saipan",
    "offset": "+10:00"
  },
  {
    "zone": "Pacific/Truk",
    "offset": "+10:00"
  },
  {
    "zone": "Pacific/Yap",
    "offset": "+10:00"
  },
  {
    "zone": "Australia/LHI",
    "offset": "+10:30"
  },
  {
    "zone": "Australia/Lord_Howe",
    "offset": "+10:30"
  },
  {
    "zone": "Antarctica/Macquarie",
    "offset": "+11:00"
  },
  {
    "zone": "Asia/Magadan",
    "offset": "+11:00"
  },
  {
    "zone": "Asia/Sakhalin",
    "offset": "+11:00"
  },
  {
    "zone": "Asia/Srednekolymsk",
    "offset": "+11:00"
  },
  {
    "zone": "Etc/GMT-11",
    "offset": "+11:00"
  },
  {
    "zone": "Pacific/Bougainville",
    "offset": "+11:00"
  },
  {
    "zone": "Pacific/Efate",
    "offset": "+11:00"
  },
  {
    "zone": "Pacific/Guadalcanal",
    "offset": "+11:00"
  },
  {
    "zone": "Pacific/Kosrae",
    "offset": "+11:00"
  },
  {
    "zone": "Pacific/Norfolk",
    "offset": "+11:00"
  },
  {
    "zone": "Pacific/Noumea",
    "offset": "+11:00"
  },
  {
    "zone": "Pacific/Pohnpei",
    "offset": "+11:00"
  },
  {
    "zone": "Pacific/Ponape",
    "offset": "+11:00"
  },
  {
    "zone": "Antarctica/McMurdo",
    "offset": "+12:00"
  },
  {
    "zone": "Antarctica/South_Pole",
    "offset": "+12:00"
  },
  {
    "zone": "Asia/Anadyr",
    "offset": "+12:00"
  },
  {
    "zone": "Asia/Kamchatka",
    "offset": "+12:00"
  },
  {
    "zone": "Etc/GMT-12",
    "offset": "+12:00"
  },
  {
    "zone": "Kwajalein",
    "offset": "+12:00"
  },
  {
    "zone": "NZ",
    "offset": "+12:00"
  },
  {
    "zone": "Pacific/Auckland",
    "offset": "+12:00"
  },
  {
    "zone": "Pacific/Fiji",
    "offset": "+12:00"
  },
  {
    "zone": "Pacific/Funafuti",
    "offset": "+12:00"
  },
  {
    "zone": "Pacific/Kwajalein",
    "offset": "+12:00"
  },
  {
    "zone": "Pacific/Majuro",
    "offset": "+12:00"
  },
  {
    "zone": "Pacific/Nauru",
    "offset": "+12:00"
  },
  {
    "zone": "Pacific/Tarawa",
    "offset": "+12:00"
  },
  {
    "zone": "Pacific/Wake",
    "offset": "+12:00"
  },
  {
    "zone": "Pacific/Wallis",
    "offset": "+12:00"
  },
  {
    "zone": "NZ-CHAT",
    "offset": "+12:45"
  },
  {
    "zone": "Pacific/Chatham",
    "offset": "+12:45"
  },
  {
    "zone": "Etc/GMT-13",
    "offset": "+13:00"
  },
  {
    "zone": "Pacific/Apia",
    "offset": "+13:00"
  },
  {
    "zone": "Pacific/Enderbury",
    "offset": "+13:00"
  },
  {
    "zone": "Pacific/Fakaofo",
    "offset": "+13:00"
  },
  {
    "zone": "Pacific/Tongatapu",
    "offset": "+13:00"
  },
  {
    "zone": "Etc/GMT-14",
    "offset": "+14:00"
  },
  {
    "zone": "Pacific/Kiritimati",
    "offset": "+14:00"
  }
];

// flat polyfill for Firefox < 62
function flatten (arg) {
  return arg.reduce(function (accumulator, currentValue) {
    return accumulator.concat(
      Array.isArray(currentValue) ? flatten(currentValue) : currentValue
    )
  }, [])
}

if (!Array.prototype.hasOwnProperty('flat')) {
  /* eslint-disable no-extend-native */
  Object.defineProperty(Array.prototype, 'flat', {
    value: function () {
      return flatten(this)
    }
  })
}

// profiles
let profiles = Object.keys(uaList).map(os => uaList[os]).flat().sort((a, b) => a.name > b.name);

// Export ua list for testing
if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') ) {
	module.exports = {
		uaList,
		languages,
		langList,
		profiles,
		timezones
	};
}