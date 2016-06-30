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
			<c:import url="/imports/mainTopNav"></c:import>
			<form class="auth-form" action="${app }/api/users" method="post">
				<div class="auth-form-header">
					<h3>Please Sign Up</h3>
				</div>
				
				<div class="auth-form-body">
					<input placeholder="Username" type="text" name="username" class="form-control" required="required" autofocus="autofocus"/>
					<div id="passwords" class="has-feedback">
						<input placeholder="Password" type="password" id="password" name="password" class="form-control" required="required"/>
						<span class="glyphicon form-control-feedback"></span>
						<input placeholder="Password again" type="password" id="password2" name="password2" class="form-control" required="required" disabled="disabled"/>
					</div>
					<button type="submit" class="btn btn-success btn-block">Sign Up</button>
				</div>
				
				<div class="auth-form-footer">
					<a href="${app }/signin">Sign In</a>
				</div>
			</form>
		</div>
		
		<c:import url="/imports/mainFooter"></c:import>
		
		<c:import url="/imports/scripts"></c:import>
		<script type="text/javascript" src="${app }/res/shoplist/js/passwordsCheck.js"></script>
	</body>
</html>