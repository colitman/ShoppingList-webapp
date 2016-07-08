<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>

<c:set var="app" value="${pageContext.servletContext.contextPath}"></c:set>
<c:set var="isAnon" value="${empty currentUser}"></c:set>
<c:set var="hasSavedLists" value="${savedListsCount > 0}"></c:set>

<!DOCTYPE html>
<html lang="en">
	<head>
		<c:import url="/imports/head?pageTitle=Shopping List"></c:import>
		<link rel="stylesheet" href="${app}/res/shoplist/css/fix-lists.css">
		<meta name="hasSavedLists" content="${hasSavedLists}">
	</head>
	
	<body>
		<div class="sl-page container">
			<c:import url="/imports/mainTopNav?root=true"></c:import>
			
			<div class="sl-main-content">
				<div class="row sl-lists">
					<div class="sl-list-wrapper col-sm-6 col-md-4">
						<div id="sl-new-list" class="panel panel-primary">
							<div class="panel-heading">
								New List
							</div>
							<div class="panel-body">
								What is needed?
							</div>
							<c:import url="/imports/newListBody"></c:import>
						</div>
					</div>

					<c:if test="${hasSavedLists}">
						<div class="sl-list-wrapper col-sm-6 col-md-4">
							<div class="sl-saved-list panel panel-success">
								<div class="panel-heading">
									
								</div>
								<div class="panel-body">
									List Items:
								</div>

								<table class="table table-condensed">
									<tr class="sl-saved-product hidden">
										<td class="col-xs-10 sl-product-name"></td>
										<td class="col-xs-2 sl-product-actions">
											<button class="btn" type="button"><i class="fa"></i></button>
										</td>
									</tr>
									<tr class="sl-wait-sign">
										<td>
											<p class="text-center">
												<i class="fa fa-refresh fa-spin fa-2x"></i>
											</p>
										</td>
									</tr>
								</table>
								<button type="button" class="btn btn-primary btn-sm btn-block buy-list-btn">Buy</button>

								<div class="panel-footer">
									<a href="${app }/lists/">/lists/</a>
								</div>
							</div>
						</div>						
					</c:if>
				</div>
			</div>
			<c:import url="/imports/mainFooter"></c:import>
		</div>

		<c:import url="/imports/scripts"></c:import>
		<script type="text/javascript" src="${app }/res/shoplist/js/apiCalls/getListsForCurrentUser.js"></script>
		<script type="text/javascript" src="${app }/res/shoplist/js/builders/createSavedLists.js"></script>
		<script type="text/javascript" src="${app }/res/shoplist/js/eventHandlers/click/addProductToNewList.js"></script>
		<script type="text/javascript" src="${app }/res/shoplist/js/eventHandlers/click/saveList.js"></script>
 		<script type="text/javascript" src="${app }/res/shoplist/js/controllers/mainPageController.js"></script>
	</body>
</html>