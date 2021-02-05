$( document ).ready(function() {
	
	var countSubjects = 0;
	
	if(document.getElementById("math").checked == true){
		countSubjects++;
		document.getElementById("amount").innerHTML = countSubjects+".00 $";
		document.getElementsByClassName("bundleMath")[0].style.display = "block";
		document.getElementsByClassName("bundleMath")[1].style.display = "block";
	}
	if(document.getElementById("science").checked == true){
		countSubjects++;
		document.getElementById("amount").innerHTML = countSubjects+".00 $";
		document.getElementsByClassName("bundleScience")[0].style.display = "block";
		document.getElementsByClassName("bundleScience")[1].style.display = "block";
	}
	if(document.getElementById("sst").checked == true){
		countSubjects++;
		document.getElementById("amount").innerHTML = countSubjects+".00 $";
		document.getElementsByClassName("bundleSst")[0].style.display = "block";
		document.getElementsByClassName("bundleSst")[1].style.display = "block";
	}
	if(document.getElementById("landa").checked == true){
		countSubjects++;
		document.getElementById("amount").innerHTML = countSubjects+".00 $";
		document.getElementsByClassName("bundleLanda")[0].style.display = "block";
		document.getElementsByClassName("bundleLanda")[1].style.display = "block";
	}
	
	
	
	let math = parseInt( document.getElementById("math").value )
	let science = parseInt( document.getElementById("science").value )
	let sst = parseInt( document.getElementById("sst").value )
	let landa = parseInt( document.getElementById("landa").value )
	let grade1 = parseInt( document.getElementById("grade1").value )
	let grade2 = parseInt( document.getElementById("grade2").value )
	let grade3 = parseInt( document.getElementById("grade3").value )
	let grade4 = parseInt( document.getElementById("grade4").value )
	let grade5 = parseInt( document.getElementById("grade5").value )
	/*
		let bundle1 = parseInt( document.getElementById("bundle1").value )
		let bundle2 = parseInt( document.getElementById("bundle2").value )
	let bundle3 = parseInt( document.getElementById("bundle3").value )*/
	
	let result = 0
	let finalResult
	function checkSub(){
		let math = document.getElementById("math")
		let science = document.getElementById("science")
		let sst = document.getElementById("sst")
		let landa = document.getElementById("landa")
		if(math.checked === false && science.checked === false && sst.checked === false && landa.checked === false){
			document.getElementById("check").checked = false
			}else{
			document.getElementById("check").checked = true
		}
	}
	
	function calculate(){
		finalResult = result
	}
	
	
	
	function mathCal (){
		result = result + math
	}
	function scienceCal (){
		result = result + science
	}
	function sstCal (){
		result = result + sst
	}
	function landaCal (){
		result = result + landa
	}
	function grade1Cal (){
		result = result + grade1
	}
	function grade2Cal (){
		result = result + grade2
	}
	function grade3Cal (){
		result = result + grade3
	}
	function grade4Cal (){
		result = result + grade4
	}
	function grade5Cal (){
		result = result + grade5
	}
	function bundle1Cal (){
		result = result + bundle1
	}
	function bundle2Cal (){
		result = result + bundle2
	}
	function bundle3Cal (){
		result = result + bundle3
	}
	function bundleMath(){
		let math = document.getElementById("math")
		let bundleMaths = document.getElementsByClassName("bundleMath")[0]
		let bundleMaths1 = document.getElementsByClassName("bundleMath")[1]
		if(math.checked === false){
			bundleMaths.style.display = "none"
			bundleMaths1.style.display = "none"
		}
		else{
			bundleMaths.style.display = "block"
			bundleMaths1.style.display = "block"
		}
	}
	function bundleScience(){
		let science = document.getElementById("science")
		let bundleScience = document.getElementsByClassName("bundleScience")[0]
		let bundleScience1 = document.getElementsByClassName("bundleScience")[1]
		if(science.checked === false){
			bundleScience.style.display = "none"
			bundleScience1.style.display = "none"
		}
		else{
			bundleScience.style.display = "block"
			bundleScience1.style.display = "block"
		}
	}
	function bundleSst(){
		let sst = document.getElementById("sst")
		let bundleSst = document.getElementsByClassName("bundleSst")[0]
		let bundleSst1 = document.getElementsByClassName("bundleSst")[1]
		if(sst.checked === false){
			bundleSst.style.display = "none"
			bundleSst1.style.display = "none"
		}
		else{
			bundleSst.style.display = "block"
			bundleSst1.style.display = "block"
		}
	}
	function bundleLanda(){
		let landa = document.getElementById("landa")
		let bundleLanda = document.getElementsByClassName("bundleLanda")[0]
		let bundleLanda1 = document.getElementsByClassName("bundleLanda")[1]
		if(landa.checked === false){
			bundleLanda.style.display = "none"
			bundleLanda1.style.display = "none"
		}
		else{
			bundleLanda.style.display = "block"
			bundleLanda1.style.display = "block"
		}
	}
	
	
	/*
	var mathsAmount = 0;
	var scienceAmount = 0;
	var sstAmount = 0;
	var landaAmount = 0;
	
	$('.bundleMath').change(function() {
		
		mathsAmount = 0;
		console.log("countSubjects="+countSubjects);
		if(countSubjects<=1){
			console.log("countSubjects<1");
			if($(this).val() === "Mon-Thurs | 1 hour each subject"){
				mathsAmount = 50;
			}
			else if($(this).val() === "Mon-Fri | 1 hour each subject"){
				mathsAmount = 55;
			}
			else if($(this).val() === "Mon-Fri | twice a week"){
				mathsAmount = 30;
			}
		}
		else{
			console.log("countSubjects>1");
			if($(this).val() === "Mon-Thurs | 1 hour each subject"){
				mathsAmount = 45;
			}
			else if($(this).val() === "Mon-Fri | 1 hour each subject"){
				mathsAmount = 50;
			}
			else if($(this).val() === "Mon-Fri | twice a week"){
				mathsAmount = 25;
			}
			
		}
		console.log("mathsAmount="+mathsAmount);
		calculateAmount();
	});
	$('.bundleScience').change(function() {
		
		scienceAmount = 0;
		if(countSubjects<=1){
			if($(this).val() === "Mon-Thurs | 1 hour each subject"){
				scienceAmount = 50;
			}
			else if($(this).val() === "Mon-Fri | 1 hour each subject"){
				scienceAmount = 55;
			}
			else if($(this).val() === "Mon-Fri | twice a week"){
				scienceAmount = 30;
			}
		}
		else{
			if($(this).val() === "Mon-Thurs | 1 hour each subject"){
				scienceAmount = 45;
			}
			else if($(this).val() === "Mon-Fri | 1 hour each subject"){
				scienceAmount = 45;
			}
			else if($(this).val() === "Mon-Fri | twice a week"){
				scienceAmount = 25;
			}
			
		}
		calculateAmount();
	});
	$('.bundleSst').change(function() {
		
		if(countSubjects<=1){
			if($(this).val() === "Mon-Thurs | 1 hour each subject"){
				sstAmount = 50;
			}
			if($(this).val() === "Mon-Fri | 1 hour each subject"){
				sstAmount = 55;
			}
			if($(this).val() === "Mon-Fri | twice a week"){
				sstAmount = 30;
			}
		}
		else{
			if($(this).val() === "Mon-Thurs | 1 hour each subject"){
				sstAmount = 45;
			}
			if($(this).val() === "Mon-Fri | 1 hour each subject"){
				sstAmount = 50;
			}
			if($(this).val() === "Mon-Fri | twice a week"){
				sstAmount = 25;
			}
			
		}
		calculateAmount();
	});
	$('.bundleLanda').change(function() {
		
		if(countSubjects<=1){
			if($(this).val() === "Mon-Thurs | 1 hour each subject"){
				landaAmount = 50;
			}
			if($(this).val() === "Mon-Fri | 1 hour each subject"){
				landaAmount = 55;
			}
			if($(this).val() === "Mon-Fri | twice a week"){
				landaAmount = 30;
			}
		}
		else{
			if($(this).val() === "Mon-Thurs | 1 hour each subject"){
				landaAmount = 45;
			}
			if($(this).val() === "Mon-Fri | 1 hour each subject"){
				landaAmount = 45;
			}
			if($(this).val() === "Mon-Fri | twice a week"){
				landaAmount = 25;
			}
			
		}
		calculateAmount();
	});
	*/
	
	
	
	$('.subject').change(function() {
		var bundle = $(this).attr("data-bundle");
		if($(this).is(":checked")){
			$("#label"+bundle).css("display","block");
			$("#"+bundle).css("display","block");
		}
		else{
			$("#label"+bundle).css("display","none");
			$("#"+bundle).css("display","none");
		}
		$('.bundle').change();
	});
	
	document.getElementById("seepricing").addEventListener('click', e => {
		e.preventDefault();
		alert("1 Subject - Twice a Week-  $30/ Week\n"+
			"1 Subject - Mon - Thu   -  $50/ Week\n"+
			"1 Subject - Mon - Fri   -  $55/ Week\n"+
			"2 Subjects- Twice a Week-  $50/ Week\n"+
			"2 Subjects- Mon - Thu   -  $80/ Week\n"+
		"2 Subjects- Mon - Fri   - $100/ Week\n3rd and 4th subject, if opted, will be charged at similar rates as per two subjects");
	});
	
	
	//function calculateAmount(){
	
	var totalAmount = 0;
	//document.getElementById("bundle").addEventListener('change', e => {
	$('.bundle').change(function() {
		
		countSubjects = 0;
		mathsAmount = 0;
		scienceAmount = 0;
		sstAmount = 0;
		landaAmount = 0;
		
		if(document.getElementById("math").checked == true)
		countSubjects++;
		if(document.getElementById("science").checked == true)
		countSubjects++;
		if(document.getElementById("sst").checked == true)
		countSubjects++;
		if(document.getElementById("landa").checked == true)
		countSubjects++;
		
		console.log("countSubjects="+countSubjects);
		if(countSubjects<=1){
		
			if(document.getElementById("math").checked == true){
				console.log("math is checked");
				console.log($(".bundleMath").val());
				if($(".bundleMath").val() === "Mon-Thurs | 1 hour each subject")
					mathsAmount = 50;
				else if($(".bundleMath").val() === "Mon-Fri | 1 hour each subject")
					mathsAmount = 55;
				else if($(".bundleMath").val() === "Mon-Fri | twice a week")
					mathsAmount = 30;
			}
			else{
				mathsAmount = 0;
			}
			console.log("mathsAmount="+mathsAmount);
			
			if(document.getElementById("science").checked == true){
				
				if($(".bundleScience").val() === "Mon-Thurs | 1 hour each subject")
				scienceAmount = 50;
				else if($(".bundleScience").val() === "Mon-Fri | 1 hour each subject")
				scienceAmount = 55;
				else if($(".bundleScience").val() === "Mon-Fri | twice a week")
				scienceAmount = 30;
			}
			else{
				scienceAmount = 0;
			}
			
			if(document.getElementById("sst").checked == true){
				
				if($(".bundleSst").val() === "Mon-Thurs | 1 hour each subject")
				sstAmount = 50;
				else if($(".bundleSst").val() === "Mon-Fri | 1 hour each subject")
				sstAmount = 55;
				else if($(".bundleSst").val() === "Mon-Fri | twice a week")
				sstAmount = 30;
			}
			else{
				sstAmount = 0;
			}
			
			if(document.getElementById("landa").checked == true){
				
				if($(".bundleLanda").val() === "Mon-Thurs | 1 hour each subject")
				landaAmount = 50;
				else if($(".bundleLanda").val() === "Mon-Fri | 1 hour each subject")
				landaAmount = 55;
				else if($(".bundleLanda").val() === "Mon-Fri | twice a week")
				landaAmount = 30;
			}
			else{
				landaAmount = 0;
				/*if($(".bundleLanda").val() === "Mon-Thurs | 1 hour each subject")
				mathsAmount = 45;
				else if($(".bundleLanda").val() === "Mon-Fri | 1 hour each subject")
				mathsAmount = 50;
				else if($(".bundleLanda").val() === "Mon-Fri | twice a week")
				mathsAmount = 25;*/
			}
			
		}
		else{
			if(document.getElementById("math").checked == true){
				
				if($(".bundleMath").val() === "Mon-Thurs | 1 hour each subject")
				mathsAmount = 40;
				else if($(".bundleMath").val() === "Mon-Fri | 1 hour each subject")
				mathsAmount = 50;
				else if($(".bundleMath").val() === "Mon-Fri | twice a week")
				mathsAmount = 25;
			}
			else{
				mathsAmount = 0;
			}
			
			if(document.getElementById("science").checked == true){
				
				if($(".bundleScience").val() === "Mon-Thurs | 1 hour each subject")
				scienceAmount = 40;
				else if($(".bundleScience").val() === "Mon-Fri | 1 hour each subject")
				scienceAmount = 50;
				else if($(".bundleScience").val() === "Mon-Fri | twice a week")
				scienceAmount = 25;
			}
			else{
				scienceAmount = 0;
			}
			
			if(document.getElementById("sst").checked == true){
				
				if($(".bundleSst").val() === "Mon-Thurs | 1 hour each subject")
				sstAmount = 40;
				else if($(".bundleSst").val() === "Mon-Fri | 1 hour each subject")
				sstAmount = 50;
				else if($(".bundleSst").val() === "Mon-Fri | twice a week")
				sstAmount = 25;
			}
			else{
				sstAmount = 0;
			}
			
			if(document.getElementById("landa").checked == true){
				
				if($(".bundleLanda").val() === "Mon-Thurs | 1 hour each subject")
				landaAmount = 40;
				else if($(".bundleLanda").val() === "Mon-Fri | 1 hour each subject")
				landaAmount = 50;
				else if($(".bundleLanda").val() === "Mon-Fri | twice a week")
				landaAmount = 25;
			}
			else{
				landaAmount = 0;
			}
			
			
		}
		
		totalAmount = mathsAmount+scienceAmount+sstAmount+landaAmount;
		console.log(mathsAmount+" "+scienceAmount+" "+sstAmount+" "+landaAmount);
		document.getElementById("amount").innerHTML = totalAmount+".00";
		$("#totalAmount").val(totalAmount);
	});
	
});