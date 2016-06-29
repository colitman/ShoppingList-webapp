<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<c:set value="${pageContext.servletContext.contextPath}" var="app"></c:set>

<!DOCTYPE html>
<html lang="en">
	<head>
		<c:import url="/imports/head?pageTitle=Sign Up"></c:import>
		<link rel="stylesheet" href="${app }/res/shoplist/css/auth.css">
	</head>
	
	<body class="auth-page">
		<div class="container">
			<form class="auth-form" action="${app }/signup" method="post">
				<div class="auth-form-header">
					<h3>Please Sign Up</h3>
				</div>
				
				<div class="auth-form-body">
					<input placeholder="Username" type="text" name="username" class="form-control" required="required" autofocus="autofocus"/>
					<input placeholder="Password" type="password" name="password" class="form-control" required="required"/>
					<input placeholder="Password again" type="password" name="password" class="form-control" required="required"/>
					<button type="submit" class="btn btn-success btn-block">Sign Up</button>
				</div>
				
				<div class="auth-form-footer">
					<a href="${app }/signin">Sign In</a>
				</div>
			</form>
			<p class="text-center">ShoppingList | Dmytro Romenskyi | HobbyDev | 2016</p>
		</div>
		
		<script src="${app }/res/jquery/jquery.min.js"></script>
		<script src="${app }/res/bootstrap/js/bootstrap.min.js"></script>
	</body>
</html>