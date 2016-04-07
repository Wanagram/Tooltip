var sequence = "ATGCTGATCGCGCGATCGTAGCTAGTTCGATCGATGTGACGTACTGACTGACGTTGGATCTGATGCTATTTATCGAGCGCTAGCATCGCGATCGCGCATGCGCCATACG";
var gCount=0;
var cCount=0;
var aCount=0;
var tCount=0;
for(i=0;i<sequence.length;i++){
	switch(sequence[i]){
		case "A":
		aCount++
		break;
		case "T":
		tCount++
		break;
		case "C":
		cCount++
		break;
		case "G":
		gCount++
		break;
	}
}
console.log("The sequence is " + (aCount/sequence.length)*100 + "% adenine.")
console.log("The sequence is " + (tCount/sequence.length)*100 + "% thymine.")
console.log("The sequence is " + (cCount/sequence.length)*100 + "% cytosine.")
console.log("The sequence is " + (gCount/sequence.length)*100 + "% guanine.")