<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<c:set var="app" value="${pageContext.servletContext.contextPath}"></c:set>

<footer>
	<div class="alert alert-success hidden"></div>
	<div class="alert alert-info hidden"></div>
	<div class="alert alert-warning hidden"></div>
	<div class="alert alert-danger hidden"></div>
	<p class="text-center text-muted">
		ShoppingList |
		<a href="https://ua.linkedin.com/in/dmytro-romenskyi-87035524">Dmytro Romenskyi</a> |
		HobbyDev | 2016 |
		<a href="${app}/swagger-ui.html">API Reference</a>
	</p>
</footer>