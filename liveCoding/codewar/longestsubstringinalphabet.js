/*Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.

Good luck :)

['asd', 'as'],
  ['nab', 'ab'],
  ['abcdeapbcdef', 'abcde'],
  ['asdfaaaabbbbcttavvfffffdf', 'aaaabbbbctt'],
  ['asdfbyfgiklag', 'fgikl'],
  ['z', 'z'],
  ['zyba', 'z']
  
p:
input: a string
output: string

rules:
- return the longest substring in alphabetical order
- the input only consist of lower case char
- it will be at least one letter long
- If there are multiple solutions, return the one that appears first.

E:

D:
string --> string
- array

A:
//get all the substring
  - init 'substring' to an empty array
  - iterate over the outer loop
  - iterate over the inner loop
  - in each iteration:
    - slice the string start from the outer loop curr index to innerloop curr index (outer loop idx + 1)
    - push the slice substring to 'substring'


// from the 'substring' get the substring that only have letter in alphabetical order

- init 'alpaSubstring' to an empty array
- iterate over the 'substring'
- in each iteration:
  - if the char is less than 2. push to 'alphaSubstring'
  - check if each character is smaller than the next character
  - push the substring to 'alphaSubstring'
  


// find the longest substring
   - sort the substring in descending order by lenght
   - return the longest
   - if there are the same length return the first
// return the longest substring
  
*/  

function longest(str) {
  let substring = [];
  
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let currSubstr = str.slice(i, j);
      if(isConsecutive(currSubstr)) {
        substring.push(currSubstr);
      }
    }
  }
  
  let max = 0;
  let result = '';
  
  for (let i = 0; i < substring.length; i++) {
    if(substring[i].length > max) {
      max = substring[i].length;
      result = substring[i];
    }  
  }
  return result;
}

function isConsecutive(str) {
  for(let i = 1; i < str.length; i++) {
    if (str[i] < str[i - 1]) return false;
    
  }
   return true;
}



console.log(longest('asd') === 'as');
console.log(longest('nab') === 'ab');
console.log(longest('abcdeapbcdef') === 'abcde');
console.log(longest('asdfaaaabbbbcttavvfffffdf') === 'aaaabbbbctt');
console.log(longest('asdfbyfgiklag') === 'fgikl' );
console.log(longest('z') === 'z');
console.log(longest('zyba') === 'z' );

let text = "niutqoisljzjenkfzcnzgxooagrjkloalpvcylnixgzeuvpyiwdexirecvxbbfdzgsapjzdnzgjwpzhahtwhtxluisxzqgclgshmsfdyxuqxkxfvqwijggpginljovgeipdxkrkkgkpzjclmhwfmxmmlojzmzxyeojtnxuluqbwltekmpxrddaygxdielymaaqoucukyoixmdwrttrkqnbefjbkaonfxjitmudetpzyeyuvajzkkmztanyoimgsmlqzkkacnjbnyxgxxyzlyfuadibmullgdbyejxshzlsbqsgumuielqnrsqkgqkyztreeslrseoepvybyfqisjnfzbbsksxxuzejkcnadscoijvczwoobknqkadoeismbtdjcjnyplwxjdguhabhekmlskovizlbqadebnozkvlezgzwnfzbessroxmtiastcqgyfmacfuqsgdjnjgyetzihepmnfgtpiwgbigzfugxkgtsnltdxxzrodyvxygepwrugwukgrecgzhrfdbcpypbagiiwlucvhldknzvmqejuhdlzbrmivflncgxkswgezxfjjmijrvdfzfhsyxwqsqautyyjjrviusmkteiikxbupsvtgbktprdurhuuxkcbxcicuocjoogissbhzhjiqtgvasneesfjkrxovhdmtsfxltprzhirwcauniazllfzxluwlfptkglcygqjtfwkukyspzvjbgtvbptyhjvnifebbkaluxrxmnmkvslagpcutlgyuuzwwydslxxbzhxyrieuecayfkcxkaeecwzsuvbqfmforgjsqybfucofeliieozoebaxryviuqhhksuhmawdwqjhfkbvvxaxetevgdkrvytzccleljleynbptyqpyeqdapxidpmaerqistqokhzbmsudlnewpapangtbibvotdemtojtceqhwqivelmevzhpinbktbbgcwjxjgojxrxzyitcibyesitogavkdotjohtcnenwqqsqeininmbjdealuhqeqaesyzxqmbrcxmlxlruyiwccixwghkufetrwcbxyanglijkdliroenimopzlmosvsscwyqypvixpbfyjuhuktkmxcecunekwtcdehgjmqufalntpezgulsucxnxxtqefbvahywtpowzqavecqqhcayupfdbhpvihullvfzudfzmoejgeqmfucyzjsprspnbeujeuajntujblvuqafwxbovsyfbbctdicorgiaykoxkgivbgscywhlmrnmbzffqggxukduaqotrynjtirjfpyrwrntevisdprdviooqxjxqjqjuxxyrmxlgdstkpuklmhzscovpbsldgonpiviowswsymjylioncjluhresbopwlxkijjfxqhovypwmnezvmtyjhjfufnchqumliaooaatnejwrwnqnrugjalxznzcurwpbpkofvkfotbkzynrunengzvvimciahhkgsdmgvmlfyfrfpkcaucvsrbylstoevcewwwwysyplxcgnuucfntyctnjdmuqjimnlrgmgfoleaojnnqejlovysidvsmmllfuydzkxkqolscltlibzldpfcufvhxutwemvjnzpfkrxptrnhnlyxrisiqfnvxjzcgisbhrxyhknwufydftipxepuvtvwobsbpfpyfbrnwjujanwrizvoxtdsuqteabtfvomwvtnttsllvvrxpvplihgqgkhrpbjpuufiyecompmmpaisdktkkzayzflychkutbydpnrpgmmrbrslidnibfnxcfrhalqrmpsyxagthcshyfgxpjbzwvetkmskwzojelegflhtfbaiulnwzrzonejcwkjkbnfybydqeqicwqymoncubhsydbzibeeycmsvepklletrcryyrwjjvacdsiyqpivjlysnjmkisapuylfurkowkbsctfrvpgpzotghkhowojdiimkbvcdnwosytplvtvannddhtvjjkxohjlbbuabwizmthfbloygqthdxpxinvukfjikkpedxiiszshyqrvdkjpkrxlzbukxqevqulfgmtlscjqgfqjfdcwmvtcpkvkytafkbuevjjcangavqmfydumzigzvxpvorvqvgjghizlioklhpblqetzzbtqgoiafwrpxsaskvsssibgkgjtdsmwcjorzrzqjscltpnryxzcoahfbkzeyvpqcwmlmmeqopniogysipcspxptzeinulkqvrqtypnbnmbvxapcwtnhxemuqswdwvniruovitmmmdqojyalyygkmljvwdlniqchzcafeuxdijcdimpsdqehkpeuddyijrmqlkpqeobsxofkmtkaamkwrumsrcoimrdcwtlrxljllunphdxkaagvesviipqdmtbypfhzebtntywatuqimjyrrqymdpqvjawuxnflhzgnbleslhvqlmztzeeinlqnufvilldvdfouictkadnoismltunhsgvxtapdvtyapjfqrdgpfagndzsvktchulxfgohlzcysmcbcmackeeemwlqsxzuzpcnmbsdpucauzktjplpdjllyktwsktilguqbdmoaogxneibykasodbkqjggftzdyxjeodgijaxhvacmzckqpkhnhaeohchsqjulokofwhkmxebrtcphvwaledhtwcgjblaikklcakjxppckykwuqjbxuigepchlzscdiqexulnxmfiwatbefvpjtzibxfskmafuwotudgvoyjagkppdhubvuoezpabnfgwzfjwbnzllzrpkfoyaasydutinhkvhjctrtjwpqkcuibdtnmxtqcxcmrjtxfggewrtsmayvatzklgujfajbwvdflfmuqywpfgcqaoxcvoqubsfqwnofyikqfjrnprgbkulnmfvtobsgredijznycetatmxeibwzixyxmzdyjpzuztwyoksseqorgdehoeohlpmtakavfvyfqnlippnvkgfqbxzgjytqrutbewgildkhufzjcxlepdynpuyiyiqodmtcanqaomuhwawihizpcqzqgxqwpskocjzragtnjugiukokfgwgitmekxmumapdeqgzarbskfzybswmaiqpqcmglkomxwoqclkevdvczfhullkppkdysmnfkzikuoswmjprovjnopkftldihnnomioagqvlwabcyxftofdmltlrhuyzieahniuppuafcjowgqvunzermzpkscgainpscscveqqqdecmtzxrqdpzlpaupcfmskrkvskzluytusilhrbprtuecrbdmzwfjaoxnmfmeiiluirsosmlsjbpetdvarsbzlxaersicernundcdxposthhgxcudiylhnigywaidfdhxtvsvbxmpfwrevzopbpaqwgyaptkiixpcsqpaziyuntsfrkrqovklsopndunxergzbztergoblejoaonjudrudonuiettnwmeccqelqbcpyfayqrypnxeqmcooxztxztxqentzaxydsyuhuihyiaatutjtnbuqpsxregwjejhcsfjrpvdddcemxxtimpfagjgbwhrkxetpllwffaaibbyxuazqzstpobriwywbmaiauhqytiagbxcoearpgsgavexkaxenvhgivxobdpwjgvjhsudpmtbcyulxudorinmnypesrxcjuqajttcpheqzvirhkhblnorrlukuinbgbsrmkbezdnsxozdrbhhkmicxuvpphooqqgfrosgsiazgiyormcnivtikdbibljekmedyrarqwjzblgdokpynqmnvgmpstonizagynnykjaygllpqnktxxknikzaniiwimeahbfoiytqptcgmqofmkpyabftkoeuenxdarkzcydisjzxfwzbygxhstzmumofuvzmdwrbqgsfownnjpoiqdctoqnasrpxhahzgpbxrhnhbpwogigjjfrdetxkzurvdtogkarfvnlciheraplmlfzxvxxufpubxmizryvrwwihwtdypsvxfsajvmvqapjvattjpdwxrtphahswaxcblmvrnfdewkztxznmvqaypmzlzjsqrtjgcitiaetzewoqbaylygblnbzsthiviqjvyfflucltjoyfglvqvbbnzarnqprjmjciazyaugmhuysanetzdugoelngasektlswxpzloexopnwqivyndfrbrelfuvbxpzczupamguqrdblhvhlwvjlcddnsonjyhereibjkttymklidpczovfrrmkffoduybuvxjlozwsmlbesgcjfvtpmawcsglsydvzeqgkowppbxanlyojmawzhpvttwqssfrwgankzoogcwsdhdpapdujnwpsauvfgoklntlqjfhrgdldisluykrhwnakinwdvbmzfgmikttkrsqffndwdmwnzawhebinsazpgollrukxlxboqlzqwxadrhyzqywwdrmcikmmopjzariwihykfqhmunkjnocpzuefcmxamlflanrudrnlkjdgmookdycbrqvyccnbigejqqekcxntxfhjcwqnowkyqwncskxtxbeduvipjtsjejzgngiwnyhceyfrzbrldkvpquwijjvslcfaargipyqpwcdtuzzidzbuwaxslphkosueljzhkrmeefehzsebxmzvofqkisjcqouiyjcjgaofkhewummtcpymldjyekocvruqinulegutklrxjuoacwzhhseiqlfzgnqwvgteeljcwotqbognwvoayispgyyqzewzgjmevenkpebmbwklbsqdveuwcalcctkojzcmfbfhvvjggjwdblyxgocbnukzpojhmqfxhankhhhtskdduavkbwcsbsbbdsqtlksnzkrvucibhifdpnyjgqybrrnaokouiyluhlejnhynbaxzpikmlmweyevvnzjefwswuuescirhkstaiwldmyzwlgeqwhnlqnebwnkzfbpfjsegmgijikubnhlqwnbqbzvwtkyyauufitnypkmyimxigccpwkcvzceetkrpggqbqizmuhuimpkonvpaygichdhydzpjmzetsjssyxtipkkplmwshvryzjxfbplwmldsaropalpgifapoasmyxkvafvivrijesyxpbkhqkzknujpnrpnimchtpezaduvnnyrtogexfklghnrjslhygxnwcvxfsyxhmyrusypdwsxfuvqtofzzejrssthpklpzextzikcegmdxuslalfxpvkxwwxhcjgzzplvkktsjftrcvfyhgxkyxbmhjxnzokhzmtfumarwbfrqcnamhrpjsmdypmvkkaljgxsurjtbeppnevhqcqhhylajxuaacbmafgmqhinuxidlkuusrctzvbtrkzwctbkomysotumzibspahheryfhdaxuznwthdtpzzhimtuidonupfmoxqmfuheefsbdvgyoudadfjffpxuwzuepjxjpxncdtaengakdtblkmujpoyebqfwcehisrgxyxddklodddoepkrkdrzivyuizgzujbaiudcmpayptvxjrftwpbyaqipgtpxtolzftvoncomutoskmcldalzgrcaucxgmrobxyykvuvgmmnpyenpardfksxwimneqrqgvrlbxpevngskrwjkfuzhyzippkinuathruqabeoirnmueambaqiysslfretpqxajkzdnsybkibabcpbyztjgwxxevmfpswuoxsocuwvgzwwlcgogfizknpfmzwvzmcjukfcpefxknekrndimtwxexxqovbtvjeyejaykldjyujmeulndqyzmfhgwdaqekmtdxqeaxjtnpvbwsdkovzajrtjglewvkeccomyquvtujwuqdtrhirxkzwdbykcchalyldzrzrtjiafimvouraemadloadjvpsbgdbtxcdwmkytlrrcecsyxozjjaovqstwxtyfmxwfmwjpoimtuyzhinfahecohidiglwjkxkiysxrlfrwzkeaiugiunpsicwdhrhgaddpqedkmsczvsxeqbhtetwibbiqqgbsvzuyukbdftswfxkzwqpzekjifbflddyyoctvpzciczckxsqptjojljaadheoitkjqzczcstqbnhpvtdtxeccwktbsxxgwgiqgrzecxlmwjneowkwueoucymdusotfwyejxrhkkktsmwlhknipieffgsfpprpqmxiztgqpvdrszpqdflojtctannlirrkqtojtjujgymhtqysqxcwhxqxjaxffqoilwjpgwotnpkpsbspjpqylnepwisdapqovskdmjbfzcyzihvgbgqmxpniiznxwxjeiqitrlhpinrnaqjvmdjfnrwmuywfwpyxsdcgkkqnyonettxkcwspmkkmipkpjrkmjiwrrwtlqdpabubvhewliwmkylihonrqndwejqgdpwzsbxwfsppgdxjuawntmypueceitoorqpthbrfvmkisuiliaoivxseajxfdsbezglbisqegnnaxjdcrlpjaxgobsqmlrbjjloynoecofzvtiqwzuiezcnzcmbnuyqkqechfjrsdahkdgyfeogxuslbyckydxushsllnidlauomcaiqqondpgbfuvyhxmqnxiwfvvwtplfxzeutxxeplqzfqyudeuicrodznlxsbakzxsehqshnqjlkjobognsmlydywuoixeogbkzpfjfgnohjaxmvzdidvgjabifrtptukvehwwxyipjeryqyoxzjfzwkcabhbdgrqvrmycpwfmolpqwmthhuueltfzmtztinlpcsuhpqtkrqvwyaiuobpcsmfcnupkqewihjgaxkiovjztntljjbnncuhdoxsgvrtqxhtbrnjynsvrklplivxeeuqjtbvgvnfriwjolswvgplnwbwbsrcrzxobaqjhdxjiiunwbdychcwmmangjqjlbaqniynhsxyvanoqnrgbdbpqumdgqqadaiqooeyuivaxqqanqprvxjfcxijlksqmjxsivgzctizyiobnyuaemujkeclocnteovmpoinxvdulsauvexextxqzepkqwwpftnpnucosbkuisnwolmwzepclndusfmpdeaphbiozzdbtsspgbdvbhlkoectfusqmvkkdvnxylgvjlvmuhrdqzvbkhickwbhpddkgotguhqyvqqaggrqjlbgixuyfccqrbzundrrokehdlgtplubcvhslugspcqcszusaunsnlltjnqiuctdmmsqthrcgxbjciivrzvtkmxyojxqltsucsrdhwstgrurkjpnhdbitqnpexdjefmbzgmefjlyvplfpbdwakzzxewzqqhbdzazfuhphwjambrrfqwlcngfwttnfyooakaanqtmgubxbwphsgevzojpzgkfuxlfucthzuimfovvjuyuzpcpdnyyzrassxaayrlujisenbuywpoudomzhkakoegsfqssdzztvpdyllquhczzgmfxgczhlqzfpodxfykeghrnplerzokdwwnlkedpacxjzmrsqnffizaqkhvhyzhbmkcbezhurhoequxccprkjpeckjvktjvsgdiirzqkfyfbuwqtsinxjyjjtfreihrpmxuxrugwacetnrmylqintcpcjsslljjllmiegnxrkxjvgsouefvsdcxujuzahdadjwignfvlyzwtlqurzaewppiqbagihjiycknwvtfhfwdgpphbfkggqbdjszrputrjwlfwvfkyqbyjpscyyrhjntgyferoeqvtbafvelifnfdpwyovasinysigrqmbcrgznspcnfxkwueymppesxcwlazutrxauhmgempketdzzzpslbfjdjdisqsdmfzjfupmlylsuijanoyzrycrccuvdsolaoobypugbvhjypdvpdkpxvwfslzpvissrlmsbsacqymjkaxhwsrvivadrqhikvtjgrcbxjnhfvwinosbumnupubvvmhpjjhjdqjhbyysavwbdikyiqfazhdtsjetkbhqgofyhjnhaackekrluorxcdpliymqpnnvzyjzeyiacartuomiuvikaynsfwrylexxtchiunolrjcuphbujkbgyfersqugygjzinzzefnnqceyxcmpqysqusyfbfeoxhjzrzhypksfenyumkanfyjqacssturusfdhfrhyqatymqptkbczexhvjepmeuhqvcagcgqqzsibmclooxxrhjrivfktoirrphflneuwoccksqgkjexztqehxcdwrwcvfnwmqtwebncfcoevfnjgaggqdhdxyhrroqennxxlobxxsdagpmibltzdzrameoficuwxppwglgzhsctkdruwjxovsdrqyhndbcafsifmokpqhunfnhnbxskmagamakahhgipefmepeitnixhejalzfwvcszvlqyslcmdxzcgmgqznfvmivgmwghigxldmhwwrxirtszecwmzolpivtuosxgvvncmaoagdjacpumerydblvnakuqxkmjudyfyxkmynxsqrcqcufrgwizdrucqilwaeocbokcxxyzhjtcmvccjvvkalutnvfqlzvhwbshbywzlqtbmhnavoflpyyplrabtwsywbmvpaoruopuqwazbrxlaviwkgtvbfrygnjgdgzgnarirkcmrweemzcpgxojmlshynettaonloarzcdvdwndgrcpvirqenqvposmzycyphldyjfcccnrszayksabnchqfezvvoauyzuokmkpfasflrmsizjmkowgjbchgfdxpynepbavzsmixbuieddhgckhpzbbshmocylifrvdoojdgscumqppdzppfykgmzntnmfpbxkypoplgkjopdxszjavmsizqygismrmqrdhbtzrozhtqznnwjlbyuafpqdmhttbeckpuiutnnmntqcvnehdoewokfkrjpyymmcittdigkucxfxryspgmgevbohsfcrwavszueojweiqsirkojdublajxocmggvugertrffgoznfcajcbvbsibwwncdsrtlqrlauzbgjydeyfzscehcjuwruoutfsthuggmlmrgmlasuytrvqzechngtper"

console.log(longest(text));

/*
- init 'substring' to an empty array
- init 'tempSubstring' to an empty string
- iterate over the string
- in each iteration:
  - if the curr char is less than the next char concatenated the 'temptSubstring
  - else push the the tempt to substring
  - reassign the temp to an empty string


*/
function longest(str) {
  let substring = [];
  let tempSubstring = '';
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] < str[i + 1] || str[i] === str[i + 1]) {
      tempSubstring += str[i]; 
    } else {
      tempSubstring += str[i];
      substring.push(tempSubstring);
      tempSubstring = '';
    }
  }
  
  let max = 0;
  let resultSubstring = ''
  
  for (let i = 0; i < substring.length; i ++) {
    if (substring[i].length > max) {
      max = substring[i].length;
      resultSubstring = substring[i];
    }
  }
  
  return resultSubstring;
  
}

console.log(longest('asd') === 'as');
console.log(longest('nab') === 'ab');
console.log(longest('abcdeapbcdef') === 'abcde');
console.log(longest('asdfaaaabbbbcttavvfffffdf') === 'aaaabbbbctt');
console.log(longest('asdfbyfgiklag') === 'fgikl' );
console.log(longest('z') === 'z');
console.log(longest('zyba') === 'z' );