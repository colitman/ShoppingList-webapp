/**
 * Created by dmytro.romenskyi on 8/4/2016.
 */
'use strict';

function AddedProduct(id, name) {
	var tr = $(document.createElement('tr'));
	var td = $(document.createElement('td'));
	var div = $(document.createElement('div'));
	var input = $(document.createElement('input'));
	var span = $(document.createElement('span'));
	var button = $(document.createElement('button'));
	var i = $(document.createElement('i'));
	
	$(tr).append(td);
	$(td).append(div);
	$(div).append(input);
	$(div).append(span);
	$(span).append(button);
	$(button).append(i);
	
	$(div).addClass('input-group input-group-sm');
	$(input).addClass('form-control');
	$(input).attr('type', 'text');
	$(input).attr('placeholder', 'Product and amount');
	$(span).addClass('input-group-btn');
	$(button).attr('type', 'button');
	$(button).addClass('btn btn-danger sl-remove-product-btn');
	$(i).addClass('fa fa-remove');
	
	$(tr).attr('id', id);
	$(input).val(name);
	$(button).data('target', id);
	
	return tr;
}

function SavedProduct(id, name, bought) {
	var tr = $(document.createElement('tr'));
	var tdName = $(document.createElement('td'));
	var tdActions = $(document.createElement('td'));
	var button = $(document.createElement('button'));
	var i = $(document.createElement('i'));
	
	$(tr).append(tdName);
	$(tr).append(tdActions);
	$(tdActions).append(button);
	$(button).append(i);
	
	$(tdName).addClass('col-xs-10 sl-product-name');
	$(tdActions).addClass('col-xs-2 sl-product-actions');
	$(button).attr('type', 'button');
	$(button).addClass('btn sl-product-status-btn');
	$(i).addClass('fa');
	
	$(tr).attr('id', id);
	$(tr).data('bought', bought);
	$(tr).addClass(bought? 'sl-bought-product':'');
	$(tdName).text(name);
	$(button).data('target', id);
	$(button).addClass(bought? 'btn-warning': 'btn-success');
	$(i).addClass(bought? 'fa-minus': 'fa-cart-plus');
	
	return tr;
}
/*
 <div class="panel-footer">
 <a href="/lists/1">/lists/1</a>
 </div>
 */
function SavedList(id, isBought, isPublic) {
	var article = $(document.createElement('article'));
	var panel = $(document.createElement('div'));
	var heading = $(document.createElement('div'));
	var body = $(document.createElement('div'));
	var table = $(document.createElement('table'));
	var footer = $(document.createElement('div'));
	var footerLink = $(document.createElement('a'));
	
	if(!isBought) {
		var buyButton = $(document.createElement('button'));
	}
	
	$(article).append(panel);
	$(panel).append(heading);
	$(panel).append(body);
	$(panel).append(table);
	if(!isBought) {
		$(panel).append(buyButton);
	}
	$(panel).append(footer);
	$(footer).append(footerLink);
	
	$(article).addClass('sl-list col-sm-6 col-md-4');
	$(panel).addClass('panel');
	$(panel).addClass(isBought? 'panel-default': 'panel-success');
	$(heading).addClass('panel-heading');
	$(body).addClass('panel-body');
	$(table).addClass('table table-condensed');
	if(!isBought) {
		$(buyButton).attr('type', 'button');
		$(buyButton).addClass('btn btn-sm btn-block sl-list-action-btn sl-buy-list-btn');
		$(buyButton).addClass(isBought? 'btn-default': 'btn-primary');
	}
	$(footer).addClass('panel-footer');
	
	$(article).attr('id', id);
	$(article).data('bought', isBought);
	$(article).data('public', isPublic);
	$(heading).text(id);
	$(body).text('Items in list: ');
	if(!isBought) {
		$(buyButton).data('target', id);
		$(buyButton).prop('disabled', isBought);
		$(buyButton).text(isBought? 'Bought': 'Buy');
	}
	$(footerLink).attr('href', ROOT + '/lists/' + id);
	$(footerLink).text('/lists/' + id);
	
	return article;
}