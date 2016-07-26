<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>

<c:set var="app" value="${pageContext.servletContext.contextPath}"></c:set>

<div class="sl-list-wrapper col-sm-6 col-md-4">
	<div id="sl-new-list" class="panel panel-primary">
		<div class="panel-heading">
			New List
		</div>
		<div class="panel-body">
			What is needed?
		</div>
		
		<div class="list-group">
			<div class="list-group-item">
				<div id="sl-new-product-entry" class="input-group input-group-sm">
					<input id="sl-new-product" type="text" class="form-control" placeholder="Product and amount" autofocus="autofocus">
					<span class="input-group-btn">
						<button id="sl-add-product-btn" class="btn btn-default" type="button"><i class="fa fa-plus"></i></button>
					</span>
				</div>
			</div>
		</div>
		<button id="sl-save-list-btn" type="button" class="btn btn-success btn-sm btn-block">Save</button>
	</div>
</div>