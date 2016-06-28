<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<c:set value="${pageContext.servletContext.contextPath}" var="app"></c:set>

<!DOCTYPE html>
<html lang="en">
	<head>
		<c:import url="/imports/head?pageTitle=Day Off Categories Management"></c:import>
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
					<h1>Day Off Categories Management</h1>
					<ol class="breadcrumb">
						<li><a href="${app }/"><i class="fa fa-home"></i> Home</a></li>
						<li>Admin</li>
						<li class="active">Day Off Categories Management</li>
					</ol>
				</section>
				<section class="content">
					<section id="dayoff-categories-management">
						<div class="row">
							<div class="col-md-4">
								<section id="new-categories-section">
									<div class="box box-primary collapsed-box">
										<div class="box-header with-border">
											<h3 class="box-title">New Category</h3>
											<div class="box-tools pull-right">
												<button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-plus"></i></button>
											</div>
										</div>
									    	
								    	<form class="form-horizontal" action="${app }/admin/daysoff/categories" method="post">
								    		<sec:csrfInput />
								    		
								    		<div class="box-body">
									    		<div class="form-group">
									    			<label for="title" class="col-md-3 control-label">Title</label>
									    			<div class="col-md-9">
									    				<input type="text" class="form-control" id="title" name="title" placeholder="Title" autofocus="autofocus" required="required" />
									    			</div>
									    		</div>
									    		<div class="form-group">
									    			<label for="description" class="col-md-3 control-label">Description</label>
									    			<div class="col-md-9">
									    				<textarea class="form-control" rows="3" id="description" name="description" placeholder="Description"></textarea>
									    			</div>
									    		</div>
									    		
									    		<input type="hidden" name="orderNumber" value="${fn:length(categories) + 1 }"/>
									  		</div>
									  		
									  		<div class="box-footer">
									    		<button type="reset" class="btn btn-default btn-flat">Reset</button>
									    		<button type="submit" class="btn btn-primary btn-flat pull-right">Submit</button>
									  		</div>
								    	</form>
									</div>
								</section>
							</div>
						
							<div class="col-md-8">
								<section id="existing-categories-info">
									<div class="box ">
										<div class="box-header with-border">
											<h3 class="box-title">Day Off Categories</h3>
											<div class="box-tools pull-right"></div>
									    	
									    	<div class="box-body">
									    		<c:choose>
									    			<c:when test="${empty categories }">
									    				<p class="text-center">No categories are configured yet.</p>
									    			</c:when>
									    			<c:otherwise>
									    				<table class="table table-condensed table-bordered table-hover">
									    					<thead>
									    						<tr>
									    							<th style="width: 10px;">#</th>
									    							<th>Title</th>
									    							<th class="col-xs-1">Actions</th>
									    						</tr>
									    					</thead>
									    					<tbody>
									    						<c:forEach items="${categories }" var="category" varStatus="loopInfo">
									    							<tr>
									    								<th scope="row">${loopInfo.count }</td>
									    								<td>${category.title }</td>
									    								<td>
									    									<c:choose>
									    										<c:when test="${not loopInfo.first }">
									    											<a href="#"><i class="fa fa-arrow-up"></i></a>&nbsp;
									    										</c:when>
									    										<c:when test="${loopInfo.first }">
									    											<a href="#" class="disabled"><i class="fa fa-arrow-up"></i></a>&nbsp;
									    										</c:when>
									    									</c:choose>
									    									<c:choose>
									    										<c:when test="${not loopInfo.last }">
										    										<a href="#"><i class="fa fa fa-arrow-down"></i></a>&nbsp;
										    									</c:when>
										    									<c:when test="${loopInfo.last }">
										    										<a href="#" class="disabled"><i class="fa fa fa-arrow-down"></i></a>&nbsp;
										    									</c:when>
									    									</c:choose>
									    									<a href="#"><i class="fa fa-pencil"></i></a>&nbsp;
									    									<a href="#" class="delete-action" data-delete="${category.id }"><i class="fa fa-times"></i></a>
									    								</td>
									    							</tr>
									    						</c:forEach>
									    					</tbody>
									    				</table>
									    			</c:otherwise>
									    		</c:choose>
									  		</div>
									  		
									  		<div class="box-footer">
									  			Paging will be here
									  		</div>
										</div>
									</div>
								</section>
							</div>
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