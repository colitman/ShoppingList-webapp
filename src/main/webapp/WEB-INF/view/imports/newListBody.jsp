<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<c:set value="${pageContext.servletContext.contextPath}" var="app"></c:set>

<div class="list-group">
	<div class="list-group-item">
		<div class="input-group input-group-sm">
			<input type="text" class="form-control" placeholder="Product and amount">
			<span class="input-group-btn">
				<button class="btn btn-default" type="button"><i class="fa fa-plus"></i></button>
			</span>
		</div>
	</div>
</div>
<button type="button" class="btn btn-success btn-sm btn-block save-new-list-btn">Save</button>
