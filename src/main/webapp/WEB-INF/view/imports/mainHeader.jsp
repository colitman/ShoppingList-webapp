<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set value="${pageContext.servletContext.contextPath}" var="app"></c:set>

<a href="${app }/" class="logo">
	<span class="logo-mini">SL</span>
	<span class="logo-lg"><strong>Shopping</strong>List</span>
</a>

<nav class="navbar navbar-static-top">
	<a href="#" class="sidebar-toggle" data-toggle="offcanvas">
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
	</a>
	
	<div class="navbar-custom-menu">
		<ul class="nav navbar-nav">
			<sec:authorize access="isAuthenticated()">
			<li class="dropdown notifications-menu">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown">
					<i class="fa fa-bell-o"></i>
					<c:if test="${not empty notifications}" var="hasNotifications">
						<span class="label label-warning">${fn:length(notifications) }</span>
					</c:if>
				</a>
				<ul class="dropdown-menu">
					<li class="header">
						<c:choose>
							<c:when test="${hasNotifications }">
								You have ${fn:length(notifications)} notifications
							</c:when>
							<c:otherwise>
								You do not have new notifications
							</c:otherwise>
						</c:choose>
					</li>
					<c:if test="${hasNotifications }">
						<li>
							<ul class="menu">
								<c:forEach items="${notifications }" var="notification">
									<li>
										<a href="${app }/users/${principal.name }/notifications/${notification.id }">
											${notification.message }
										</a>
									</li>
								</c:forEach>
							</ul>
						</li>
						<li class="footer">
							<a href="#">View all</a>
						</li>
					</c:if>
				</ul>
			</li> <!-- .notifications-menu -->
			
			<li class="dropdown tasks-menu">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown">
					<i class="fa fa-flag-o"></i>
					<c:if test="${not empty tasks}" var="hasTasks">
						<span class="label label-danger">${fn:length(tasks) }</span>
					</c:if>
				</a>
				<ul class="dropdown-menu">
					<li class="header">
						<c:choose>
							<c:when test="${hasTasks }">
								You have ${fn:length(tasks)} new tasks
							</c:when>
							<c:otherwise>
								You do not have new tasks
							</c:otherwise>
						</c:choose>
					</li>
					<c:if test="${hasTasks }">
						<li>
							<ul class="menu">
								<c:forEach items="${tasks }" var="task">
									<li>
										<a href="${app }/users/${principal.name }/tasks/${task.id }">
											${task.message }
										</a>
									</li>
								</c:forEach>
							</ul>
						</li>
						<li class="footer">
							<a href="#">View all</a>
						</li>
					</c:if>
				</ul>
			</li> <!-- .tasks-menu -->
			</sec:authorize>
			
			<li class="dropdown user-menu">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown">
					<i class="fa fa-user"></i>
					${not empty user ? user.username : 'Guest' }
				</a>
				<ul class="dropdown-menu">
					<li class="user-footer">
						<div class="pull-left">
							<sec:authorize access="isAuthenticated()">
							<a class="btn btn-default btn-flat" href="${app }/users/${principal.name }">
								Profile
							</a>
							</sec:authorize>
							<sec:authorize access="isAnonymous()">
							<a class="btn btn-default btn-flat" href="${app }/signin">
								Sign In
							</a>
							</sec:authorize>
						</div>
						<sec:authorize access="isAuthenticated()">
						<div class="pull-right">
							<form action="${app }/logout" method="post">
								<sec:csrfInput/>
								<button type="submit" class="btn btn-default btn-flat">Logout</button>
							</form>
						</div>
						</sec:authorize>
					</li>
				</ul>
			</li> <!-- .user-menu -->
			
			
			<li>
				<a href="#" data-toggle="control-sidebar">
					<i class="fa fa-gears"></i>
				</a>
			</li>
		</ul> <!-- .navbar-nav -->
	</div>
</nav> <!-- .navbar -->