<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<c:set value="${pageContext.servletContext.contextPath}" var="app"></c:set>

<!DOCTYPE html>
<html lang="en">
	<head>
		<c:import url="/imports/head?pageTitle=Dashboard"></c:import>
	</head>
	<body class="sidebar-mini ">
		<div class="wrapper">
			<header class="main-header">
				<c:import url="/imports/mainHeader"></c:import>
			</header>
			<aside class="main-sidebar">
				<c:import url="/imports/mainSidebar"></c:import>
			</aside>

<!-- Main content goes further -->
			<div class="content-wrapper">
				<section class="content-header">
					<h1>Dashboard</h1>
					<ol class="breadcrumb">
						<li><a href="${app }/"><i class="fa fa-home"></i> Home</a></li>
						<li class="active">Dashboard</li>
					</ol>
				</section>
				<section class="content">
					<section id="">
						<div class=row>
							
						</div>
					</section>
				</section>
			</div>
<!-- End of main content -->

			<footer class="main-footer text-center">
				<c:import url="/imports/mainFooter"></c:import>
			</footer>
			
			
			<aside class="control-sidebar">
				<c:import url="/imports/controlSidebar"></c:import>
			</aside>
			<div class="control-sidebar-bg"></div>
		</div>
		
<!-- Page specific imports go further -->

<!-- End of page specific imports -->
		<c:import url="/imports/scripts"></c:import>
	</body>
</html>