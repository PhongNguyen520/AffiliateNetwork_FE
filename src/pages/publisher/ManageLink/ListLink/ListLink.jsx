"use client"

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import classNames from "classnames/bind"
import { requestsPrivate } from "../../../../utils/requests"
import { Copy, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import styles from "./ListLink.module.scss"

const cx = classNames.bind(styles)

const LIST_LINK_URL = "affiliatelink/getlinks"
const CAMPAIGN_DETAIL_URL = "campaign"

function ListLink() {
  const location = useLocation()
  const [campaignData, setCampaignData] = useState(null)
  const [linksData, setLinksData] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [copySuccess, setCopySuccess] = useState(null)
  const { campaign } = location.state || {}

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await requestsPrivate.get(`${CAMPAIGN_DETAIL_URL}/${campaign.id}`)
        if (!response.data) {
          throw new Error("Failed to fetch campaign data")
        }
        setCampaignData(response.data.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchCampaign()
  }, [campaign.id])

  useEffect(() => {
    const fetchLinks = async () => {
      setLoading(true)
      try {
        const response = await requestsPrivate.get(`${LIST_LINK_URL}?id=${campaign.id}`)
        if (!response.data) {
          throw new Error("Failed to fetch links data")
        }
        console.log(response.data.data);
        
        setLinksData(response.data.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchLinks()
  }, [campaign.id, currentPage])

  const handleCopyLink = (link) => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopySuccess(link)
        setTimeout(() => setCopySuccess(null), 2000)
      })
      .catch(() => {
        setError("Failed to copy link")
      })
  }

  const handlePreviousPage = () => {
    if (linksData?.hasPreviousPage) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  const handleNextPage = () => {
    if (linksData?.hasNextPage) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const truncateUrl = (url, maxLength = 40) => {
    return url.length > maxLength ? url.substring(0, maxLength) + "..." : url
  }

  if (loading && !linksData) {
    return (
      <div className={cx("loading-container")}>
        <div className={cx("loading-spinner")}></div>
        <p>Loading campaign links...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className={cx("error-container")}>
        <p>Error: {error}</p>
        <button className={cx("retry-button")} onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className={cx("list-link-container")}>
      {campaignData && (
        <div className={cx('campaign-details-section')}>
          <div className={cx('campaign-banner')}>
            {campaignData.image && (
              <div className={cx('campaign-image-container')}>
                <img src={campaignData.image || "/placeholder.svg"} alt={campaignData.campaignName} className={cx('campaign-image')} />
              </div>
            )}
            <div className={cx('campaign-header-content')}>
              <div className={cx('campaign-title-row')}>
                <h1>{campaignData.campaignName}</h1>
                <span className={cx('campaign-status', campaignData.status.toLowerCase())}>
                  {campaignData.status}
                </span>
              </div>
              <p className={cx('campaign-description')}>{campaignData.description || 'No description available'}</p>
              {campaignData.websiteLink && (
                <a 
                  href={campaignData.websiteLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={cx('campaign-website-link')}
                >
                  <ExternalLink size={16} />
                  Visit Campaign Website
                </a>
              )}
            </div>
          </div>
          
          <div className={cx('campaign-info-grid')}>
            <div className={cx('campaign-info-card')}>
              <h3>Campaign Details</h3>
              <div className={cx('info-row')}>
                <span className={cx('info-label')}>Category:</span>
                <span className={cx('info-value')}>{campaignData.categoryName}</span>
              </div>
              <div className={cx('info-row')}>
                <span className={cx('info-label')}>Target Audience:</span>
                <span className={cx('info-value')}>{campaignData.targetCustomer || 'Not specified'}</span>
              </div>
              <div className={cx('info-row')}>
                <span className={cx('info-label')}>Region:</span>
                <span className={cx('info-value')}>{campaignData.zone || 'Global'}</span>
              </div>
              <div className={cx('info-row')}>
                <span className={cx('info-label')}>Duration:</span>
                <span className={cx('info-value')}>
                  {new Date(campaignData.startDate).toLocaleDateString()} - {new Date(campaignData.endDate).toLocaleDateString()}
                </span>
              </div>
            </div>
            
            <div className={cx('campaign-info-card')}>
              <h3>Performance</h3>
              <div className={cx('info-row')}>
                <span className={cx('info-label')}>Enrollments:</span>
                <span className={cx('info-value', 'highlight')}>{campaignData.enrollCount}</span>
              </div>
              <div className={cx('info-row')}>
                <span className={cx('info-label')}>Conversion Rate:</span>
                <span className={cx('info-value', 'highlight')}>{campaignData.conversionRate}%</span>
              </div>
              <div className={cx('info-row')}>
                <span className={cx('info-label')}>Payout Model:</span>
                <span className={cx('info-value')}>
                  {campaignData.payoutModelName && campaignData.payoutModelName.join(', ')}
                </span>
              </div>
            </div>
            
            <div className={cx('campaign-info-card', 'full-width')}>
              <h3>Campaign Information</h3>
              {campaignData.introduction && (
                <div className={cx('info-block')}>
                  <h4>Introduction</h4>
                  <p>{campaignData.introduction}</p>
                </div>
              )}
              {campaignData.policy && (
                <div className={cx('info-block')}>
                  <h4>Policy</h4>
                  <p>{campaignData.policy}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className={cx("links-section")}>
        <h2>Campaign Links</h2>
        <p className={cx("links-count")}>
          Total: <span>{linksData?.totalItems || 0}</span> links
        </p>

        {linksData?.items?.length > 0 ? (
          <>
            <div className={cx("links-grid")}>
              {linksData.items.map((link, index) => (
                <div key={index} className={cx("link-card")}>
                  <div className={cx("link-card-header")}>
                    <span className={cx("link-status", link.status.toLowerCase())}>{link.status}</span>
                    <div className={cx("link-actions")}>
                      <button
                        className={cx("copy-button")}
                        onClick={() => handleCopyLink(link.shortenUrl)}
                        title="Copy shortened URL"
                      >
                        <Copy size={16} />
                        {copySuccess === link.shortenUrl && <span className={cx("copy-tooltip")}>Copied!</span>}
                      </button>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cx("visit-button")}
                        title="Visit original URL"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  <div className={cx("link-details")}>
                    <div className={cx("link-row")}>
                      <span className={cx("link-label")}>Original URL:</span>
                      <span className={cx("link-value", "original-url")} title={link.url}>
                        {truncateUrl(link.url)}
                      </span>
                    </div>

                    <div className={cx("link-row")}>
                      <span className={cx("link-label")}>Shortened URL:</span>
                      <span className={cx("link-value", "shorten-url")}>{link.shortenUrl}</span>
                    </div>

                    {link.utmSource && (
                      <div className={cx("link-row")}>
                        <span className={cx("link-label")}>UTM Source:</span>
                        <span className={cx("link-value")}>{link.utmSource}</span>
                      </div>
                    )}

                    {link.utmMedium && (
                      <div className={cx("link-row")}>
                        <span className={cx("link-label")}>UTM Medium:</span>
                        <span className={cx("link-value")}>{link.utmMedium}</span>
                      </div>
                    )}

                    {link.utmCampaign && (
                      <div className={cx("link-row")}>
                        <span className={cx("link-label")}>UTM Campaign:</span>
                        <span className={cx("link-value")}>{link.utmCampaign}</span>
                      </div>
                    )}

                    {link.utmContent && (
                      <div className={cx("link-row")}>
                        <span className={cx("link-label")}>UTM Content:</span>
                        <span className={cx("link-value")}>{link.utmContent}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={cx("pagination")}>
              <button
                className={cx("pagination-button", { disabled: !linksData.hasPreviousPage })}
                onClick={handlePreviousPage}
                disabled={!linksData.hasPreviousPage}
              >
                <ChevronLeft size={20} />
                Previous
              </button>

              <div className={cx("pagination-info")}>
                Page {linksData.currentPage} of {linksData.totalPages}
              </div>

              <button
                className={cx("pagination-button", { disabled: !linksData.hasNextPage })}
                onClick={handleNextPage}
                disabled={!linksData.hasNextPage}
              >
                Next
                <ChevronRight size={20} />
              </button>
            </div>
          </>
        ) : (
          <div className={cx("no-links")}>
            <p>No links found for this campaign.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ListLink
