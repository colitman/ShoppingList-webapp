<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>

<c:set var="app" value="${pageContext.servletContext.contextPath}" />

<!DOCTYPE html>
<html lang="en">
	<head>
		<c:import url="/imports/head?pageTitle=Shopping List"></c:import>
	</head>
	
	<body data-page="root">
		<div class="container">
			<c:import url="/imports/mainTopNav?root=true"></c:import>
			
			<main>
				<div class="row">
					<section id="sl-new-list">
						<article class="sl-list col-sm-6 col-md-4">
							<div class="panel panel-primary">
								<div class="panel-heading">
									New List
								</div>
								<div class="panel-body">
									What is needed?
								</div>
								
								<table class="table table-condensed">
									<tr id="sl-new-product-form">
										<td>
											<div class="input-group input-group-sm">
												<input type="text" class="form-control" placeholder="Product and amount" autofocus="autofocus">
												<span class="input-group-btn">
													<button type="button" class="btn btn-default"><i class="fa fa-plus"></i></button>
												</span>
											</div>
										</td>
									</tr>
								</table>
								
								<button type="button" class="btn btn-success btn-sm btn-block sl-list-action-btn">Save</button>
							</div>
						</article>
					</section>
					
					<section id="sl-saved-lists"></section>
				</div>
			</main>
			<c:import url="/imports/mainFooter"></c:import>
		</div>

		<div class="sl-modals">
			<c:import url="/imports/modals/setListAccessModal"></c:import>
		</div>

		<c:import url="/imports/scripts"></c:import>

		<script type="text/javascript" src="${app }/res/shoplist/js/services/ListService.js"></script>

		<script type="text/javascript" src="${app }/res/shoplist/js/builders/ListBuilder.js"></script>

		<script type="text/javascript" src="${app }/res/shoplist/js/controllers/ListsController.js"></script>
		<script type="text/javascript" src="${app }/res/shoplist/js/controllers/NewListFormController.js"></script>
		<script type="text/javascript" src="${app }/res/shoplist/js/controllers/SavedListFormController.js"></script>
		
		<script type="text/javascript" src="${app }/res/shoplist/js/views/rootPage/index.js"></script>

	</body>
</html>