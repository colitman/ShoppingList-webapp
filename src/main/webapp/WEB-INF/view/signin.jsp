<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<c:set var="app" value="${pageContext.servletContext.contextPath}"></c:set>

<!DOCTYPE html>
<html lang="en">
	<head>
		<c:import url="/imports/head?pageTitle=Sign In"></c:import>
	</head>
	
	<body>
		<div class="container">
			<c:import url="/imports/mainTopNav"></c:import>

			<main>
				<form class="sl-auth-form" action="${app}/signin" method="post">
					<header>
						<c:if test="${param.error != null}">
							<div class="alert alert-danger">
								<h4>Sign in failure</h4>
								<c:if test="${SPRING_SECURITY_LAST_EXCEPTION != null}">
									<p><c:out value="${SPRING_SECURITY_LAST_EXCEPTION.message}" /></p>
								</c:if>
							</div>
						</c:if>
						<h3>Please Sign In</h3>
					</header>
					
					<input id="username" name="username" value="${username}" class="form-control" type="text"  placeholder="Username" required="required" autofocus="autofocus"/>
					<input id="password" name="password" class="form-control" type="password" placeholder="Password" required="required"/>
					<button type="submit" class="btn btn-primary btn-block sl-auth-button">Sign In</button>
					
					<footer>
						<a href="${app}/signup" id="sign-up-link">Sign Up</a>
						<a class="pull-right" href="${app}/password_reset" id="reset-pwd-link">Reset password</a>
					</footer>
				</form>
			</main>
			<c:import url="/imports/mainFooter"></c:import>
		</div>
		
		<c:import url="/imports/scripts"></c:import>
		<script type="text/javascript" src="${app }/res/shoplist/js/views/authPage/index_signin.js"></script>
	</body>
</html>