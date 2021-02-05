<!DOCTYPE html>
<head>
    <!-- Add meta tags for mobile and IE -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<style>
		.StripeElement {
		box-sizing: border-box;
		
		height: 40px;
		
		padding: 10px 12px;
		
		border: 1px solid transparent;
		border-radius: 4px;
		background-color: white;
		
		box-shadow: 0 1px 3px 0 #e6ebf1;
		-webkit-transition: box-shadow 150ms ease;
		transition: box-shadow 150ms ease;
		}
		
		.StripeElement--focus {
		box-shadow: 0 1px 3px 0 #cfd7df;
		}
		
		.StripeElement--invalid {
		border-color: #fa755a;
		}
		
		.StripeElement--webkit-autofill {
		background-color: #fefde5 !important;
		}
	</style>
	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="css/global.css">
</head>
<body>
	<div style="text-align:center; margin:100px auto;">
	<?php echo "<br><h4 style='color:black;'>Proceed to Pay $ ".$_GET["items"].".00</h4><br>"; ?>
	
    <!-- paypal -->
    <div id="paypal-button-container"></div>
	<h2 style="font-family:sans-serif;font-weight:light">Or</h2>	
    <div id="" style="background: #009688;height: 55px;min-height: 40px;max-height: 55px;min-width: 200px;max-width: 750px;text-align:center;margin:auto">
		<center><p style="padding-top: 20px !important;color:white;font-weight: 600;">PAY WITH STRIPE</p></center>
	</div>
	 <!-- stripe -->
	<form action="/charge.php?<?php echo "name=".$_GET['name']."&email=".$_GET['email']."&amount=".$_GET['items']."&grade=".$_GET['grade']."&subjects=".$_GET['subjects']."&timeslot=".$_GET['timeslot']."&timezone=".$_GET['timezone']."&parentName=".$_GET['parentName']."&parentPhone=".$_GET['parentPhone']; ?>" method="post" id="payment-form" style="width:500px;text-align:center;margin:20px auto auto auto;">
		<div class="form-row">
			
			<label for="card-element">
				Credit or debit card
			</label>
			<div id="card-element">
				<!-- A Stripe Element will be inserted here. -->
			</div>
			
			<!-- Used to display form errors. -->
			<div id="card-errors" role="alert"></div>
		</div>
		<button style="margin: 20px auto 0 auto;">Submit Payment</button>
	</form>
	</div>
    <!-- Include the PayPal JavaScript SDK -->
    <script src="https://www.paypal.com/sdk/js?client-id=AYh4_UHklhcGkHsDMo9AqkUdOTJoXYRJ1_vXhFW6-8CncscFifTWZJAI3KCDcOCPShLs_I0TWQr74xoa&currency=USD"></script>
	<script src="https://js.stripe.com/v3/"></script>
	<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script>
        // Render the PayPal button into #paypal-button-container
        paypal.Buttons({
			
            // Set up the transaction
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: <?php echo $_GET["items"]; ?>
						}
					}]
				});
			},
			
            // Finalize the transaction
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    // Show a success message to the buyer
					console.log(details);
					var name = details.payer.name.given_name;
					var email = details.payer.email_address;
					var id = details.payer.payer_id;
					var amount = <?php echo $_GET["items"]; ?>;
                    alert('Transaction completed by ' + name + '!');
					window.location.href = "complete.php?name="+name+"&email="+email+"&id="+id+"&amount="+amount+"<?php echo "&grade=".$_GET['grade']."&subjects=".$_GET['subjects']."&timeslot=".$_GET['timeslot']."&timezone=".$_GET['timezone']."&parentName=".$_GET['parentName']."&parentPhone=".$_GET['parentPhone']; ?>";
				});
			}
			
			
		}).render('#paypal-button-container');
		
		
		var stripe = Stripe('pk_test_51Gv5SkAV0AI44gVl8UEKkbTipykvf9JMT2aXe6Iw4iMBfz44NfPqtz4HiDSPjXRpXRaM7vccVHfWy4BQMjG83neG00GrEjX1dN');
		
		var elements = stripe.elements();
		var style = {
			base: {
				color: '#32325d',
				fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
				fontSmoothing: 'antialiased',
				fontSize: '16px',
				'::placeholder': {
					color: '#aab7c4'
				}
			},
			invalid: {
				color: '#fa755a',
				iconColor: '#fa755a'
			}
		};
		var card = elements.create('card', {style: style});
		card.mount('#card-element');
		card.on('change', function(event) {
			var displayError = document.getElementById('card-errors');
			if (event.error) {
				displayError.textContent = event.error.message;
				} else {
				displayError.textContent = '';
			}
		});
		var form = document.getElementById('payment-form');
		form.addEventListener('submit', function(event) {
			event.preventDefault();
			
			stripe.createToken(card).then(function(result) {
				if (result.error) {
					var errorElement = document.getElementById('card-errors');
					errorElement.textContent = result.error.message;
					} else {
					stripeTokenHandler(result.token);
				}
			});
		});
		
		function stripeTokenHandler(token) {
			var form = document.getElementById('payment-form');
			var hiddenInput = document.createElement('input');
			hiddenInput.setAttribute('type', 'hidden');
			hiddenInput.setAttribute('name', 'stripeToken');
			hiddenInput.setAttribute('value', token.id);
			form.appendChild(hiddenInput);
			form.submit();
		}
	</script>
	
</body>