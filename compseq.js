var sequence = "GCAAACCTGCGCGGCGATGATGCTGAGCGCGCATGTAGCTAGTCGCGGCGTAGCTAGCC";
var reverse = "";
for(i=0;i<sequence.length;i++){
	switch(sequence[i]){
		case "A":
		reverse = reverse + "T"
		break;
		case "G":
		reverse = reverse + "C"
		break;
		case "C":
		reverse = reverse + "G"
		break;
		case "T":
		reverse = reverse + "A"
		break;
	}

}
console.log(reverse)