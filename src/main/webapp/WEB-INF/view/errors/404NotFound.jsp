<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>

<c:set var="app" value="${pageContext.servletContext.contextPath}" />

<!DOCTYPE html>
<html lang="en">
	<head>
		<c:import url="/imports/head?pageTitle=Shopping List"></c:import>
	</head>
	<body class="sl-error-404-page">
		<div class="js-sl-page container">
			<div class="sl-main-content">
				<i class="fa fa-meh-o fa-pulse" style="font-size:20em"></i>
				Not Found
			</div>
			<c:import url="/imports/mainFooter"></c:import>
		</div>
		
		<c:import url="/imports/scripts"></c:import>
	</body>
</html>