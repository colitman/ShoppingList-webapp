<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>

<c:set var="app" value="${pageContext.servletContext.contextPath}" />

<div data-name="added-product" class="sl-snippet list-group-item">
	<div class="input-group input-group-sm sl-added-product-entry">
		<input type="text" class="form-control sl-added-product" placeholder="Product and amount">
		<span class="input-group-btn">
			<button class="btn btn-danger sl-remove-product-btn" type="button"><i class="fa fa-remove"></i></button>
		</span>
	</div>
</div>