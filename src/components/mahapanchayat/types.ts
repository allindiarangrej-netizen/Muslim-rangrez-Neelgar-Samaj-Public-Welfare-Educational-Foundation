import React from 'react';

export type Language = 'en' | 'hi' | 'ur';

export interface Pillar {
  num: string;
  icon: React.ReactNode;
  titleEn: string;
  titleHi: string;
  titleUr: string;
  descEn: string;
  descHi: string;
  descUr: string;
  badge: string;
}

export interface Tab {
  id: string;
  labelEn: string;
  labelHi: string;
  labelUr: string;
  icon: React.ReactNode;
}

export interface VerifiedMember {
  fullName: string;
  memberId: string;
  district: string;
  state: string;
  verificationHash: string;
}

export interface Survey {
  id: string;
  titleEn: string;
  titleHi: string;
  titleUr: string;
  descriptionEn: string;
  descriptionHi: string;
  descriptionUr: string;
  categoryEn: string;
  categoryHi: string;
  categoryUr: string;
  totalVotes: number;
  endDate: string;
  status: 'active' | 'ended';
}

export type WorkflowStage = 
  | 'submitted' 
  | 'committee_review' 
  | 'published_for_support' 
  | 'support_collection' 
  | 'eligible_for_voting' 
  | 'mahapanchayat_discussion' 
  | 'approved' 
  | 'rejected' 
  | 'deferred';

export interface SupportingDocument {
  name: string;
  size: string;
  url: string;
  type?: 'pdf' | 'doc' | 'image' | 'video';
}

export interface Proposal {
  id: string;
  docketNo: string;
  titleEn: string;
  titleHi: string;
  titleUr: string;
  proposerEn: string;
  proposerHi: string;
  proposerUr: string;
  districtEn: string;
  districtHi: string;
  districtUr: string;
  categoryEn: string;
  categoryHi: string;
  categoryUr: string;
  descriptionEn: string;
  descriptionHi: string;
  descriptionUr: string;
  benefitsEn?: string;
  benefitsHi?: string;
  benefitsUr?: string;
  supportingDocs?: SupportingDocument[];
  images?: string[];
  videoUrl?: string;
  upvotes: number;
  minSupportThreshold: number; // e.g. 100 or 200
  commentsCount: number;
  workflowStage: WorkflowStage;
  status: 'under_review' | 'shortlisted_for_summit' | 'approved_for_ballot' | 'deferred' | 'approved' | 'rejected';
  dateSubmitted: string;
}

export interface CommentSuggestion {
  id: string;
  surveyOrProposalId: string;
  authorName: string;
  authorDistrict: string;
  isAnonymous: boolean;
  type: 'suggestion' | 'comment' | 'improvement_idea' | 'feedback';
  content: string;
  date: string;
  upvotes: number;
  status: 'pending_moderation' | 'approved' | 'rejected';
}

export type ResolutionStatus = 'pending' | 'under_review' | 'approved' | 'rejected' | 'implemented' | 'archived';

export interface HistoricalTimelineEvent {
  year: string;
  date: string;
  eventEn: string;
  eventHi: string;
  eventUr: string;
  status: string;
}

export interface Resolution {
  id: string;
  resolutionNo: string;
  year: string;
  datePassed: string;
  effectiveDate: string;
  summitNameEn: string;
  summitNameHi: string;
  summitNameUr: string;
  titleEn: string;
  titleHi: string;
  titleUr: string;
  categoryEn: string;
  categoryHi: string;
  categoryUr: string;
  officialTextEn: string;
  officialTextHi: string;
  officialTextUr: string;
  agendaEn: string;
  agendaHi: string;
  agendaUr: string;
  
  // Voting & Resolution Management Metrics
  totalVotes: number;
  eligibleVoters: number;
  participationRate: number;
  approvalRate: number;
  rejectionRate: number;
  abstainedRate: number;
  committeeRecommendationEn: string;
  committeeRecommendationHi: string;
  committeeRecommendationUr: string;
  finalDecisionEn: string;
  finalDecisionHi: string;
  finalDecisionUr: string;
  
  // Implementation details
  implementationCommitteeEn: string;
  implementationCommitteeHi: string;
  implementationCommitteeUr: string;
  progressStatusEn: string;
  progressStatusHi: string;
  progressStatusUr: string;
  implementationScore: number; // completion percentage
  status: ResolutionStatus;
  keyMilestoneEn: string;
  keyMilestoneHi: string;
  keyMilestoneUr: string;
  gazetteRef: string;
  
  // Archive documents & media
  supportingDocs: SupportingDocument[];
  photos: string[];
  videos: string[];
  pdfGazetteUrl: string;
  meetingMinutesEn: string;
  meetingMinutesHi: string;
  meetingMinutesUr: string;
  annualReviewEn: string;
  annualReviewHi: string;
  annualReviewUr: string;
  notifications: string[];
  historicalTimeline: HistoricalTimelineEvent[];
}

export interface AIAnalyticsData {
  surveyId: string;
  districtOpinion: { district: string; yesPct: number; noPct: number; neutralPct: number; turnout: number }[];
  ageGroupAnalysis: { group: string; percentage: number; topConcern: string }[];
  educationTrends: { educationLevel: string; participationRate: number; supportRate: number }[];
  occupationTrends: { occupation: string; participationRate: number; supportRate: number }[];
  demographicParticipation: {
    womenParticipationPct: number;
    youthParticipationPct: number;
    seniorCitizenParticipationPct: number;
  };
  mostRequestedReforms: { topic: string; requestsCount: number; growthRate: string }[];
  frequentlySuggestedTopics: { tag: string; mentions: number; category: string }[];
  heatMapsData: { region: string; intensity: 'High' | 'Medium' | 'Low'; consensusScore: number }[];
  trendAnalysis: {
    annualComparison: { year: string; averageParticipation: number; reformAdoptionRate: number }[];
    fiveYearComparison: { metric: string; val2022: string; val2024: string; val2026: string; trend: string }[];
  };
}
