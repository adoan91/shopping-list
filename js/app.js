$(document).ready(function() {

	// Add item button
  	$('#js-shopping-list-form').submit(function(event) {
  		var input = $('#js-shopping-list-form').find('input').val();
  		
  		if (input != "") {
  			addItem(input);
  		} else {}
  		
  		$('#js-shopping-list-form').find('input').val("");
  	});

  	// check button
  	//$('.shopping-item-toggle').click(function(event) {
  	//$('div.shopping-item-controls').on('click', 'button.shopping-item-toggle', function(event) {
  	$('ul').on('click', 'button.shopping-item-toggle', function(event) {	
  		//$(event.currentTarget)
  		$(this)
  			.closest('li')
  			.find('span.shopping-item')
  			.toggleClass('shopping-item__checked');
  	});

  	// delete button
  	//$('div.shopping-item-controls').on('click', 'button.shopping-item-delete', function(event) {
  	$('ul').on('click', 'button.shopping-item-delete', function(event) {	
  		//$(event.currentTarget)
  		this
  			.closest('li')
  			.remove();
  	});

  	function addItem(input) {
  		event.preventDefault();
		
		var newItem = setupShoppingListItem(input);
		$('.shopping-list').append(newItem);

	}

	function setupShoppingListItem(itemName) { 

		var out =
		'<li>' +
			'<span class="shopping-item">' + itemName + '</span>' +
			'<div class="shopping-item-controls">' +
				'<button class="shopping-item-toggle">' +
					'<span class="button-label">check</span>' +
				'</button>' +
				'<button class="shopping-item-delete">' +
					'<span class="button-label">delete</span>' +
				'</button>' +
			'</div>' +
		'</li>';

		return out;
	}

});


