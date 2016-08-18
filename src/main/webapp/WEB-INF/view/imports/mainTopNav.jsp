<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<c:set var="app" value="${pageContext.servletContext.contextPath}" />
<c:set var="isAnon" value="${empty currentUser}" />

<nav class="navbar navbar-default navbar-fixed-top">
	<div class="container">
		<div class="navbar-header">
			<a class="navbar-brand" href="${app}/">ShoppingList</a>
			<button type="button"
					class="navbar-toggle collapsed"
					data-toggle="collapse"
					data-target="#sl-main-top-navbar">
			
				<i class="fa fa-bars"></i>
			</button>
		</div>
		
		<div class="collapse navbar-collapse" id="sl-main-top-navbar">
			<form id="sl-list-search-form" class="navbar-form navbar-left form-inline" action="${app}/lists/" method="get">
				<div class="form-group">
					<label for="listId">/</label>
					<input type="search" id="listId" class="form-control" placeholder="List ID" />
				</div>
				<button type="submit" class="btn btn-default">Find</button>
			</form>
			
			<ul class="nav navbar-nav navbar-right">
				<li class="dropdown">
					<a href="#" 
						class="dropdown-toggle" 
						data-toggle="dropdown">
						<i class="fa fa-user"></i>
						${isAnon? 'Guest' : currentUser.username}
						<i class="fa fa-caret-down"></i>
					</a>
					<ul class="dropdown-menu">
						<li>
							<a href="${app}/${isAnon? 'signin' : 'users/' += currentUser.key}">${isAnon? 'Sign In' : 'Profile'}</a>
						</li>
						<c:if test="${not isAnon}">
							<li>
								<form action="${app}/signout" method="post">
									<button class="btn btn-default" type="submit">Sign Out</button>
								</form>
							</li>
						</c:if>
					</ul>
				</li>
			</ul>
			
			<c:if test="${not root}">
				<a href="${app}/" class="btn btn-primary navbar-btn navbar-right">Create List</a>
			</c:if>
		</div>
	</div>
</nav>
<section class="alerts"></section>