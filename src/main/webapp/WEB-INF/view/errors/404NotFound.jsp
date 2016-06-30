<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<c:set value="${pageContext.servletContext.contextPath}" var="app"></c:set>

<!DOCTYPE html>
<html lang="en">
	<head>
		<c:import url="/imports/head?pageTitle=Shopping List"></c:import>
	</head>
	<body class="error-404-page">
		<i class="fa fa-meh-o fa-pulse" style="font-size:20em"></i>
		Not Found
		
		<c:import url="/imports/mainFooter"></c:import>
				
		<c:import url="/imports/scripts"></c:import>
	</body>
</html>