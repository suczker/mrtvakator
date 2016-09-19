// vyrabi jmena otroku (c) 2016 - Nmaster

/**
 * vyrabi jemno otroka
 * @params context - senzam jiz nastavenych promennych, ktere je mozne pouzit pro tvorbu daneho segmentu
 * @returns jmeno otroka. Do hashe context predaneho parametrem pridava klic 'otrokVerbRadix', ktery je nasledne pouzit
 */

function getOtrokName(context){
    var predp_ = ["bucha","slaha","muci","marni","dusi","skrti","trtka","kusa","kruti","zabija","pali","prdi","prca","hnisa","krka"];
	var _pripAdj = ["ci","vy","kovy","dlakovy"];
	var _predPodst = ["c","dlak","dlacisko"];

	var r1 = Math.floor(Math.random() * predp_.length);
	var r2 = Math.floor(Math.random() * _pripAdj.length);
	var r3 = Math.floor(Math.random() * _predPodst.length);

	var otkName = predp_[r1] + _pripAdj[r2] + " " + predp_[r1] + _predPodst[r3] + " " ;

	var souh = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z'];
	var samh = ['a','e','i','o','u','y'];

	var r4 = Math.floor(Math.random() * samh.length);
	var r5 = Math.floor(Math.random() * souh.length);
	var r6 = Math.floor(Math.random() * samh.length);
	var r7 = Math.floor(Math.random() * souh.length);

	otkName = otkName + otkName[0] + samh[r4] + souh[r5] + samh[r6] + souh[r7];
    context['otrokVerbRadix'] = predp_[r1];
    return otkName;
}

let api = {
    getOtrokName : getOtrokName,
}

module.exports = api;