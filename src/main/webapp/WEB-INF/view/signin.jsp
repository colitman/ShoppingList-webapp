<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<c:set value="${pageContext.servletContext.contextPath}" var="app"></c:set>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
		
		<title>Sign In</title>
		<link rel="stylesheet" href="${app }/res/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="${app }/res/fa/css/font-awesome.css">
		<link rel="stylesheet" href="${app }/res/adminlte/css/AdminLTE.css">
	    <link rel="stylesheet" href="${app }/res/adminlte/css/skins/_all-skins.css">
	</head>
	<body class="login-page">
		<div class="login-box">
			<div class="login-logo"><strong>Shopping</strong>List</div>
			<div class="login-box-body">
				<p class="login-box-msg">Please sign in</p>
				
				<c:if test="${param.error != null}">
					<div class="callout callout-danger">
						<h4>Sign in failure</h4>
						<c:if test="${SPRING_SECURITY_LAST_EXCEPTION != null}">
							<p><c:out value="${SPRING_SECURITY_LAST_EXCEPTION.message}" /></p>
						</c:if>
					</div>
				</c:if>
				
				<form action="${app }/signin" method="post">
					<sec:csrfInput/>
					<div class="form-group has-feedback">
						<input type="text" class="form-control" name="username" placeholder="Username" autofocus="autofocus" required="required"/>
						<i class="fa fa-user form-control-feedback"></i>
					</div>
					<div class="form-group has-feedback">
						<input type="password" class="form-control" name="password" placeholder="Password" required="required"/>
						<i class="fa fa-user-secret form-control-feedback"></i>
					</div>
					<button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
				</form>
				
				<a href="${app }/signup">Sign Up</a><br>
				<a href="${app }/password_reset">Reset password</a>
			</div>
			<p class="text-center">ShoppingList | Dmytro Romenskyi | HobbyDev | 2016</p>
		</div>
		
		<script src="${app }/res/jquery/jquery.min.js"></script>
		<script src="${app }/res/bootstrap/js/bootstrap.min.js"></script>
	</body>
</html>