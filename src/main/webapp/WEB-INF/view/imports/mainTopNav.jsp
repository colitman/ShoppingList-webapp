<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set value="${pageContext.servletContext.contextPath}" var="app"></c:set>
<c:set var="anon" value="${empty currentUser}"></c:set>

<nav class="navbar navbar-default">
	<div class="container-fluid">
		<div class="navbar-header">
			<a class="navbar-brand" href="${app }/">ShoppingList</a>
			<button type="button"
					class="navbar-toggle collapsed"
					data-toggle="collapse"
					data-target="#main-top-navbar">
			
				<i class="fa fa-bars"></i>
			</button>
		</div>
		
		<div class="collapse navbar-collapse" id="main-top-navbar">
			<form class="navbar-form navbar-left form-inline">
				<div class="form-group">
					<label for="list-id">/</label>
					<input type="search" id="list-id" class="form-control" placeholder="List ID" />
				</div>
				<button type="button" class="btn btn-default">Find</button>
			</form>
			
			<ul class="nav navbar-nav navbar-right">
				<li class="dropdown">
					<a href="#" 
						class="dropdown-toggle" 
						data-toggle="dropdown">
						<i class="fa fa-user"></i>
						${anon ? 'Guest' : currentUser.username}
						<i class="fa fa-caret-down"></i>
					</a>
					<ul class="dropdown-menu">
						<li>
							<a href="${app }/${anon? 'signin' : 'users/' += currentUser.key}">${anon ? 'Sign In' : 'Profile' }</a>
						</li>
						<c:if test="${not anon }">
							<li>
								<form action="${app }/signout" method="post">
									<button class="btn btn-default" type="submit">Sign Out</button>
								</form>
							</li>
						</c:if>
					</ul>
				</li>
			</ul>
			
			<c:if test="${not root }">
				<button type="button" class="btn btn-primary navbar-btn navbar-right">Create List</button>
			</c:if>
		</div>
	</div>
</nav>