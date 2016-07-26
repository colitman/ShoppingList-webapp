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
					
					<c:import url="/imports/newListForm"></c:import>
				
				</div>
			</div>
			<c:import url="/imports/mainFooter"></c:import>
		</div>

		<div class="sl-modals">
			
		</div>

		<div class="sl-snippets">
			<c:import url="/imports/addedProductSnippet"></c:import>
			<c:import url="/imports/savedListSnippet"></c:import>
			<c:import url="/imports/savedProductSnippet"></c:import>
		</div>

		<c:import url="/imports/scripts"></c:import>
		<script type="text/javascript" src="${app }/res/shoplist/js/eventHandlers/click/manageProductInCart.js"></script>
		<script type="text/javascript" src="${app }/res/shoplist/js/apiCalls/getListsForCurrentUser.js"></script>
		<script type="text/javascript" src="${app }/res/shoplist/js/builders/createSavedLists.js"></script>
		<script type="text/javascript" src="${app }/res/shoplist/js/eventHandlers/click/addProductToNewList.js"></script>
		<script type="text/javascript" src="${app }/res/shoplist/js/eventHandlers/click/saveList.js"></script>
		<script type="text/javascript" src="${app }/res/shoplist/js/eventHandlers/click/buyList.js"></script>
 		<script type="text/javascript" src="${app }/res/shoplist/js/controllers/mainPageController.js"></script>
	</body>
</html>