$(document).ready(function(){
	$('#register').validate({
		
		rules: {
			name:{
				required:true
			},
			email:{
				required:true
			},
			password:{
				required:true,
				minlength:6,
				required:true
			},
			confirmation:{
				required:true,
				minlength:6,
				equalTo: '#password'

			}
		},
		success:function(element){
			element
			.text('OK!').addClass('valid');
		}
	});
});