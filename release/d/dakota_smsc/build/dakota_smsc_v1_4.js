if(typeof keyman === 'undefined') {console.log('Keyboard requires KeymanWeb 10.0 or later');if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");} else {KeymanWeb.KR(new Keyboard_dakota_smsc_v1_4());}function Keyboard_dakota_smsc_v1_4(){this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;this.KI="Keyboard_dakota_smsc_v1_4";this.KN="SMSC";this.KMINVER="15.0";this.KV={F:' 1em "Arial"',K102:0};this.KV.KLS={"shift": ["~","!","@","#","$","%","=","&","*","(",")","_","+","","","","Q","W","E","R","T","Y","U","I","O","P","{","}","Ŋ","","","","A","S","D","F","G","H","J","K","L",":","\"","","","","","","","Z","X","C","V","B","N","M","<",">","?","","","","","",""],"default": ["̇","1","2","3","4","5","6","7","8","9","0","-","́","","","","q","w","e","r","t","y","u","i","o","p","[","]","ŋ","","","","a","s","d","f","g","h","j","k","l",";","'","","","","","","","z","x","c","v","b","n","m",",",".","/","","","","","",""]};this.KV.BK=(function(x){var e=Array.apply(null,Array(65)).map(String.prototype.valueOf,""),r=[],v,i,m=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];for(i=m.length-1;i>=0;i--)if((v=x[m[i]])||r.length)r=(v?v:e).slice().concat(r);return r})(this.KV.KLS);this.KDU=1;this.KH='';this.KM=0;this.KBVER="1.4";this.KMBM=0x10;this.KVKL={"tablet":{"displayUnderlying":false,"layer":[{"id":"default","row":[{"id":"1","key":[{"id":"K_Q","text":"q"},{"id":"K_W","text":"w"},{"id":"K_E","text":"e","sk":[{"text":"é","id":"U_00E9"}]},{"id":"K_R","text":"r"},{"id":"K_T","text":"t","sk":[{"text":"ṫ","id":"U_1E6B"}]},{"id":"K_Y","text":"y"},{"id":"K_U","text":"u","sk":[{"text":"ú","id":"U_00FA"}]},{"id":"K_I","text":"i","sk":[{"text":"í","id":"U_00ED"}]},{"id":"K_O","text":"o","sk":[{"text":"ó","id":"U_00F3"}]},{"id":"K_P","text":"p","sk":[{"text":"ṗ","id":"U_1E57"}]}]},{"id":"2","key":[{"id":"U_0307","text":"̇","width":"43"},{"id":"K_A","text":"a","sk":[{"text":"á","id":"U_00E1"}]},{"id":"K_S","text":"s","sk":[{"text":"ṡ","id":"U_1E61"}]},{"id":"K_D","text":"d"},{"id":"K_F","text":"f"},{"id":"K_G","text":"g","sk":[{"text":"ġ","id":"U_0121"}]},{"id":"K_H","text":"h","sk":[{"text":"ḣ","id":"U_1E23"}]},{"id":"K_J","text":"j"},{"id":"K_K","text":"k","sk":[{"text":"k̇","id":"U_006b[_0307]"}]},{"id":"K_L","text":"l"},{"id":"U_0301","text":"́","width":"42"}]},{"id":"3","key":[{"id":"K_SHIFT","text":"*Shift*","width":"105","sp":"1","nextlayer":"shift"},{"id":"K_Z","text":"z","sk":[{"text":"ż","id":"U_017C"}]},{"id":"K_X","text":"x"},{"id":"K_C","text":"c","sk":[{"text":"ċ","id":"U_010B"}]},{"id":"K_V","text":"v"},{"id":"K_B","text":"b"},{"id":"K_N","text":"n"},{"id":"K_M","text":"m"},{"id":"U_014B","text":"ŋ"},{"id":"K_BKSP","text":"*BkSp*","width":"95","sp":"1"}]},{"id":"4","key":[{"id":"T_new_22010","text":"*123*","sp":"1","nextlayer":"numeric"},{"id":"K_LOPT","text":"*Menu*","sp":"1"},{"id":"K_SPACE","width":"515"},{"id":"K_COMMA","text":","},{"id":"K_PERIOD","text":"."},{"id":"K_ENTER","text":"*Enter*","width":"145","sp":"1"}]}]},{"id":"shift","row":[{"id":"1","key":[{"id":"K_Q","text":"Q"},{"id":"K_W","text":"W"},{"id":"K_E","text":"E","sk":[{"text":"É","id":"U_00C9"}]},{"id":"K_R","text":"R"},{"id":"K_T","text":"T","sk":[{"text":"Ṫ","id":"U_1E6A"}]},{"id":"K_Y","text":"Y"},{"id":"K_U","text":"U","sk":[{"text":"Ú","id":"U_00DA"}]},{"id":"K_I","text":"I","sk":[{"text":"Í","id":"U_00CD"}]},{"id":"K_O","text":"O","sk":[{"text":"Ó","id":"U_00D3"}]},{"id":"K_P","text":"P","sk":[{"text":"Ṗ","id":"U_1E56"}]}]},{"id":"2","key":[{"id":"U_0307","text":"̇","width":"42"},{"id":"K_A","text":"A","sk":[{"text":"Á","id":"U_00C1"}]},{"id":"K_S","text":"S","sk":[{"text":"Ṡ","id":"U_1E60"}]},{"id":"K_D","text":"D"},{"id":"K_F","text":"F"},{"id":"K_G","text":"G","sk":[{"text":"Ġ","id":"U_0120"}]},{"id":"K_H","text":"H","sk":[{"text":"Ḣ","id":"U_1E22"}]},{"id":"K_J","text":"J"},{"id":"K_K","text":"K","sk":[{"text":"K̇","id":"U_004b[_0307]"}]},{"id":"K_L","text":"L"},{"id":"U_0301","text":"́","width":"42"}]},{"id":"3","key":[{"id":"K_SHIFT","text":"*Shift*","width":"105","sp":"1","nextlayer":"default"},{"id":"K_Z","text":"Z","sk":[{"text":"Ż","id":"U_017B"}]},{"id":"K_X","text":"X"},{"id":"K_C","text":"C","sk":[{"text":"Ċ","id":"U_010A"}]},{"id":"K_V","text":"V"},{"id":"K_B","text":"B"},{"id":"K_N","text":"N"},{"id":"K_M","text":"M"},{"id":"U_014A","text":"Ŋ"},{"id":"K_BKSP","text":"*BkSp*","width":"95","sp":"1"}]},{"id":"4","key":[{"id":"T_new_1207","text":"*123*","sp":"1","nextlayer":"numeric"},{"id":"K_LOPT","text":"*Menu*","sp":"1"},{"id":"K_SPACE","width":"515"},{"id":"U_002C","text":","},{"id":"U_002E","text":"."},{"id":"K_ENTER","text":"*Enter*","width":"145","sp":"1"}]}]},{"id":"numeric","row":[{"id":"1","key":[{"id":"U_0031","text":"1"},{"id":"U_0032","text":"2"},{"id":"U_0033","text":"3"},{"id":"U_0034","text":"4"},{"id":"U_0035","text":"5"},{"id":"U_0036","text":"6"},{"id":"U_0037","text":"7"},{"id":"U_0038","text":"8"},{"id":"U_0039","text":"9"},{"id":"U_0030","text":"0"}]},{"id":"2","key":[{"id":"U_0021","text":"!"},{"id":"U_0024","text":"$"},{"id":"U_0023","text":"#"},{"id":"U_0025","text":"%"},{"id":"U_0026","text":"&"},{"id":"U_002B","text":"+","sk":[{"text":"±","id":"U_00B1"},{"text":"÷","id":"U_00F7"},{"text":"×","id":"U_00D7"}]},{"id":"U_003D","text":"="},{"id":"U_002A","text":"*"},{"id":"U_005E","text":"^","sk":[{"text":"˄","id":"U_02C4"},{"text":"˅","id":"U_02C5"},{"text":"ˆ","id":"U_02C6"},{"text":"ˇ","id":"U_02C7"}]},{"id":"U_002D","text":"-","sk":[{"text":"_","id":"U_005F"}]}]},{"id":"3","key":[{"id":"U_003B","text":";"},{"id":"U_003A","text":":"},{"id":"U_0028","text":"(","sk":[{"text":"<","id":"U_003C"},{"text":"[","id":"U_005B"},{"text":"{","id":"U_007B"},{"text":"«","id":"U_00AB"}]},{"id":"U_0029","text":")","sk":[{"text":">","id":"U_003E"},{"text":"]","id":"U_005D"},{"text":"}","id":"U_007D"},{"text":"»","id":"U_00BB"}]},{"id":"U_0022","text":"\""},{"id":"U_0027","text":"'","sk":[{"text":"`","id":"U_0060"}]},{"id":"U_007E","text":"~"},{"id":"U_0040","text":"@"},{"id":"U_002F","text":"/","sk":[{"text":"\\","id":"U_005C"},{"text":"|","id":"U_007C"}]},{"id":"K_BKSP","text":"*BkSp*","width":"100","sp":"1"}]},{"id":"4","key":[{"id":"T_new_22010","text":"*abc*","sp":"1","nextlayer":"default"},{"id":"K_LOPT","text":"*Menu*","sp":"1"},{"id":"K_SPACE","width":"395"},{"id":"U_002C","text":","},{"id":"U_002E","text":"."},{"id":"U_003F","text":"?"},{"id":"K_ENTER","text":"*Enter*","width":"145","sp":"1"}]}]}],"font":"Arial","fontsize":"2.2em"},"phone":{"displayUnderlying":false,"layer":[{"id":"default","row":[{"id":"1","key":[{"id":"T_new_14139","width":"28","sp":"10"},{"id":"K_Q","text":"q"},{"id":"K_W","text":"w"},{"id":"K_E","text":"e","sk":[{"text":"é","id":"U_00E9"}]},{"id":"K_R","text":"r"},{"id":"K_T","text":"t","sk":[{"text":"ṫ","id":"U_1E6B"}]},{"id":"K_Y","text":"y"},{"id":"K_U","text":"u","sk":[{"text":"ú","id":"U_00FA"}]},{"id":"K_I","text":"i","sk":[{"text":"í","id":"U_00ED"}]},{"id":"K_O","text":"o","sk":[{"text":"ó","id":"U_00F3"}]},{"id":"K_P","text":"p","sk":[{"text":"ṗ","id":"U_1E57"}]},{"id":"T_new_14293","width":"27","sp":"10"}]},{"id":"2","key":[{"id":"U_0307","text":"̇","width":"85"},{"id":"K_A","text":"a","sk":[{"text":"á","id":"U_00E1"}]},{"id":"K_S","text":"s","sk":[{"text":"ṡ","id":"U_1E61"}]},{"id":"K_D","text":"d"},{"id":"K_F","text":"f"},{"id":"K_G","text":"g","sk":[{"text":"ġ","id":"U_0121"}]},{"id":"K_H","text":"h","sk":[{"text":"ḣ","id":"U_1E23"}]},{"id":"K_J","text":"j"},{"id":"K_K","text":"k","sk":[{"text":"k̇","id":"U_006b[_0307]"}]},{"id":"K_L","text":"l"},{"id":"U_0301","text":"́","width":"85"}]},{"id":"3","key":[{"id":"K_SHIFT","text":"*Shift*","width":"147","sp":"1","nextlayer":"shift"},{"id":"K_Z","text":"z","sk":[{"text":"ż","id":"U_017C"}]},{"id":"K_X","text":"x"},{"id":"K_C","text":"c","sk":[{"text":"ċ","id":"U_010B"}]},{"id":"K_V","text":"v"},{"id":"K_B","text":"b"},{"id":"K_N","text":"n"},{"id":"K_M","text":"m"},{"id":"U_014B","text":"ŋ"},{"id":"K_BKSP","text":"*BkSp*","width":"138","sp":"1"}]},{"id":"4","key":[{"id":"T_new_2008","text":"*123*","sp":"1","nextlayer":"Numeric"},{"id":"K_LOPT","text":"*Menu*","sp":"1"},{"id":"K_SPACE","width":"607"},{"id":"U_002C","text":","},{"id":"U_002E","text":"."},{"id":"K_ENTER","text":"*Enter*","width":"138","sp":"1"}]}]},{"id":"shift","row":[{"id":"1","key":[{"id":"T_new_10443","width":"28","sp":"10"},{"id":"K_Q","text":"Q"},{"id":"K_W","text":"W"},{"id":"K_E","text":"E","sk":[{"text":"É","id":"U_00C9"}]},{"id":"K_R","text":"R"},{"id":"K_T","text":"T","sk":[{"text":"Ṫ","id":"U_1E6A"}]},{"id":"K_Y","text":"Y"},{"id":"K_U","text":"U","sk":[{"text":"Ú","id":"U_00DA"}]},{"id":"K_I","text":"I","sk":[{"text":"Í","id":"U_00CD"}]},{"id":"K_O","text":"O","sk":[{"text":"Ó","id":"U_00D3"}]},{"id":"K_P","text":"P","sk":[{"text":"Ṗ","id":"U_1E56"}]},{"id":"T_new_10585","width":"27","sp":"10"}]},{"id":"2","key":[{"id":"U_0307","text":"̇","width":"85"},{"id":"K_A","text":"A","sk":[{"text":"Á","id":"U_00C1"}]},{"id":"K_S","text":"S","sk":[{"text":"Ṡ","id":"U_1E60"}]},{"id":"K_D","text":"D"},{"id":"K_F","text":"F"},{"id":"K_G","text":"G","sk":[{"text":"Ġ","id":"U_0120"}]},{"id":"K_H","text":"H","sk":[{"text":"Ḣ","id":"U_1E22"}]},{"id":"K_J","text":"J"},{"id":"K_K","text":"K","sk":[{"text":"K̇","id":"U_004b[_0307]"}]},{"id":"K_L","text":"L"},{"id":"U_0301","text":"́","width":"85"}]},{"id":"3","key":[{"id":"K_SHIFT","text":"*Shift*","width":"147","sp":"2","nextlayer":"default"},{"id":"K_Z","text":"Z","sk":[{"text":"Ż","id":"U_017B"}]},{"id":"K_X","text":"X"},{"id":"K_C","text":"C","sk":[{"text":"Ċ","id":"U_010A"}]},{"id":"K_V","text":"V"},{"id":"K_B","text":"B"},{"id":"K_N","text":"N"},{"id":"K_M","text":"M"},{"id":"U_014A","text":"Ŋ"},{"id":"K_BKSP","text":"*BkSp*","width":"138","sp":"1"}]},{"id":"4","key":[{"id":"T_new_12115","text":"*123*","sp":"1","nextlayer":"Numeric"},{"id":"K_LOPT","text":"*Menu*","sp":"1"},{"id":"K_SPACE","width":"607"},{"id":"U_002C","text":","},{"id":"U_002E","text":"."},{"id":"K_ENTER","text":"*Enter*","width":"138","sp":"1"}]}]},{"id":"Numeric","row":[{"id":"1","key":[{"id":"U_0031","text":"1"},{"id":"U_0032","text":"2"},{"id":"U_0033","text":"3"},{"id":"U_0034","text":"4"},{"id":"U_0035","text":"5"},{"id":"U_0036","text":"6"},{"id":"U_0037","text":"7"},{"id":"U_0038","text":"8"},{"id":"U_0039","text":"9"},{"id":"U_0030","text":"0"}]},{"id":"2","key":[{"id":"U_0021","text":"!"},{"id":"U_0024","text":"$"},{"id":"U_0023","text":"#"},{"id":"U_0025","text":"%"},{"id":"U_0026","text":"&"},{"id":"U_002B","text":"+","sk":[{"text":"±","id":"U_00B1"},{"text":"÷","id":"U_00F7"},{"text":"×","id":"U_00D7"}]},{"id":"U_003D","text":"="},{"id":"U_002A","text":"*"},{"id":"U_005E","text":"^","sk":[{"text":"˄","id":"U_02C4"},{"text":"˅","id":"U_02C5"},{"text":"ˆ","id":"U_02C6"},{"text":"ˇ","id":"U_02C7"}]},{"id":"U_002D","text":"-","sk":[{"text":"_","id":"U_005F"}]}]},{"id":"3","key":[{"id":"U_003B","text":";"},{"id":"U_003A","text":":"},{"id":"U_0028","text":"(","sk":[{"text":"<","id":"U_003C"},{"text":"[","id":"U_005B"},{"text":"{","id":"U_007B"},{"text":"«","id":"U_00AB"}]},{"id":"U_0029","text":")","sk":[{"text":">","id":"U_003E"},{"text":"]","id":"U_005D"},{"text":"}","id":"U_007D"},{"text":"»","id":"U_00BB"}]},{"id":"U_0022","text":"\""},{"id":"U_0027","text":"'","sk":[{"text":"`","id":"U_0060"}]},{"id":"U_007E","text":"~"},{"id":"U_0040","text":"@"},{"id":"U_002F","text":"/","sk":[{"text":"\\","id":"U_005C"},{"text":"|","id":"U_007C"}]},{"id":"K_BKSP","text":"*BkSp*","sp":"1"}]},{"id":"4","key":[{"id":"T_new_2008","text":"*abc*","sp":"1","nextlayer":"default"},{"id":"K_LOPT","text":"*Menu*","sp":"1"},{"id":"K_SPACE","width":"407"},{"id":"U_002C","text":","},{"id":"U_002E","text":"."},{"id":"U_003F","text":"?"},{"id":"K_ENTER","text":"*Enter*","width":"138","sp":"1"}]}]}],"font":"Arial","fontsize":"1.3em"}};this.KVER="17.0.332.0";this.KVS=[];this.gs=function(t,e) {return this.g0(t,e);};this.gs=function(t,e) {return this.g0(t,e);};this.g0=function(t,e) {var k=KeymanWeb,r=0,m=0;if(k.KKM(e,16400,49)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"!");}}else if(k.KKM(e,16400,222)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"\"");}}else if(k.KKM(e,16400,51)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"#");}}else if(k.KKM(e,16400,52)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"$");}}else if(k.KKM(e,16400,53)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"%");}}else if(k.KKM(e,16400,55)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"&");}}else if(k.KKM(e,16384,222)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"'");}}else if(k.KKM(e,16400,57)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"(");}}else if(k.KKM(e,16400,48)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,")");}}else if(k.KKM(e,16400,56)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"*");}}else if(k.KKM(e,16400,187)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"+");}}else if(k.KKM(e,16384,188)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,",");}}else if(k.KKM(e,16384,189)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"-");}}else if(k.KKM(e,16384,190)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,".");}}else if(k.KKM(e,16384,191)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"/");}}else if(k.KKM(e,16384,48)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"0");}}else if(k.KKM(e,16384,49)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"1");}}else if(k.KKM(e,16384,50)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"2");}}else if(k.KKM(e,16384,51)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"3");}}else if(k.KKM(e,16384,52)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"4");}}else if(k.KKM(e,16384,53)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"5");}}else if(k.KKM(e,16384,54)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"6");}}else if(k.KKM(e,16384,55)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"7");}}else if(k.KKM(e,16384,56)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"8");}}else if(k.KKM(e,16384,57)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"9");}}else if(k.KKM(e,16400,186)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,":");}}else if(k.KKM(e,16384,186)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,";");}}else if(k.KKM(e,16400,188)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"<");}}else if(k.KKM(e,16384,187)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"́");}}else if(k.KKM(e,16400,190)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,">");}}else if(k.KKM(e,16400,191)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"?");}}else if(k.KKM(e,16400,50)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"@");}}else if(k.KKM(e,16400,65)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"A");}}else if(k.KKM(e,16400,66)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"B");}}else if(k.KKM(e,16400,67)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"C");}}else if(k.KKM(e,16400,68)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"D");}}else if(k.KKM(e,16400,69)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"E");}}else if(k.KKM(e,16400,70)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"F");}}else if(k.KKM(e,16400,71)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"G");}}else if(k.KKM(e,16400,72)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"H");}}else if(k.KKM(e,16400,73)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"I");}}else if(k.KKM(e,16400,74)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"J");}}else if(k.KKM(e,16400,75)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"K");}}else if(k.KKM(e,16400,76)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"L");}}else if(k.KKM(e,16400,77)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"M");}}else if(k.KKM(e,16400,78)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"N");}}else if(k.KKM(e,16400,79)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"O");}}else if(k.KKM(e,16400,80)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"P");}}else if(k.KKM(e,16400,81)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Q");}}else if(k.KKM(e,16400,82)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"R");}}else if(k.KKM(e,16400,83)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"S");}}else if(k.KKM(e,16400,84)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"T");}}else if(k.KKM(e,16400,85)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"U");}}else if(k.KKM(e,16400,86)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"V");}}else if(k.KKM(e,16400,87)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"W");}}else if(k.KKM(e,16400,88)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"X");}}else if(k.KKM(e,16400,89)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Y");}}else if(k.KKM(e,16400,90)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Z");}}else if(k.KKM(e,16384,219)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"[");}}else if(k.KKM(e,16384,220)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ŋ");}}else if(k.KKM(e,16384,221)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"]");}}else if(k.KKM(e,16400,54)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"=");}}else if(k.KKM(e,16400,189)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"_");}}else if(k.KKM(e,16384,192)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"̇");}}else if(k.KKM(e,16384,65)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"a");}}else if(k.KKM(e,16384,66)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"b");}}else if(k.KKM(e,16384,67)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"c");}}else if(k.KKM(e,16384,68)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"d");}}else if(k.KKM(e,16384,69)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"e");}}else if(k.KKM(e,16384,70)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"f");}}else if(k.KKM(e,16384,71)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"g");}}else if(k.KKM(e,16384,72)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"h");}}else if(k.KKM(e,16384,73)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"i");}}else if(k.KKM(e,16384,74)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"j");}}else if(k.KKM(e,16384,75)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"k");}}else if(k.KKM(e,16384,76)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"l");}}else if(k.KKM(e,16384,77)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"m");}}else if(k.KKM(e,16384,78)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"n");}}else if(k.KKM(e,16384,79)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"o");}}else if(k.KKM(e,16384,80)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"p");}}else if(k.KKM(e,16384,81)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"q");}}else if(k.KKM(e,16384,82)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"r");}}else if(k.KKM(e,16384,83)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"s");}}else if(k.KKM(e,16384,84)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"t");}}else if(k.KKM(e,16384,85)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"u");}}else if(k.KKM(e,16384,86)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"v");}}else if(k.KKM(e,16384,87)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"w");}}else if(k.KKM(e,16384,88)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"x");}}else if(k.KKM(e,16384,89)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"y");}}else if(k.KKM(e,16384,90)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"z");}}else if(k.KKM(e,16400,219)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"{");}}else if(k.KKM(e,16400,220)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ŋ");}}else if(k.KKM(e,16400,221)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"}");}}else if(k.KKM(e,16400,192)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"~");}}return r;};}