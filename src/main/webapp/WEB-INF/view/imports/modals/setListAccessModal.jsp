<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<c:set var="app" value="${pageContext.servletContext.contextPath}" />

<aside class="sl-modal">
	<div class="modal fade" id="confirm-list-public">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
					<h4 class="modal-title">New list public access</h4>
				</div>
				<div class="modal-body">
					Do you with to make this list available for others?
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default sl-list-access-btn" data-public="false">No</button>
					<button type="button" class="btn btn-primary sl-list-access-btn" data-public="true">Yes</button>
				</div>
			</div><!-- /.modal-content -->
		</div><!-- /.modal-dialog -->
	</div><!-- /.modal -->
</aside>