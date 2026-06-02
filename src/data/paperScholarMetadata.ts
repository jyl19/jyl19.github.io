export type PaperScholarMetadata = {
  citationTitle?: string;
  citationAuthors?: string[];
  citationPublicationDate?: string;
  citationJournalTitle?: string;
  citationVolume?: string;
  citationIssue?: string;
  citationFirstPage?: string;
  citationLastPage?: string;
  citationDoi?: string;
  citationTechnicalReportInstitution?: string;
  citationTechnicalReportNumber?: string;
  fullAbstract?: string;
};

const text = (parts: string[]) => parts.join(" ");

export const paperScholarMetadata: Record<string, PaperScholarMetadata> = {
  "can-we-measure-legislative-complexity-with-llms": {
    citationAuthors: ["Bussing, Austin", "Howard, Nicholas O.", "Lerner, Joshua Y."],
    citationPublicationDate: "2025/10/01",
    citationJournalTitle: "Journal of Political Institutions and Political Economy",
    citationVolume: "6",
    citationIssue: "3-4",
    citationFirstPage: "407",
    citationLastPage: "426",
    citationDoi: "10.1561/113.00000130"
  },
  "the-language-of-delegation-an-nlp-analysis-of-congressional-bill-text": {
    citationAuthors: ["Bussing, Austin", "Lerner, Joshua Y.", "Spell, Gregory P."],
    citationPublicationDate: "2025/11",
    citationJournalTitle: "Legislative Studies Quarterly",
    citationVolume: "50",
    citationIssue: "4",
    citationDoi: "10.1111/lsq.70012",
    fullAbstract: text([
      "Delegation of powers from the legislature to the executive branch is a nearly ubiquitous feature of modern lawmaking.",
      "However, much of what scholars know about delegation is gleaned from an exclusive focus on landmark legislation.",
      "We introduce a method to identify delegating language across a larger universe of legislation.",
      "Using an active learning convolutional neural network on bill text, we classify bill sections by their delegation content, applying an iteratively improving coding scheme that enhances existing supervised learning approaches.",
      "We develop a novel dataset that allows us to answer important questions about interbranch relations.",
      "First, we find that legislator ideology, partisanship, and institutional position affect the delegatory content of introduced legislation.",
      "We then explore the role of delegation in the advancement of bills through the legislative process.",
      "Finally, we evaluate the ally principle, finding that variation in delegation is driven by cross-agency differences in ideology and structural independence."
    ])
  },
  "scaling-dialogue-for-democracy-can-automated-deliberation-create-more-deliberative-voters": {
    citationAuthors: [
      "Fishkin, James",
      "Bolotnyy, Valentin",
      "Lerner, Joshua",
      "Siu, Alice",
      "Bradburn, Norman"
    ],
    citationPublicationDate: "2025/06",
    citationJournalTitle: "Perspectives on Politics",
    citationVolume: "23",
    citationIssue: "2",
    citationFirstPage: "434",
    citationLastPage: "451",
    citationDoi: "10.1017/S1537592724001749",
    fullAbstract: text([
      "The theory and practice of what has come to be called \"deliberative democracy\" have been revived for the modern era with a focus on deliberative microcosms selected through random sampling or \"sortition.\"",
      "But might it be possible to spread some of the benefits of deliberation beyond mini-publics to the broader society?",
      "Can technology assist with scaling an organized deliberative process?",
      "In particular, would those who experience such a process become more deliberative voters?",
      "Would their considered judgments from deliberation influence their voting?",
      "We draw on a larger than usual experiment with public deliberation and a one-year follow-up in the mid-term U.S. elections to suggest answers to these questions.",
      "It has implications for whether spreading an organized deliberative process could, in theory, be used to create more deliberative elections."
    ])
  },
  "state-capacity-and-covid-19-responses-comparing-the-u-s-states": {
    citationAuthors: ["Auerbach, Kiran", "Lerner, Joshua Y.", "Ridge, Hannah M."],
    citationPublicationDate: "2024/12",
    citationJournalTitle: "State Politics & Policy Quarterly",
    citationVolume: "24",
    citationIssue: "4",
    citationFirstPage: "349",
    citationLastPage: "369",
    citationDoi: "10.1017/spq.2024.11",
    fullAbstract: text([
      "This article addresses the interstate differences in outcomes from the coronavirus disease COVID-19 pandemic by focusing on state capacity.",
      "State capacity refers to states' ability to create and implement policy.",
      "We posit that states want to limit death and destruction within their borders.",
      "COVID-19 created an instance in which states had a shared, preferred outcome but had very different levels of success.",
      "Using a novel measure of state capacity that allows for subnational comparisons - and is independent of ideological political will - we show that states with greater capacity experienced fewer excess deaths during 2020 and more successfully distributed vaccines in early 2021.",
      "The findings are robust to various measures of partisanship, social capital, geography, and demographics.",
      "Our work bridges US state politics literature and comparative politics literature on state capacity, and it contributes to research on the politics of pandemics."
    ])
  },
  "can-deliberation-have-lasting-effects-reflections-on-america-in-one-room": {
    citationAuthors: [
      "Fishkin, James",
      "Bolotnyy, Valentin",
      "Lerner, Joshua",
      "Siu, Alice",
      "Bradburn, Norman"
    ],
    citationPublicationDate: "2024/11",
    citationJournalTitle: "American Political Science Review",
    citationVolume: "118",
    citationIssue: "4",
    citationFirstPage: "2000",
    citationLastPage: "2020",
    citationDoi: "10.1017/S0003055423001363",
    fullAbstract: text([
      "Does deliberation produce any lasting effects?",
      "\"America in One Room\" was a national field experiment in which more than 500 randomly selected registered voters were brought from all over the country to deliberate on five major issues facing the country.",
      "A pre-post control group was also surveyed on the same questions after the weekend and about a year later.",
      "There were significant differences in voting intention and in actual voting behavior a year later among the deliberators compared to the control group.",
      "This article accounts for these differences by showing how deliberation stimulated a latent variable of political engagement.",
      "If deliberation has lasting effects on political engagement, then it provides a rationale for attempts to scale the deliberative process to much larger numbers.",
      "The article considers methods for doing so in the context of the broader debate about mini-publics, isolated spheres of deliberation situated within a largely non-deliberative society."
    ])
  },
  "leveraging-predictive-modelling-from-multiple-sources-of-big-data-to-improve-sample-efficiency-and-reduce-survey-nonresponse-error": {
    citationAuthors: [
      "Dutwin, David",
      "Coyle, Patrick",
      "Lerner, Joshua",
      "Bilgen, Ipek",
      "English, Ned"
    ],
    citationPublicationDate: "2024/04/05",
    citationJournalTitle: "Journal of Survey Statistics and Methodology",
    citationVolume: "12",
    citationIssue: "2",
    citationFirstPage: "435",
    citationLastPage: "457",
    citationDoi: "10.1093/jssam/smad016",
    fullAbstract: text([
      "Big data has been fruitfully leveraged as a supplement for survey data - and sometimes as its replacement - and in the best of worlds, as a \"force multiplier\" to improve survey analytics and insight.",
      "We detail a use case, the big data classifier (BDC), as a replacement to the more traditional methods of targeting households in survey sampling for given specific household and personal attributes.",
      "Much like geographic targeting and the use of commercial vendor flags, we detail the ability of BDCs to predict the likelihood that any given household is, for example, one that contains a child or someone who is Hispanic.",
      "We specifically build 15 BDCs with the combined data from a large nationally representative probability-based panel and a range of big data from public and private sources, and then assess the effectiveness of these BDCs to successfully predict their range of predicted attributes across three large survey datasets.",
      "For each BDC and each data application, we compare the relative effectiveness of the BDCs against historical sample targeting techniques of geographic clustering and vendor flags.",
      "Overall, BDCs offer a modest improvement in their ability to target subpopulations.",
      "We find classes of predictions that are consistently more effective, and others where the BDCs are on par with vendor flagging, though always superior to geographic clustering.",
      "We present some of the relative strengths and weaknesses of BDCs as a new method to identify and subsequently sample low incidence and other populations."
    ])
  },
  "association-of-past-and-future-paid-medical-malpractice-claims": {
    citationAuthors: ["Hyman, David A.", "Lerner, Joshua", "Magid, David J.", "Black, Bernard"],
    citationPublicationDate: "2023/02/10",
    citationJournalTitle: "JAMA Health Forum",
    citationVolume: "4",
    citationIssue: "2",
    citationFirstPage: "e225436",
    citationDoi: "10.1001/jamahealthforum.2022.5436",
    fullAbstract: text([
      "Importance: Many physicians believe that most medical malpractice claims are random events.",
      "This study assessed the association of prior paid claims, including a single prior claim, with future paid claims; whether public disclosure of prior paid claims affects future paid claims; and whether the association of prior and future paid claims decayed over time.",
      "Objective: To examine the association of 1 or more prior paid medical malpractice claims with future paid claims.",
      "Design, Setting, and Participants: This retrospective case-control study included all 881,876 licensed physicians in the US.",
      "All data analysis took place between July 2018 and January 2023.",
      "Exposure: Paid medical malpractice claims.",
      "Main Outcome and Measures: Association between a prior paid medical malpractice claim and likelihood of a paid claim in a future period, compared with simulated results expected if paid claims are random events.",
      "Using the same outcomes, we also assessed whether public disclosure of paid claims affects future paid claim rates.",
      "Results: Overall, 3.3% of the 841,961 physicians with 0 paid claims in the prior period had 1 or more claims in the future period vs 12.4% of the 34,512 physicians with 1 paid claim in the prior period; 22.4% of the 4,189 physicians with 2 paid claims in the prior period; and 37% of the 1,214 physicians with 3 paid claims in the prior period.",
      "The association between prior claims and future claims was similar for high-medical-malpractice-risk and lower-risk specialties.",
      "The predictive power of a prior paid claim for future claims declined gradually as the time since the prior claim increased, for prior or future periods up to 10 years.",
      "Public disclosure did not affect the association between prior and future paid claims.",
      "Conclusions and Relevance: In this study of paid medical malpractice claims for all US physicians, a single prior paid claim was associated with substantial, long-lived higher future claim risk, independent of whether a physician was practicing in a high- or low-risk specialty, or whether a state publicly disclosed paid claims.",
      "Timely, noncoercive intervention, including education, has the potential to reduce future claims."
    ])
  },
  "inducing-polarization-the-effect-of-congressional-procedure-and-partisan-lawmaking-on-ideal-point-estimation": {
    citationAuthors: ["Bussing, Austin", "Lerner, Joshua Y."],
    citationPublicationDate: "2022/12/01",
    citationJournalTitle: "Journal of Political Institutions and Political Economy",
    citationVolume: "3",
    citationIssue: "3-4",
    citationFirstPage: "449",
    citationLastPage: "479",
    citationDoi: "10.1561/113.00000068",
    fullAbstract: text([
      "How do procedural innovations, such as committee bypass, affect our roll-call-based measurements of individual member ideology - and therefore our measurements of polarization?",
      "Congressional polarization, measured using member ideal points derived from scaling roll call data, has been steadily increasing over the last half-century.",
      "However, changes in legislative procedure that affect the construction of the roll call record have been concurrent with this apparent increase in polarization.",
      "In this paper, we explore the effect of one unorthodox procedure - the use of committee bypass in the House - on the measurement of member ideology and chamber polarization.",
      "We utilize matching to generate balanced subsets containing similar bills that bypassed committee to reach the floor and bills that went through regular order.",
      "With these matched subsets, we estimate the effect of committee bypass on roll call votes and the resulting ideal points and polarization measures.",
      "We find that committee bypass has the effect of dampening, rather than exacerbating polarization."
    ])
  },
  "environmentalism-among-poor-and-rich-countries-using-natural-language-processing-to-handle-perfunctory-support-and-rising-powers": {
    citationAuthors: ["Johnson, Tana", "Lerner, Joshua Y."],
    citationPublicationDate: "2023/01/02",
    citationJournalTitle: "Review of International Political Economy",
    citationVolume: "30",
    citationIssue: "1",
    citationFirstPage: "127",
    citationLastPage: "152",
    citationDoi: "10.1080/09692290.2021.1974523",
    fullAbstract: text([
      "In international politics, is environmental protection largely a \"rich-country\" priority?",
      "We perceive four reasons why, although individual exceptions are possible, the answer would be yes: as a country meets more of its basic economic needs, it can better take on environmental policy's long-term thinking, policy expenses, collective action problems, and quality-of-life issues.",
      "To cut through lip service paid by governments that are not serious about environmental protection, and the fact that the BASIC countries occupy a gray area between rich and poor, we employ computer-assisted textual analyses on all 3,774 paragraphs of statements made by national governments between 1995-2012 in the Committee on Trade and Environment within the World Trade Organization.",
      "Controlling for other factors, we find a general pattern of environmental discussions increasing as development level increases.",
      "This contributes substantively and methodologically to the literatures on the environment/development nexus and rising powers."
    ])
  },
  "the-efficacy-of-measuring-judicial-ideal-points-the-mis-analogy-of-irts": {
    citationAuthors: ["Lerner, Joshua Y.", "McCubbins, Mathew D.", "Renberg, Kristen M."],
    citationPublicationDate: "2021/12",
    citationJournalTitle: "International Review of Law and Economics",
    citationVolume: "68",
    citationFirstPage: "106020",
    citationDoi: "10.1016/j.irle.2021.106020",
    fullAbstract: text([
      "IRT models are among the most commonly used latent trait models in all of political science, particularly in the estimation of ideal points of political actors in institutions.",
      "While widely used, IRT models are often misapplied, and a key element of their estimation, the item parameters, are almost always ignored and discarded.",
      "In this paper, we look into the application of IRT models to the estimation of judicial ideology scores by Martin and Quinn.",
      "Building off of a replication and extension of Martin and Quinn, we demonstrate that the often-ignored item parameters are, in fact, inconsistent with the assumptions of IRTs.",
      "Then, using a post-estimation fix that is designed to ameliorate the problem, we run the model again, generating new scores.",
      "We then compare our new ideal points to the existing ideal points and discuss the implications for both ideal point modeling generally and in judicial politics specifically.",
      "We conclude by replicating a prominent study in judicial politics that demonstrates how inconsistencies in the estimation of IRT models can be consequential and bring up concerns with the implications for what this could mean for the usefulness of scores estimated via IRT models."
    ])
  },
  "physicians-with-multiple-paid-medical-malpractice-claims-are-they-outliers-or-just-unlucky": {
    citationAuthors: ["Black, Bernard", "Hyman, David A.", "Lerner, Joshua Y."],
    citationPublicationDate: "2019/06",
    citationJournalTitle: "International Review of Law and Economics",
    citationVolume: "58",
    citationFirstPage: "146",
    citationLastPage: "157",
    citationDoi: "10.1016/j.irle.2019.03.006",
    fullAbstract: text([
      "We extend Studdert et al.",
      "We examine to what extent a physician who has past paid medical malpractice claims in a defined prior period is more likely to have additional paid claims in a defined future period, relative to a physician with no prior-period claims.",
      "Our simulation implements a null hypothesis that paid claims are random events, with arrival risk depending on state, but not on physician-specific factors such as technical ability, bedside manner, and communication skills.",
      "We show that even a single paid claim in the prior five years nearly quadruples the likelihood of a paid claim in the next five years, and dramatically increases the likelihood of 2+ future paid claims.",
      "More generally, the number of prior paid claims strongly predicts both the likelihood of having future paid claims and the expected number of future claims.",
      "By comparing actual to simulated probabilities, we can predict the likelihood that having a given number of paid claims is attributable to chance.",
      "We find that even for physicians in high-risk specialties in high-risk states, bad luck is highly unlikely to explain three or more claims in 5 years.",
      "Hospitals and state medical boards can use our approach to identify physicians that are likely to benefit from graduated interventions aimed at reducing future claims and patient harm."
    ])
  },
  "getting-the-message-across-evaluating-think-tank-influence-in-congress": {
    citationAuthors: ["Lerner, Joshua Y."],
    citationPublicationDate: "2018/06",
    citationJournalTitle: "Public Choice",
    citationVolume: "175",
    citationIssue: "3-4",
    citationFirstPage: "347",
    citationLastPage: "366",
    citationDoi: "10.1007/s11127-018-0541-5",
    fullAbstract: text([
      "Skirting the lines between academic, promotional and advocacy organizations, think tanks spend an inordinate amount of time and money attempting to influence policy debates, all the while being legally barred from lobbying.",
      "Think tanks, unlike interest groups, do not bring with them electoral constituencies to advocate on behalf of, so the ways in which they persuade legislators to adopt their opinions cannot simply be electoral in nature.",
      "Using a dataset of think tank citations from congressional floor speeches and committee testimony records, I compare the influence of think tanks based on a new measure of their ideologies and, in doing so, show that think tanks engage in strategic ideological positioning to maximize their influence.",
      "An additional hypothesis examined is the relationship between think tank members' previous work experiences in government with the organizations' overall prominence.",
      "By treating think tanks as strategic actors in legislative politics, I show that think tanks' ideological positioning affects directly how members of Congress engage with them, both by citing them in floor speeches and in calling them to testify, with more extreme think tanks being cited more frequently in floor speeches and more moderate think tanks called more often to testify."
    ])
  },
  "does-the-gift-keep-on-giving-house-leadership-pac-donations-before-and-after-majority-status": {
    citationAuthors: ["Aldrich, John H.", "Ballard, Andrew O.", "Lerner, Joshua Y.", "Rohde, David W."],
    citationPublicationDate: "2017/10",
    citationJournalTitle: "The Journal of Politics",
    citationVolume: "79",
    citationIssue: "4",
    citationFirstPage: "1449",
    citationLastPage: "1453",
    citationDoi: "10.1086/692736"
  },
  "setting-the-committee-agenda-measuring-speaker-influence-in-congressional-hearings": {
    citationAuthors: ["Lerner, Joshua Y.", "Shaffer, Robert"],
    citationPublicationDate: "2020/11/09",
    fullAbstract: text([
      "Congressional committees play a pivotal role in the policymaking process, but scholars have paid little attention to the content of committee deliberations.",
      "As a result, we know little about which representatives are most influential in committee hearings or the downstream implications of influential committee participation.",
      "Using a framework proposed by Nguyen et al., we outline a new measure of speaker influence in Congressional hearings, which focuses on speaker ability to control the topic of conversation in hearings.",
      "After validating our measure, we apply it to study patterns of legislative productivity and agenda control.",
      "We find that majority party members, committee chairs, and senior members consistently control the topic of conversation.",
      "We further show that influential participation predicts legislative productivity even after controlling for individual and institutional characteristics, which should encourage scholars to rethink the role of committee hearings in accounts of Congressional agenda-setting."
    ])
  },
  "using-deep-and-active-learning-classifiers-to-identify-congressional-delegation-to-administrative-agencies": {
    citationTitle: "Testing Theories of Interbranch Relations Using a Textual Measure of Congressional Delegation",
    citationAuthors: ["Bussing, Austin", "Lerner, Joshua Y.", "Spell, Gregory P."],
    citationPublicationDate: "2024/11/07",
    citationTechnicalReportNumber: "Working Paper",
    fullAbstract: text([
      "Congressional oversight of the federal bureaucracy remains key to understanding implementation of the law.",
      "Essential to this are theories of how and why Congress delegates powers to administrative agencies.",
      "Using an active learning convolutional neural network on bill text, we classify bill sections by their role in delegating to administrative agencies, applying an iteratively improving coding scheme that enhances existing supervised learning approaches.",
      "We systematically study the statutory scope of administrative agencies and develop a first-of-its-kind dataset to study how executive agency characteristics and changes in presidential administrations affect congressional decisions about delegation.",
      "First, we present descriptive data on the distribution of delegation in introduced bills across cabinet-level agencies.",
      "We then find evidence that variation in delegatory activity is driven by cross-agency differences in ideology and structural independence, even when conditioning on the party of the president.",
      "Our findings establish specific conditions for the operation of the ally principle, reflective of the executive branch's internal complexity."
    ])
  },
  "the-trouble-with-coarsened-exact-matching": {
    citationAuthors: ["Black, Bernard", "Lerner, Joshua Y."],
    citationPublicationDate: "2026/01",
    citationTechnicalReportNumber: "Working Paper",
    fullAbstract: text([
      "Balancing methods, which use matching or reweighting to improve the balance between treated and control units, are central tools for causal inference in the social sciences using cross-sectional observational data.",
      "We focus here on one method which has attained substantial popularity, especially in political science, Coarsened Exact Matching (CEM).",
      "We report evidence that CEM performs worse than a number of other popular balancing methods and explain why it does so.",
      "We report evidence both from simulations, and from replicating four recent studies that use CEM.",
      "Applied to real datasets, CEM drops substantially more observations than other methods; has larger standard errors; and produces average treatment effect estimates far from both other methods and from CEM itself.",
      "In simulations based on the real datasets, CEM is sensitive to adding noninformative covariates or varying which covariates one balances on, and can severely over-reject a true null.",
      "In simulations with generated data and heterogeneous treatment effects, and thus known truth, CEM has substantial bias and is much less precise than other methods.",
      "Our advice: never use CEM as the sole balancing method, and use it, if at all, with sensitivity checks for variable selection, binning choices, and evidence of low treatment heterogeneity.",
      "Those checks are rare in current practice."
    ])
  },
  "measuring-state-capacity-in-the-u-s-states": {
    citationAuthors: ["Auerbach, Kiran", "Lerner, Joshua Y.", "Ridge, Hannah"],
    citationPublicationDate: "2024/12/18",
    citationTechnicalReportNumber: "Working Paper",
    fullAbstract: text([
      "Political scientists recognize the importance of state capacity for issues such as peace, economic development, public health, and regime stability.",
      "Researchers have not agreed on how to measure state capacity.",
      "Crucially, many metrics inadvertently conflate strategic policy choices or policy liberalism with capacity.",
      "Furthermore, common cross-national measures do not work at subnational levels.",
      "American politics literature has additionally mostly overlooked subnational variations in state capacity.",
      "We propose a subnational measure of state capacity that compares all U.S. states from 2000 to 2019.",
      "Using a Bayesian factor analytic model, we model state capacity as a reflective, latent trait.",
      "Our measure draws on shared policy goals to identify states' latent ability to deliver on policy, thus distinguishing the capacity to act from political preferences.",
      "We then run a series of validation tests to establish construct validity and to explore the political forces that have impacted subnational capacity in the American context."
    ])
  },
  "electoral-competition-and-state-capacity-in-the-u-s-states": {
    citationAuthors: ["Auerbach, Kiran", "Lerner, Joshua Y.", "Ridge, Hannah"],
    citationTechnicalReportNumber: "Working Paper",
    fullAbstract: text([
      "For different reasons, both democracies and autocracies have incentives to develop state capacity.",
      "This paper focuses on the impact of democratic political competition on state capacity development in U.S. states.",
      "Parties competing for control of the government develop state capacity in order to maintain power.",
      "Politicians in competitive environments must be able to identify and resolve problems with public service delivery that lead to voter discontent.",
      "To solve these problems effectively, they must build state capacity.",
      "We test this argument by examining the impact of competition for state legislative control on state capacity in the American states.",
      "We employ measures of state-level party competition, democracy, policy liberalism, and a 20-year dataset of state-level state capacity to study this relationship at the subnational level in the United States from 2000-2019.",
      "We find that greater competition leads to greater capacity in states that run free and fair elections."
    ])
  },
  "different-stages-different-constituencies-different-scores-estimating-ideology-throughout-the-campaign-cycle": {
    citationAuthors: ["Bussing, Austin", "Howard, Nicholas", "Lerner, Joshua"],
    citationPublicationDate: "2025/05/05",
    citationTechnicalReportNumber: "Working Paper",
    fullAbstract: text([
      "Campaign finance based ideological scores are widely used in political science to gain leverage on a number of important substantive questions.",
      "In this paper, we investigate the sensitivity of these scores to shifting strategic and competitive contexts associated with the transition from primary election campaigning to general election campaigning.",
      "We use campaign finance data made available by Bonica to create period-specific ideological scores for US House candidates between 2002 and 2018 election cycles.",
      "We find that candidates' ideological scores do change from the primary campaign to the general campaign, and that there are some systematic components to this within-candidate temporal variation.",
      "Specifically, we find that incumbents' scores are more stable than those of challengers or candidates running in open seat races.",
      "Finally, variation in ideological scores from the primary to the general election appears to be a function of the competitive context of the primary election.",
      "As the number of competitors in the primary election increases, so does the magnitude of the shift in the winning candidate's score from the primary to the general."
    ])
  },
  "do-actions-speak-louder-than-words-party-rewards-for-loyal-speech-and-voting-behavior-in-the-u-s-house-of-representatives": {
    citationAuthors: ["Ballard, Andrew O.", "Lerner, Joshua Y.", "Minhas, Shahryar"],
    citationPublicationDate: "2017/10/31",
    citationTechnicalReportNumber: "Working Paper",
    fullAbstract: text([
      "Parties seek to hold their members accountable for their actions, but we know little of how this functions outside of voting behavior.",
      "We create a measure of how well each member's floor speeches fit with those of their party - speech fit - and compare it to a similar measure of voting fit in order to study how parties hold members accountable for both floor speeches and votes.",
      "We show that parties reward members whose speeches fit the goals of their party by providing them more resources.",
      "Interestingly, we find that parties do not reward members based on a similar measure of how well their voting behavior fits with that of the party, computed from DW-NOMINATE.",
      "We discuss implications for Congressional research - ours is the first quantitative study that extends party loyalty to spoken behavior - and text research, where our approach has broad applications."
    ])
  },
  "parties-and-agenda-setting-a-final-passage-approach-to-ideal-point-estimation": {
    citationAuthors: ["Lerner, Joshua Y."],
    citationPublicationDate: "2023/05/10",
    citationTechnicalReportNumber: "Working Paper"
  },
  "a-bayesian-parametric-approach-to-measuring-legislative-productivity": {
    citationAuthors: ["Bussing, Austin", "Lerner, Joshua Y."],
    citationPublicationDate: "2021/04/15",
    citationTechnicalReportNumber: "Working Paper",
    fullAbstract: text([
      "We develop and present a new measure of legislative effectiveness that acknowledges the challenge of assigning scores to individual members who are engaged in a collective legislative process.",
      "To produce our effectiveness scores, we opt for a value-added measurement model that is fit on bill-level data with varying intercepts by sponsor.",
      "We include majority party membership, committee chair status, and other institutional variables in our models to ensure that our estimates of effectiveness are purged of the effects of organizational status, instead of being driven by them.",
      "Our models produce member-level measurements of the predicted marginal change in the probability of bill advancement attributable to the bill's sponsor.",
      "We compare our scores to existing legislative effectiveness scores, and include a discussion of the theoretical and methodological differences between our approach and existing approaches."
    ])
  }
};
