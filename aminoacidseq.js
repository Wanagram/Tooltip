
//Stores sequence in an array of codons
var sequence = "GCAAACCTGCGCGGCGATGATGCTGAGCGCGCATGTAGCTAGTCGCGGCGTAGCTAGCC"
var aminoArray = [];
var startNuc = 0;
for(i=1;i<sequence.length/3;i++){
	aminoArray.push(sequence.substring(startNuc,startNuc+3));
	startNuc = i*3;
}
//Matches sequence to amino acid
var aminoSeq = [];
for(i=0; i<aminoArray.length; i++){
	switch(aminoArray[i]){
		case 'GCA':
		case 'GCC':
		case 'GCG':
		case 'GCT':
		aminoSeq.push("Ala")
		break;
		case 'AAC':
		case 'AAT':
		case 'GAC':
		case 'GAT':
		aminoSeq.push("Asx")
		break;
		case 'TGC':
		case 'TGT':
		aminoSeq.push("Cys")
		break;
		case 'GAC':
		case 'GAT':
		aminoSeq.push("Asp")
		break;
		case 'GAA':
		case 'GAG':
		aminoSeq.push("Glu")
		break;
		case 'TTC':
		case 'TTT':
		aminoSeq.push("Phe")
		break;
		case 'GGA':
		case 'GGC':
		case 'GGG':
		case 'GGT':
		aminoSeq.push("Gly")
		break;
		case 'CAC':
		case 'CAT':
		aminoSeq.push("His")
		break;
		case 'ATA':
		case 'ATC':
		case 'ATT':
		aminoSeq.push("Ile")
		break;
		case 'AAA':
		case 'AAG':
		aminoSeq.push("Lys")
		break;
		case 'CTA':
		case 'CTC':
		case 'CTG':
		case 'CTT':
		case 'TTA':
		case 'TTG':
		aminoSeq.push("Leu")
		break;
		case 'ATG':
		aminoSeq.push("Met")
		break;
		case 'AAC':
		case 'AAT':
		aminoSeq.push("Asn")
		break;
		case 'CCA':
		case 'CCC':
		case 'CCG':
		case 'CCT':
		aminoSeq.push("Pro")
		break;
		case 'CAA':
		case 'CAG':
		aminoSeq.push("Gln")
		break;
		case 'AGA':
		case 'AGG':
		case 'CGA':
		case 'CGC':
		case 'CGG':
		case 'CGT':
		aminoSeq.push("Arg")
		break;
		case 'AGC':
		case 'AGT':
		case 'TCA':
		case 'TCC':
		case 'TCG':
		case 'TCT':
		aminoSeq.push("Ser")
		break;
		case 'ACA':
		case 'ACC':
		case 'ACG':
		case 'ACT':
		aminoSeq.push("Thr")
		break;
		case 'GTA':
		case 'GTC':
		case 'GTG':
		case 'GTT':
		aminoSeq.push("Val")
		break;
		case 'TGG':
		aminoSeq.push("Trp")
		break;
		case 'TAC':
		case 'TAT':
		aminoSeq.push("Tyr")
		break;
		case 'CAA':
		case 'CAG':
		case 'GAA':
		case 'GAG':
		aminoSeq.push("Glx")
		break;
		case 'TAA':
		case 'TAG':
		case 'TGA':
		aminoSeq.push("STOP")
		break;
	}
}
