<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
	<xsl:template match="/">
		<html xmlns="http://www.w3.org/1999/xhtml">
			<head>
				<title>ExpatBuildr - Intelligence Index</title>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<style type="text/css">
					body {
						font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
						font-size: 14px;
						color: #94a3b8;
						background-color: #020617;
						margin: 0;
						padding: 40px;
					}
					a {
						color: #3b82f6;
						text-decoration: none;
						transition: color 0.2s;
					}
					a:hover {
						color: #60a5fa;
						text-decoration: none;
					}
					.container {
						max-width: 1000px;
						margin: 0 auto;
						background: rgba(15, 23, 42, 0.8);
						backdrop-filter: blur(20px);
						border: 1px solid rgba(255, 255, 255, 0.05);
						border-radius: 32px;
						padding: 48px;
						box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
					}
					.header-wrap {
						border-left: 4px solid #3b82f6;
						padding-left: 24px;
						margin-bottom: 40px;
					}
					h1 {
						color: #f8fafc;
						font-weight: 900;
						letter-spacing: -0.05em;
						margin: 0;
						font-size: 32px;
						text-transform: uppercase;
					}
					p {
						margin-top: 8px;
						color: #64748b;
						font-size: 16px;
						line-height: 1.6;
					}
					table {
						width: 100%;
						border-collapse: collapse;
						margin-top: 32px;
					}
					th {
						text-align: left;
						padding: 16px;
						border-bottom: 1px solid rgba(255, 255, 255, 0.1);
						color: #f8fafc;
						text-transform: uppercase;
						font-size: 11px;
						letter-spacing: 0.2em;
						font-weight: 700;
					}
					td {
						padding: 16px;
						border-bottom: 1px solid rgba(255, 255, 255, 0.03);
						vertical-align: middle;
					}
					tr:hover td {
						background: rgba(255, 255, 255, 0.02);
					}
					.badge {
						display: inline-block;
						padding: 2px 8px;
						border-radius: 4px;
						font-size: 10px;
						font-weight: 700;
						text-transform: uppercase;
						background: rgba(59, 130, 246, 0.1);
						color: #3b82f6;
						border: 1px solid rgba(59, 130, 246, 0.2);
					}
					.footer {
						margin-top: 48px;
						padding-top: 24px;
						border-top: 1px solid rgba(255, 255, 255, 0.05);
						font-size: 10px;
						text-transform: uppercase;
						letter-spacing: 0.2em;
						color: #475569;
						display: flex;
						justify-content: space-between;
					}
				</style>
			</head>
			<body>
				<div class="container">
					<div class="header-wrap">
						<h1>Knowledge Architecture Index</h1>
						<p>Institutional-grade siloed sitemap for ExpatBuildr v1.2. Optimized for sub-hour search engine visibility.</p>
					</div>
					
					<table>
						<thead>
							<tr>
								<th>URL Node</th>
								<xsl:if test="sitemap:urlset">
									<th>Freq</th>
									<th>Priority</th>
								</xsl:if>
								<th>Last Modified</th>
							</tr>
						</thead>
						<tbody>
							<xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
								<tr>
									<td>
										<a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
									</td>
									<td><xsl:value-of select="sitemap:lastmod"/></td>
								</tr>
							</xsl:for-each>
							<xsl:for-each select="sitemap:urlset/sitemap:url">
								<tr>
									<td>
										<a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
									</td>
									<xsl:if test="sitemap:changefreq">
										<td><span class="badge"><xsl:value-of select="sitemap:changefreq"/></span></td>
									</xsl:if>
									<xsl:if test="sitemap:priority">
										<td><xsl:value-of select="sitemap:priority"/></td>
									</xsl:if>
									<td><xsl:value-of select="sitemap:lastmod"/></td>
								</tr>
							</xsl:for-each>
						</tbody>
					</table>

					<div class="footer">
						<span>EXPATBUILDR © 2026 | STRIKE READY</span>
						<span>NODE_STATUS: NOMINAL</span>
					</div>
				</div>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
