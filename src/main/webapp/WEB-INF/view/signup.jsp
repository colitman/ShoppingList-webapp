<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<c:set var="app" value="${pageContext.servletContext.contextPath}" />

<!DOCTYPE html>
<html lang="en">
	<head>
		<c:import url="/imports/head?pageTitle=Sign Up"></c:import>
	</head>
	
	<body data-page="signup">
		<div class="container">
			<c:import url="/imports/mainTopNav"></c:import>
			
			<main>
				<form class="sl-auth-form" action="${app}/api/users" method="post">
					<header>
						<div class="alert alert-danger hidden">
							<h4>Sign up failure</h4>
							<p></p>
						</div>
						
						<h3>Please Sign Up</h3>
					</header>
					
					<input id="username" name="username" class="form-control" type="text" placeholder="Username" required="required" autofocus="autofocus"/>
					
					<div class="has-feedback">
						<input id="password" name="password" class="form-control" type="password"  placeholder="Password" required="required"/>
						<span class="glyphicon form-control-feedback"></span>
						<input id="password2" name="password2" class="form-control" type="password" placeholder="Password again" required="required" disabled="disabled"/>
					</div>
					
					<button type="submit" class="btn btn-success btn-block sl-auth-button">Sign Up</button>
					
					<footer>
						<a id="sign-in-link" href="${app}/signin">Sign In</a>
					</footer>
				</form>
			</main>
			<c:import url="/imports/mainFooter"></c:import>
		</div>

		<c:import url="/imports/scripts"></c:import>
		
		<script type="text/javascript" src="${app }/res/shoplist/js/services/UserService.js"></script>
		
		<script type="text/javascript" src="${app }/res/shoplist/js/controllers/SignUpFormController.js"></script>

		<script type="text/javascript" src="${app }/res/shoplist/js/views/authPage/index_signup.js"></script>
	</body>
</html>