(function() {
  loadOptions();
  submitHandler();
})();

function submitHandler() {
  var $submitButton = $('#submit_button');

  $submitButton.on('click', function() {
    console.log('Submit');

    var return_to = getQueryParam('return_to', 'pebblejs://close#');
    document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
  });
}

function loadOptions() {
  var $departures = $('#departures');
  var $AAL = $('#AAL');
  var $AAT = $('#AAT');
  var $AAU = $('#AAU');
  var $AO = $('#AO');
  var $ASB = $('#ASB');
  var $ABE = $('#ABE');
  var $ABGS = $('#ABGS');
  var $ABSM = $('#ABSM');
  var $ADH = $('#ADH');
  var $AEL = $('#AEL');
  var $AFK = $('#AFK');
  var $AFN = $('#AFN');
  var $AGST = $('#AGST');
  var $AGK = $('#AGK');
  var $AHNU = $('#AHNU');
  var $AA = $('#AA');
  var $ADF = $('#ADF');
  var $AH = $('#AH');
  var $AHI = $('#AHI');
  var $AHZH = $('#AHZH');
  var $AHWT = $('#AHWT');
  var $AHOT = $('#AHOT');
  var $AIZ = $('#AIZ');
  var $AJHH = $('#AJHH');
  var $AKM = $('#AKM');
  var $AKHD = $('#AKHD');
  var $AN = $('#AN');
  var $ANSW = $('#ANSW');
  var $ANM = $('#ANM');
  var $ANH = $('#ANH');
  var $AODT = $('#AODT');
  var $AP = $('#AP');
  var $APD = $('#APD');
  var $ARE = $('#ARE');
  var $ARL = $('#ARL');
  var $ASDD = $('#ASDD');
  var $ATB = $('#ATB');
  var $ATM = $('#ATM');
  var $AWAH = $('#AWAH');
  var $AWK = $('#AWK');
  var $AWA = $('#AWA');
  var $AWBU = $('#AWBU');
  var $AWST = $('#AWST');

  $departures = localStorage.departures === 3

  $AAL[0].checked = localStorage.AAL === 'true';
  $AAT[0].checked = localStorage.AAT === 'true';
  $AAU[0].checked = localStorage.AAU === 'true';
  $AO[0].checked = localStorage.AO === 'true';
  $ASB[0].checked = localStorage.ASB === 'true';
  $ABE[0].checked = localStorage.ABE === 'true';
  $ABGS[0].checked = localStorage.ABGS === 'true';
  $ABSM[0].checked = localStorage.ABSM === 'true';
  $ADH[0].checked = localStorage.ADH === 'true';
  $AEL[0].checked = localStorage.AEL === 'true';
  $AFK[0].checked = localStorage.AFK === 'true';
  $AFN[0].checked = localStorage.AFN === 'true';
  $AGST[0].checked = localStorage.AGST === 'true';
  $AGK[0].checked = localStorage.AGK === 'true';
  $AHNU[0].checked = localStorage.AHNU === 'true';
  $AA[0].checked = localStorage.AA === 'true';
  $ADF[0].checked = localStorage.ADF === 'true';
  $AH[0].checked = localStorage.AH === 'true';
  $AHI[0].checked = localStorage.AHI === 'true';
  $AHZH[0].checked = localStorage.AHZH === 'true';
  $AHWT[0].checked = localStorage.AHWT === 'true';
  $AHOT[0].checked = localStorage.AHOT === 'true';
  $AIZ[0].checked = localStorage.AIZ === 'true';
  $AJHH[0].checked = localStorage.AJHH === 'true';
  $AKM[0].checked = localStorage.AKM === 'true';
  $AKHD[0].checked = localStorage.AKHD === 'true';
  $AN[0].checked = localStorage.AN === 'true';
  $ANSW[0].checked = localStorage.ANSW === 'true';
  $ANM[0].checked = localStorage.ANM === 'true';
  $ANH[0].checked = localStorage.ANH === 'true';
  $AODT[0].checked = localStorage.AODT === 'true';
  $AP[0].checked = localStorage.AP === 'true';
  $APD[0].checked = localStorage.APD === 'true';
  $ARE[0].checked = localStorage.ARE === 'true';
  $ARL[0].checked = localStorage.ARL === 'true';
  $ASDD[0].checked = localStorage.ASDD === 'true';
  $ATB[0].checked = localStorage.ATB === 'true';
  $ATM[0].checked = localStorage.ATM === 'true';
  $AWAH[0].checked = localStorage.AWAH === 'true';
  $AWK[0].checked = localStorage.AWK === 'true';
  $AWA[0].checked = localStorage.AWA === 'true';
  $AWBU[0].checked = localStorage.AWBU === 'true';
  $AWST[0].checked = localStorage.AWST === 'true';
}

function getAndStoreConfigData() {
  var $departures = $('#departures');
  var $AAL = $('#AAL');
  var $AAT = $('#AAT');
  var $AAU = $('#AAU');
  var $AO = $('#AO');
  var $ASB = $('#ASB');
  var $ABE = $('#ABE');
  var $ABGS = $('#ABGS');
  var $ABSM = $('#ABSM');
  var $ADH = $('#ADH');
  var $AEL = $('#AEL');
  var $AFK = $('#AFK');
  var $AFN = $('#AFN');
  var $AGST = $('#AGST');
  var $AGK = $('#AGK');
  var $AHNU = $('#AHNU');
  var $AA = $('#AA');
  var $ADF = $('#ADF');
  var $AH = $('#AH');
  var $AHI = $('#AHI');
  var $AHZH = $('#AHZH');
  var $AHWT = $('#AHWT');
  var $AHOT = $('#AHOT');
  var $AIZ = $('#AIZ');
  var $AJHH = $('#AJHH');
  var $AKM = $('#AKM');
  var $AKHD = $('#AKHD');
  var $AN = $('#AN');
  var $ANSW = $('#ANSW');
  var $ANM = $('#ANM');
  var $ANH = $('#ANH');
  var $AODT = $('#AODT');
  var $AP = $('#AP');
  var $APD = $('#APD');
  var $ARE = $('#ARE');
  var $ARL = $('#ARL');
  var $ASDD = $('#ASDD');
  var $ATB = $('#ATB');
  var $ATM = $('#ATM');
  var $AWAH = $('#AWAH');
  var $AWK = $('#AWK');
  var $AWA = $('#AWA');
  var $AWBU = $('#AWBU');
  var $AWST = $('#AWST');

  var options = {
    departures: $departures.val(),
    AAL: $AAL[0].checked,
    AAT: $AAT[0].checked,
    AAU: $AAU[0].checked,
    AO: $AO[0].checked,
    ASB: $ASB[0].checked,
    ABE: $ABE[0].checked,
    ABGS: $ABGS[0].checked,
    ABSM: $ABSM[0].checked,
    ADH: $ADH[0].checked,
    AEL: $AEL[0].checked,
    AFK: $AFK[0].checked,
    AFN: $AFN[0].checked,
    AGST: $AGST[0].checked,
    AGK: $AGK[0].checked,
    AHNU: $AHNU[0].checked,
    AA: $AA[0].checked,
    ADF: $ADF[0].checked,
    AH: $AH[0].checked,
    AHI: $AHI[0].checked,
    AHZH: $AHZH[0].checked,
    AHWT: $AHWT[0].checked,
    AHOT: $AHOT[0].checked,
    AIZ: $AIZ[0].checked,
    AJHH: $AJHH[0].checked,
    AKM: $AKM[0].checked,
    AKHD: $AKHD[0].checked,
    AN: $AN[0].checked,
    ANSW: $ANSW[0].checked,
    ANM: $ANM[0].checked,
    ANH: $ANH[0].checked,
    AODT: $AODT[0].checked,
    AP: $AP[0].checked,
    APD: $APD[0].checked,
    ARE: $ARE[0].checked,
    ARL: $ARL[0].checked,
    ASDD: $ASDD[0].checked,
    ATB: $ATB[0].checked,
    ATM: $ATM[0].checked,
    AWAH: $AWAH[0].checked,
    AWK: $AWK[0].checked,
    AWA: $AWA[0].checked,
    AWBU: $AWBU[0].checked,
    AWST: $AWST[0].checked
  };

  localStorage.departures = options.departures;
  localStorage.AAL = options.AAL;
  localStorage.AAT = options.AAT;
  localStorage.AAU = options.AAU;
  localStorage.AO = options.AO;
  localStorage.ASB = options.ASB;
  localStorage.ABE = options.ABE;
  localStorage.ABGS = options.ABGS;
  localStorage.ABSM = options.ABSM;
  localStorage.ADH = options.ADH;
  localStorage.AEL = options.AEL;
  localStorage.AFK = options.AFK;
  localStorage.AFN = options.AFN;
  localStorage.AGST = options.AGST;
  localStorage.AGK = options.AGK;
  localStorage.AHNU = options.AHNU;
  localStorage.AA = options.AA;
  localStorage.ADF = options.ADF;
  localStorage.AH = options.AH;
  localStorage.AHI = options.AHI;
  localStorage.AHZH = options.AHZH;
  localStorage.AHWT = options.AHWT;
  localStorage.AHOT = options.AHOT;
  localStorage.AIZ = options.AIZ;
  localStorage.AJHH = options.AJHH;
  localStorage.AKM = options.AKM;
  localStorage.AKHD = options.AKHD;
  localStorage.AN = options.AN;
  localStorage.ANSW = options.ANSW;
  localStorage.ANM = options.ANM;
  localStorage.ANH = options.ANH;
  localStorage.AODT = options.AODT;
  localStorage.AP = options.AP;
  localStorage.APD = options.APD;
  localStorage.ARE = options.ARE;
  localStorage.ARL = options.ARL;
  localStorage.ASDD = options.ASDD;
  localStorage.ATB = options.ATB;
  localStorage.ATM = options.ATM;
  localStorage.AWAH = options.AWAH;
  localStorage.AWK = options.AWK;
  localStorage.AWA = options.AWA;
  localStorage.AWBU = options.AWBU;
  localStorage.AWST = options.AWST;

  console.log('Got options: ' + JSON.stringify(options));
  return options;
}

function getQueryParam(variable, defaultValue) {
  var query = location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return defaultValue || false;
}