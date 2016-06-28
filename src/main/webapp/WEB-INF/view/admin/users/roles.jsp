<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<c:set value="${pageContext.servletContext.contextPath}" var="app"></c:set>

<!DOCTYPE html>
<html lang="en">
	<head>
		<c:import url="/imports/head?pageTitle=Roles Management"></c:import>
	</head>
	<body class="sidebar-mini skin-black-light">
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
					<h1>Roles Management</h1>
					<ol class="breadcrumb">
						<li><a href="${app }/"><i class="fa fa-home"></i> Home</a></li>
						<li>Admin</li>
						<li class="active">Roles Management</li>
					</ol>
				</section>
				<section class="content">
					<section id="roles-management">
						<div class="row">
							<c:forEach items="${roles }" var="role">
								<div class="col-md-7">
									<div class="box box-default collapsed-box">
										<div class="box-header with-border">
											<h3 class="box-title">${role.title }</h3>

											<div class="box-tools pull-right">
												<button type="button" class="btn btn-box-tool" data-widget="collapse">
													<i class="fa fa-plus"></i>
												</button>
											</div> <!-- /.box-tools -->
										</div> <!-- /.box-header -->
										<div class="box-body" style="display: none;">
											<c:forEach items="${role.users }" var="roleUser">
												${roleUser.username }<br>
											</c:forEach>
										</div> <!-- /.box-body -->
									</div> <!-- /.box -->
								</div>
							</c:forEach>
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