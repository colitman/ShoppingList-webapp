<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<c:set value="${pageContext.servletContext.contextPath}" var="app"></c:set>

<section class="sidebar">
	<ul class="sidebar-menu">
		<sec:authorize access="hasRole('ADMIN')">
			<li class="treeview">
				<a href="#">
					<i class="fa fa-key"></i>
					<span>Administration</span>
					<i class="fa fa-angle-left pull-right"></i>
				</a>
				<ul class="treeview-menu">
					<li>
						<a href="#">
							<i class="fa fa-calendar-check-o"></i>
							<span>Day Off Configuration</span>
							<i class="fa fa-angle-left pull-right"></i>
						</a>
						<ul class="treeview-menu">
							<li>
								<a href="${app }/admin/daysoff/categories">
									<i class="fa fa-bookmark-o"></i>
									<span>Categories</span>
								</a>
							</li>
						</ul>
					</li>
					
					<li>
						<a href="#">
							<i class="fa fa-users"></i>
							<span>Users Management</span>
							<i class="fa fa-angle-left pull-right"></i>
						</a>
						<ul class="treeview-menu">
							<li>
								<a href="${app }/admin/users/roles">
									<i class="fa fa-unlock-alt"></i>
									<span>User Roles</span>
								</a>
							</li>
						</ul>
					</li>
					
					<li>
						<a href="#">
							<i class="fa fa-globe"></i>
							<span>System Settings</span>
							<i class="fa fa-angle-left pull-right"></i>
						</a>
						<ul class="treeview-menu">
							<li>
								<a href="#">
									<i class="fa fa-picture-o"></i>
									<span>User Interface</span>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</sec:authorize>
	</ul>
</section>