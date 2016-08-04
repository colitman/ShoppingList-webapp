<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>

<c:set var="app" value="${pageContext.servletContext.contextPath}"></c:set>
<c:set var="isAnon" value="${empty currentUser}"></c:set>

<!DOCTYPE html>
<html lang="en">
	<head>
		<c:import url="/imports/head?pageTitle=${listId} :: Shopping List"></c:import>
	</head>
	
	<body>
		<div class="container">
			<c:import url="/imports/mainTopNav"></c:import>
			
			<main>
				<c:import url="/snippets/savedListSnippet?id=${listId}"></c:import>
			</main>
			
			<c:import url="/imports/mainFooter"></c:import>
		</div>

		<div class="sl-modals">
			
		</div>

		<!--
		<div class="sl-snippets hidden">
			<c:import url="/snippets/savedProductSnippet"></c:import>
		</div>
		-->

		<c:import url="/imports/scripts"></c:import>

		<script type="text/javascript" src="${app }/res/shoplist/js/services/ListService.js"></script>

		<script type="text/javascript" src="${app }/res/shoplist/js/builders/ListBuilder.js"></script>

		<script type="text/javascript" src="${app }/res/shoplist/js/controllers/ListsController.js"></script>
		<script type="text/javascript" src="${app }/res/shoplist/js/controllers/SavedListFormController.js"></script>
		
		<script type="text/javascript" src="${app }/res/shoplist/js/views/listPage/index.js"></script>

	</body>
</html>