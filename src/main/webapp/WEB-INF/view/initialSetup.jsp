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
		
		<title>Setup</title>
		<link rel="stylesheet" href="${app }/res/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="${app }/res/fa/css/font-awesome.css">
		<link rel="stylesheet" href="${app }/res/adminlte/css/AdminLTE.css">
		<link rel="stylesheet" href="${app }/res/adminlte/css/skins/_all-skins.css">
		<link rel="stylesheet" href="${app }/res/doctool/css/fix.css">
	</head>
	<body class="sidebar-mini skin-black-light">
		<div class="wrapper">
			<header class="main-header">
				<a href="${app }/" class="logo">
					<span class="logo-lg">Easy<b>ERP</b></span>
				</a>
				
				<nav class="navbar navbar-static-top">
				
				</nav>
			</header>
			
			<aside class="main-sidebar">
				<section class="sidebar">
					<ul class="sidebar-menu">
						<li>
							<a href="#admin-user-setup">
								<i class="fa fa-key"></i><span>Admin User Setup</span>
							</a>
						</li>
					</ul>
				</section>
			</aside>
			
			<div class="content-wrapper">
				<section class="content-header">
					<h1>Setup</h1>
					<ol class="breadcrumb">
						<li><i class="fa fa-cog"></i> Admin</li>
						<li class="active">Initial Setup</li>
					</ol>
				</section>
				<section class="content">
					<section id="admin-user-setup">
						<div class=row>
							<div class="col-md-6">
								<div class="box box-danger">
									<div class="box-header with-border">
										<h3 class="box-title">Administrator Access</h3>
																				
										<form class="form-horizontal" action="${app }/start/admin" method="post">
											<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
											
											<div class="box-body">
												<div class="form-group">
													<label for="username" class="col-md-3 control-label">Username</label>
													<div class="col-md-9">
														<input type="text" name="username" id="username" class="form-control" placeholder="Username" autofocus="autofocus" required="required" />
													</div>
												</div>
												
												<div class="form-group">
													<label for="password" class="col-md-3 control-label">Password</label>
													<div class="col-md-9">
														<input type="password" name="password" id="password" class="form-control" placeholder="Password" required="required"/>
													</div>
												</div>
											</div>
											
											<div class="box-footer">
												<button type="reset" class="btn btn-default">Clear</button>
												<button type="submit" class="btn btn-success pull-right">Create</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</section>
				</section>
			</div>
			
			<footer class="main-footer text-center">
				EasyERP | Dmytro Romenskyi | HobbyDev | 2016
			</footer>
		</div>
		
		
		<script src="${app }/res/jquery/jquery.min.js"></script>
		<script src="${app }/res/bootstrap/js/bootstrap.min.js"></script>
	</body>
</html>