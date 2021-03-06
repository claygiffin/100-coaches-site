const uniq = require('lodash.uniq')
const fetch = require('node-fetch')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { SiteClient } = require('datocms-client')
const client = new SiteClient(`${process.env.DATO_WRITE_API_KEY}`)

const data = [
  {
    coachName: 'Frances Hesselbein',
    jobTitle: 'Chairman at Leader to Leader Institute',
    tags: ['Author', 'Iconic Leader', 'Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/frances-hesselbein.jpg',
    bio:
      'One of the most highly respected experts in the field of contemporary leadership development, Frances Hesselbein is the namesake for The Frances Hesselbein Leadership Forum in the Graduate School of Public and International Affairs (GSPIA) at the University of Pittsburgh, and the Editor-in-Chief of the award-winning quarterly journal, Leader to Leader. The Frances Hesselbein Leadership Forum is a continuation of the organization founded as The Peter F. Drucker Foundation for Nonprofit Management.\n\nMrs. Hesselbein was awarded the Presidential Medal of Freedom, the United States of America’s highest civilian honor, by President Clinton in 1998 for her leadership as CEO of Girl Scouts of the U.S.A. from 1976–1990, as well as her service as “a pioneer for women, volunteerism, diversity and opportunity.” Her contributions were also recognized by the first President Bush, who appointed her to two Presidential Commissions on National and Community Service.\n\nFrom 2009–2011, Mrs. Hesselbein served as the Class of 1951 Chair for the Study of Leadership at the United States Military Academy at West Point, in the Department of Behavioral Sciences and Leadership. She was the first woman, and the first non-graduate to serve in this chair.\n\nAlso in 2009, the University of Pittsburgh introduced The Hesselbein Global Academy for Student Leadership and Civic Engagement. The Academy’s aim is to produce experienced and ethical leaders who will address critical national and international issues and advance positive social and economic initiatives throughout the world.\n\nMrs. Hesselbein serves on many nonprofit and private sector corporate boards, including Mutual of America Life Insurance Company, the Bright China Social Fund, California Institute of Advanced Management, and Teachers College, Columbia University Presidents Advisory Council. She served as the Chairman of the National Board of Directors for Volunteers of America from 2002–2006. In December 2013 Volunteers of America honored Mrs. Hesselbein with the Maud Ballington Booth Legacy Award for a lifetime of pioneering social change.\n\nFor her exceptional work and her continued commitment to developing leaders of all ages, as demonstrated in her work with the Hesselbein Institute, Mrs. Hesselbein has been awarded Lifetime Achievement Awards from ATHENA International, Best Practice Institute, the Girl Scout Council of Greater New York, and the International Leadership Association. Mrs. Hesselbein has been inducted into the Enterprising Women Hall of Fame and is a Distinguished Daughter of Pennsylvania. Fortune Magazine named Hesselbein one of the World’s 50 Greatest Leaders in 2015.\n\nMrs. Hesselbein was named a Senior Leader at the United States Military Academy’s 2008 National Conference on Ethics in America. In 2007, Mrs. Hesselbein was awarded the John F. Kennedy Memorial Fellowship by Fulbright New Zealand and was the first recipient of the Dwight D. Eisenhower National Security Award in 2003.\n\nMrs. Hesselbein is the recipient of twenty-one honorary doctoral degrees. She is the coeditor of twenty-seven books in twenty-nine languages. Mrs. Hesselbein has traveled to sixty-eight countries representing the United States. She is the author of Hesselbein on Leadership, My Life in Leadership and More Hesselbein on Leadership; and most recently, the enhanced edition of Peter Drucker’s The Five Most Important Questions: Enduring Wisdom for Today’s Leaders.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'frances-hesselbein-8b707512',
      twitter: 'ToServeIsToLive',
      website: '',
    },
  },
  {
    coachName: 'Alan Mulally',
    jobTitle: 'CEO Retired at Ford',
    tags: ['Corporate Executive', 'Iconic Leader', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/alan_mulally.jpg',
    bio:
      'Alan Mulally served as president and chief executive officer of The Ford Motor Company and as a member of Ford’s board of directors from September 2006 – June 2014.\n\nIn 2016, Mulally was an inductee as a Pathfinder in the Museum of Flight and the Automotive Hall of Fame.\n\nMulally was named to Google’s board of directors in July 2014, the board of directors of Carbon3D in May 2015, and serves on the board of The Mayo Clinic.\n\nMulally led Ford’s transformation into one of the world’s leading automobile companies and the #1 automobile brand in the United States. He guided Ford in working together on a compelling vision, comprehensive strategy and implementation of the One Ford plan to deliver profitable growth for all of the company’s stakeholders.\n\nPrior to joining Ford, Mulally served as executive vice president of the Boeing Company, president and CEO of Boeing Commercial Airlines, and president of Boeing information, Space and Defense Systems.\n\nThroughout his career, Mulally has been recognized for his contributions, industry leadership, and service, including being named #3 on Fortune’s “World’s Greatest Leaders,” one of the 30 “World’s Best CEO’s” by Barrons’ magazine, one of “The World’s Most Influential People” by Time magazine, and “Chief Executive of the Year” by Chief Executive magazine. He was also honored with the American Society for Quality’s medal for excellence in executive leadership, the Automotive Executive of the Year, and the Thomas Edison Achievement Award.\n\nMulally serves on President Obama’s United States Export Council. He served as co-chairman of the Washington Competitiveness Council, and has served on the advisory boards of the National Aeronautics and Space Administration, the University of Washington, the University of Kansas, the Massachusetts Institute of Technology and the United States Air Force Scientific Advisory Board. He is a member of the United States National Academy of Engineering and a fellow of England’s Royal Academy of Engineering.\n\nMulally has also served as President of the American Institute of Aeronautics and Astronautics and as Chairman of the Board of Governors of the Aerospace Industries Association.\n\nMulally holds Bachelor and Master of Science degrees in aeronautical and astronautical engineering from the University of Kansas, and a Masters in Management from the Massachusetts Institute of Technology as an Alfred P. Sloan Fellow.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'alan-mulally-29017a130',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Jim Yong Kim',
    jobTitle: 'Vice Chairman and Partner at Global Infrastructure Partners',
    tags: ['Corporate Executive', 'Iconic Leader', 'Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/jimkim.jpeg',
    bio:
      'Jim Yong Kim (@JimYongKim), M.D., Ph.D., is Vice Chairman and Partner at Global Infrastructure Partners, a fund that invests in infrastructure projects across several sectors around the world. \n\nFrom July 2012 to February 2019, Kim served as the 12th President of the World Bank Group. Soon after he assumed that position, the organization established two goals to guide its work: to end extreme poverty by 2030; and to boost shared prosperity, focusing on the bottom 40 percent of the population in developing countries. \n\nKim’s career has revolved around health, education, and improving the lives of the poor. Before joining the World Bank Group, Kim, a physician and anthropologist, served as the President of Dartmouth College and held professorships at Harvard Medical School and the Harvard School of Public Health. From 2003 to 2005, as director of the World Health Organization’s HIV/AIDS department, he led the “3 by 5” initiative, the first-ever global goal for AIDS treatment, which greatly to expand access to antiretroviral medication in developing countries. In 1987, Kim co- founded Partners In Health, a non-profit medical organization that now works in poor communities on four continents.\n\nKim has received a MacArthur “Genius” Fellowship, was recognized as one of America’s “25 Best Leaders” by U.S. News & World Report, and was named one of TIME magazine’s “100 Most Influential People in the World.”',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'jimyongkim',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Martin Lindstrom',
    jobTitle: 'Branding Expert & Consultant',
    tags: ['Author', 'Consultant', 'Entrepreneur', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Martin-lindsrom.jpg',
    bio:
      'MARTIN LINDSTROM is the founder and chairman of Lindstrom Company – the world’s leading brand & culture transformation group. TIME Magazine has selected Martin as one of the “World’s 100 Most Influential People”, and ranks #36 among the world’s top business thinkers according to Thinkers50. Since 2013 and over four consecutive years 30,000 marketers have selected him as the world’s #1 branding expert.\r\n\n\rMartin is the author of seven bestselling books including his latest New York Times, Wall Street Journal and USA Today bestsellers: Small Data – The Tiny Clues That Uncover Huge Trends (St. Martins) and Buyology – Truth and Lies About Why We Buy (Crown)\r\n\n\rLindstrom Company is today responsible for brand and culture transformations of numerous Fortune 500 companies, including the LEGO Company, Standard Chartered Bank, SWISS International Air Lines, PepsiCo, Red Bull, Estee Lauder Companies, Cargill, Nestlé International, The Walt Disney Company, Swiss Post, the Dorchester Collection, 3G group (Burger King International), Carrefour, Lowes, Majid Al Futtaim and GlaxoSmithKline.\r\n\n\rOver the years Martin and his team has developed an unorthodox way of doing what every company says it wants to do: understand its customers deepest desires and turn them into breakthrough products, brands, services or retail experiences. He is by Forbes recognized as one of the world’s leading brand and culture experts, having pioneered the introduction of brands on the Internet (1994), the innovation of Clicks & Mortar (1997), drawing parallels between religion and how brands are to be built in the future (2000), using our five senses in branding (2004), coining the term: NeuroMarketing (2007), exploring the next generation of word-of-mouth communication (2011) and just recently introduced the term “Small Data” (2016) representing the counter balance to Big Data.\r\n\n\rDue to his work, Lindstrom often features in the Wall Street Journal, the New York Times, Bloomberg BusinessWeek, the Washington Post, USA Today, The Economist, Harvard Business Review, The Independent, The Guardian, and Der Spiegel. He regularly appears on ABC, CNN, CBS, FOX, and the BBC.\r\n\n\rSmall Data was voted one of the top business books of 2016 and 2017 by Fortune, INC magazine and Forbes a must read and awarded the #1 Business book of 2017 by Business + Strategy. Buyology was voted “pick of the year” by USA Today, and it appeared on ten of the Top 10 bestseller lists in the U.S. and worldwide. His book BRANDsense was acclaimed by the Wall Street Journal as “…one of the five best marketing books ever published.” His six books on branding have been translated into more than 50 languages and published in more than 70 countries worldwide.\r\n\n\rLindstrom is a regular contributor to Fast Company, TIME Magazine, and NBC’s TODAY Show with his popular “Main Street Makeover” TV series.\r\n\n\rVisit MartinLindstrom.com for more…',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'lindstromcompany',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Mark C. Thompson',
    jobTitle: 'AmMgmtAssn #1 CEO Coach: Lyft, Pinterest, World Bank, Virgin. NYTimes Bestselling Author',
    tags: ['Author', 'Consultant', 'Executive Coach', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Thompson_Mark.jpg',
    bio:
      'Mark is a four-time CEO who today focuses exclusively on coaching global C-level executives, many of whom are CEOs or potential succession candidates. The American Management Association and Dr. Marshall Goldsmith called him the World’s #1 CEO Coach, with more than 70 engagements with boards that are leading vast organizational transformations. He specializes in high-profile roles and leaders, from Sir Richard Branson @Virgin and Logan Green@Lyft to Evan Sharp @ Pinterest, Steve Jobs, and Tony Robbins. \n\nMark was CEO of Schwab.com (a division of Charles Schwab); CEO of Esurance (sold to Allstate), and Chairman and CEO of Rioport (which popularized the MP3 player before Apple iTunes), Chairman of Interwoven (sold to Hewlett Packard) and Chairman of Integration Semiconductor (sold to SiliconLabs). He was a co-founder of the Stanford University Realtime Venture Design Lab, along with Sir Richard Branson’s Entrepreneurship Centres and the JFK Institute for Entrepreneurial Leadership. Previously, he was Charles ‘Chuck’ Schwab’s Chief of Staff, Chief Communications Officer and Executive Producer of Schwab.com. As a senior vice president at Schwab, he also created and held the first integrated Chief Customer Experience Officer role in a global company, which is now a world standard. \n\nMark was honored on Forbes “Midas” list of investors as a founding board member of Esurance, Integration, Interwoven, and early investor in Netflix, Facebook, Lyft and Pinterest. He co-chairs the Institute of Coaching Leadership Forum with Prof. Carol Kauffman at Harvard McLean School of Medicine. He holds MA and MBA degrees and was a visiting scholar at Stanford University, World Economic Forum, John F. Kennedy University and the World Business Forum',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'successmatters',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Whitney Johnson',
    jobTitle: 'Innovation and disruption theorist, speaker, author, executive coach',
    tags: ['Author', 'Consultant', 'Entrepreneur', 'Executive Coach', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/whitney-johnson.jpg',
    bio:
      "Whitney Johnson is one of the 50 leading business thinkers in the world (Thinkers50) and an expert on helping high growth organizations develop high growth individuals. As a former award-winning stock analyst on Wall Street and co-founder of the Disruptive Innovation Fund with Clayton Christensen, Whitney Johnson understands how stocks and people gain and maintain momentum. She has codified her frameworks for developing high growth individuals––the S Curve of Learning and Personal Disruption frameworks in the critically-acclaimed book _Disrupt Yourself_, and the award-winning _Build an “A” Team_ (Harvard Business Press, 2018), and is a frequent lecturer for Harvard Business Publishing’s Corporate Learning. In 2019, she was ranked #3 on the Global Gurus' Top 30 Organizational Culture Professionals. In 2017, she was selected from more than 16,000 candidates as a “Top 15 Coach” by Dr. Marshall Goldsmith. She is a LinkedIn Influencer with more than 1.6 million followers and was selected as a Top Voice of 2018. Whitney hosts the weekly Disrupt Yourself Podcast at whitneyjohnson.com.\n\n### Coaching Experience\n\n* Coach C-Suite executives across a variety of industries and companies, from start-ups to P&Ls of $10bn+\n* Coach for Harvard Business School Executive Education\n* Top 100 Best Coaches Award – World HRD Congress (India)\n* Harvard Medical School Institute of Coaching – Member\n* Master Certified Coach – Marshall Goldsmith’s Stakeholder-Centered Coaching",
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'whitneyjohnson',
      twitter: 'johnsonwhitney',
      website: '',
    },
  },
  {
    coachName: 'Peter Bregman',
    jobTitle: 'Author, Speaker, CEO at Bregman Partners, Inc.',
    tags: ['Author', 'Consultant', 'Executive Coach', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/peter-bregman.jpg',
    bio:
      'Recognized as the #1 executive coach by Leading Global Coaches, Peter Bregman is CEO of Bregman Partners, an executive coaching company that helps successful people become exceptional leaders and stellar human beings. \n\n\n\nSelected as a top 30 thought leader by Thinkers 50 Radar, Peter is the award-winning, best selling author or contributor of 16 books, including, most recently, Leading with Emotional Courage: How to Have Hard Conversations, Create Accountability, and Inspire Action on Your Most Important Work. His book, 18 Minutes: Find Your Focus, Master Distraction, and Get the Right Things Done, was a Wall Street Journal  bestseller, winner of the Gold medal from the Axiom Business Book awards, named the best business book of the year by NPR, and selected by Publisher’s Weekly and the New York Post as a top ten business book. He is also the author of Four Seconds: All the Time You Need to Replace Counter-Productive Habits with Ones That Really Work, a  New York Post  "Top Pick for Your Career" in 2015, and Point B: A Short Guide to Leading a Big Change.\n\n\n\nPeter is the host of the Bregman Leadership Podcast, which offers insightful conversations with industry thought leaders on how to become more powerful, courageous leaders. He is also a regular contributor to the Harvard Business Review, and his articles and commentary appear frequently in Bloomberg BusinessWeek, Fast Company, Psychology Today, Forbes, The Financial Times , PBS, ABC, CNN, NPR, and FOX Business News.\n\nPeter created and leads the Bregman Leadership Intensive, a four day program that transforms the way people lead by increasing their confidence in themselves, their ability to connect with others, their commitment to what’s most important, and their emotional courage.\n\nPeter designed the Bregman Partners proven, proprietary Big Arrow process to align people to work together to accomplish an organization’s most important work. The Bregman Arrow Measurement tool (BAM)©tm quantifies the leadership and organizational gaps that block successful execution.\n\nHe has implemented his proprietary solutions with CEOs and senior leaders in many of the world’s premier organizations, including Allianz, American Express, CBS Corporation, Citibank, Pearson, Goldman Sachs, Morgan Stanley, Deutsche Bank, JPMorgan Chase, FEI, GE Capital, Merck, Clear Channel, Nike, UNICEF, among others.\n\nPeter began his career teaching leadership on wilderness and mountaineering expeditions and earned his B.A. from Princeton University and his M.B.A. from Columbia University. He can be reached at pbregman@bregmanpartners.com.',
    links: {
      facebook: 'PeterBregmanAdvisor',
      instagram: '',
      linkedin: 'peterbregman',
      twitter: 'peterbregman',
      website: 'https://bregmanpartners.com/articles/',
    },
  },
  {
    coachName: 'Tasha Eurich',
    jobTitle: 'Organizational Psychologist',
    tags: ['Author', 'Consultant', 'Executive Coach', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/tasha-eurich.jpg',
    bio:
      'Tasha Eurich is an organizational psychologist, researcher, and New York Times best-selling author. As Principal of the Eurich Group, she has built a reputation as a fresh, modern voice in the business world by pairing her scientific grounding in human behavior with a practical approach to improvement. Over her 15-plus-year career, she’s helped thousands of professionals—from Fortune 500 executives to early stage entrepreneurs—improve their self-awareness and success.\r\n\n\rWith a PhD in Industrial-Organizational Psychology and BAs in Theater and Psychology, Dr. Eurich has contributed to The Guardian, Entrepreneur, The Huffington Post, TED.com and CNBC.com, and has been featured in outlets like Business Insider, Fortune, Forbes, The New York Times, Fast Company, and New York Magazine. She has been named a “Top 100 Thought Leader” by Trust Across America, a “Leader to Watch” by the American Management Association, and one of Denver Business Journal’s “40 Under 40.” Her TEDxMileHigh talk has been viewed more than one million times.\r\n\n\rDr. Eurich’s first book, Bankable Leadership, debuted on the New York Times best-seller list. Her latest book, INSIGHT, delves into the connection between our self-awareness—what she calls the meta-skill of the twenty-first century—and performance and success, both in and out of the workplace. Hailed as a “bold, exhilarating take on self-improvement” by Success Magazine and a “fascinating read” by The Guardian, INSIGHT was recently named an Editor’s Choice by 800-CEO-READ.',
    links: {
      facebook: 'TashaEurich',
      instagram: '',
      linkedin: 'tashaeurich',
      twitter: 'tashaeurich',
      website: 'https://www.psychologytoday.com/us/experts/tasha-eurich-phd',
    },
  },
  {
    coachName: 'Connie Dieken',
    jobTitle: 'Influence 360º Founder, Strategic Advisor, Best-Selling Author, Hall of Fame Broadcaster ',
    tags: ['Executive Coach', 'Consultant', 'Speaker', 'Author', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/connie-dieken-headshot-connie-dieken-1-.jpg',
    bio:
      "Connie Dieken is the founder of Influence360˚, a strategic advisory firm on leadership influence to C-suite executives of the world's biggest brands.\n\nHer research and strategies help executives on five continents grow their organizations by influencing positive, lasting outcomes for their biggest initiatives. \n\nHer clients lead some the world’s best-known companies including Coca-Cola, HP, Nestlé, BNP Paribas, The Cleveland Clinic, Zain Corporation and P&G.\n\nConnie joined Marshall Goldsmith's 100 Coaches in 2019. She's also been named:\n\no\tTop 10 Executive Coach by the Global Gurus organization \n\no\tTop 10 Female Business Owner by the National Association of Female Business Owners. \n\nConnie's unique blend of meticulous research, strategic thinking, and compelling delivery has also led to her induction into three Halls of Fame:\n\no\tThe Speakers Hall of Fame® \n\no\tThe Radio/Television Broadcasters Hall of Fame® \n\no\tThe Million Dollar Consulting Hall of Fame® \n\nConnie built her unique skillset during twenty years as a television journalist for NBC and ABC stations in the U.S. Her thoughtful reporting was honored with five Emmy Awards® and two Telly Awards®.  \n\nIn 2000, she left broadcasting to begin a research study called Influence 360º.  It evolved into the first and only validated metric of leadership influence habits and has helped more than 100,000 leaders around the globe influence positive, lasting results. \n\nConnie is also a best-selling author. Her two books, Talk Less, Say More and Become the Real Deal were #1 best-sellers on both Amazon and Audible.  The books, published by Wiley, condense Connie’s distinctive knowledge and global coaching experiences into fast-paced leadership guides.\n\nA Hall of Fame keynote speaker, Connie delivers interactive, powerful keynote speeches on leadership influence at major conferences around the globe to audiences in the thousands. \n\nHer thought leadership has been featured in The Wall Street Journal, Investor’s Business Daily, CNBC, The Kuwait Times and other leading business publications around the world.",
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'conniedieken',
      twitter: '',
      website: 'https://www.conniedieken.com',
    },
  },
  {
    coachName: 'Bernard Banks',
    jobTitle: 'Associate Dean for Leadership Development & Clinical Prof. of Management',
    tags: ['Executive Coach', 'Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/bernard-banks.jpg',
    bio:
      'Bernard (Bernie) Banks is a noted expert on the subjects of leadership and organizational change. Currently, he is the Associate Dean for Leadership Development and a Clinical Professor of Management at Northwestern University’s Kellogg School of Management. As an Associate Dean, Bernie possesses responsibility for leader development integration across the school’s global portfolio of programs.\r\n\n\rBernie retired from the Army as a Brigadier General in 2016 after having successfully led West Point’s Department of Behavioral Sciences & Leadership from 2012-2016. In addition to having studied leadership extensively, he has led multiple military units ranging in size from 10 to 500 people. In 1995, Bernie was selected from over 40,000 officers to receive the Army’s top award for entry-level managers (General Douglas MacArthur Leadership Award). In 2006, the Apache Helicopter unit he was leading in South Korea was designated as the top Apache Helicopter unit globally in the U.S. Army’s annual best aviation unit competition.\r\n\n\rA West Point graduate, Bernie is broadly educated. He holds graduates degrees from Northwestern, Columbia, and Harvard Universities. Additionally, he earned his Ph.D. in social-organizational psychology from Columbia University. Bernie’s work has been published in a variety of outlets (e.g., Harvard Business Review, Military Psychology, New York Times). Furthermore, he has worked extensively with organizations across all sectors concerning their leader development efforts (e.g., Procter and Gamble, Mercedes Benz, General Electric, IBM, 7-Eleven, The US Forest Service, International Chiefs of Police).\r\n\n\rAn active member of several civic and professional organizations (e.g., The Chicago Club, Harvard Club of NYC, Community Solutions of NYC, USO of Illinois, West Point Society of Chicago), Bernie is deeply invested in his community.\r\n\n\rAreas of Expertise\r\n\n\rLeader Development\r\n\nOrganizational Change\r\n\nOrganizational Culture',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'bernard-banks-ph-d-4458003',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Erica Dhawan',
    jobTitle: "World's Foremost Expert on Connectional Intelligence",
    tags: ['Author', 'Consultant', 'Entrepreneur', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/erica_dhawan.jpg',
    bio:
      'Erica Dhawan is the world’s leading authority on Connectional Intelligence and the Founder & CEO of Cotential.\r\n\n\rThrough speaking, training and consulting, she teaches business leaders innovative strategies that increase value for clients, deliver results and ensure competitiveness. \r\n\n\rShe is the co-author of the bestselling book Get Big Things Done: The Power of Connectional Intelligence. Erica was named by Thinkers50 as “The Oprah of Management Ideas” and featured as one of the emerging management thinkers most likely to shape the future of business. She hosts the award winning podcast Masters of Leadership.\r\n\n\rErica speaks on global stages ranging from the World Economic Forum at Davos to companies such as Fedex, Pepsico, and McGraw Hill Financial. Erica writes for Harvard Business Review, Forbes, Fast Company and the Huffington Post.\r\n\n\rErica also serves as a board member to Lufthansa Innovation Hub. Previously, she worked at Lehman Brothers and Barclays Capital. She has a MPA from Harvard University, a MBA from MIT Sloan, and a BS in Economics from The Wharton School. Learn more at ericadhawan.com and cotentialgroup.com',
    links: {
      facebook: 'ericadhawan',
      instagram: '',
      linkedin: 'ericadhawan',
      twitter: 'edhawan',
      website: 'https://ericadhawan.com/blog',
    },
  },
  {
    coachName: 'Carol Kauffman',
    jobTitle: 'President: Coaching Psych; Harvard Faculty, Founder, Institute of Coaching',
    tags: ['Executive Coach', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/carol-homepage-cropped350x.jpg',
    bio:
      'Carol Kauffman Founder of the Institute of Coaching and on the faculty of Harvard Medical School.\r\n\n\rCarol is a leadership coach with over 20 years experience helping leaders raise the bar on their performance and managing their success. She is most interested in high stakes coaching where managing leadership impact is crucial and it is necessary to intervene quickly. She has focused on these issues with young high potential leaders to the CEO/Chairs of the Board at Fortune 50 companies.\r\n\n\rShe is a leader herself: An Assistant Professor at Harvard Medical School she founded the Institute of Coaching, a community of 18,000, launched the Coaching in Leadership and Healthcare Conference at Harvard, The Institute of Coaching Leadership Forum and has chaired numerous conference. In addition she was Founding Editor in Chief of the first journal in Coaching with a major publishing house. In 2009 her work and entrepreneurial spirit were commemorated with a $2,000,000 gift to begin the Institute of Coaching.\r\n\n\rDr. Kauffman has extensive coaching experience with over 40,000 hours of client contact. She works with multi-national organizations either in the C-Suite or in tandem with large-scale leadership development programs. A sampling of recent clients includes: Ahold, Astra Zeneca, BCG, BUPA, Bombardier, BCG, Harvard Medical School, Hospital Corporation of America, Lloyds, Linklaters, McKinsey, Norton Rose, Owens-Illinois, Tubelines, State Street Bank, Unilever, Vanderbilt University and Wellington.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'carol-kauffman-phd-pcc-b07ab01',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'David B. Peterson, PHD',
    jobTitle: 'Director, Center of Expertise, Leadership Development & Executive Coaching',
    tags: ['Author', 'Consultant', 'Corporate Executive', 'Executive Coach', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/david-peterson.jpg',
    bio:
      "As Director of Google’s Center of Expertise, David is responsible for innovative, high-impact approaches to develop Google leaders to meet current and emerging challenges. In addition, he coaches senior leaders, leads strategy for Google’s executive coaching programs, and supports other leadership and organization development initiatives, including leading a team on agile organization design for Google’s future needs.\n\nDavid is honored to be one of the MG100 coaches -- where he was named the World's #1 Corporate Coach --- and is proud to serve as senior advisor on two other ventures:\n\n• Institute for Contemporary Leadership, focused on accelerating the development of high-potential leaders and equipping them to deal with disruption, complexity, and transformational change. The Institute provides top leaders with a high-trust peer network, disruptive development experiences, and a personal development advisor/coach to guide their journey. contemporaryleadership.com\n\n• 7 Paths Forward challenges highly-experienced executive coaches to raise their game and prepare for the changing competitive landscape by developing new mindsets and advanced coaching capabilities, as well as participating in catalytic experiences with a dynamic learning community of great coaches and professional colleagues. 7pathsforward.com\n\nBefore joining Google in 2011, David served as leader of world-wide coaching services for PDI Ninth House (now Korn Ferry). In addition to coaching top leaders at Salesforce, Sandisk, Microsoft, Hewlett-Packard, Target, Wal-Mart, Shell, Genentech, American Express, Mayo Clinic, Harvard, and Stanford University, he provided consultation and thought leadership on how to design and manage organizational coaching programs, how to develop high potential leaders and critical talent, and how to accelerate learning and leadership development at all levels.\n\nDavid has published dozens of articles and chapters on coaching, is co-author of Development FIRST:  Strategies for Self-Development and Leader as Coach, with over a million copies in print, and co-editor of the Handbook of the Psychology of Coaching and Mentoring.\n\nHe earned his PhD in Counseling and Industrial/Organizational Psychology at the University of Minnesota. He is a Fellow of the American Psychological Association, the Society of Consulting Psychology, the Society for Industrial and Organizational Psychology (SIOP), and the Harvard Institute of Coaching. His awards include the RHR International Award for Excellence in Consultation (Society of Consulting Psychology), the Outstanding Achievement Award (California Psychological Association), and the Vision of Excellence Award (Harvard Institute of Coaching).\n\nVikki Brock’s history of coaching (2008, 2012) names David as one of the primary influencers in the field, both for his early influence on the emergence of executive coaching and for continuing to shape the field “on the cutting edge of the profession, doing and saying surprising and thought-provoking things.”\n\nDavid lives in San Francisco with his wife, Alexis Shoemate, and two adorable Tibetan Terriers named Pinot and Cab.",
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'david-b-peterson',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Aicha Evans',
    jobTitle: 'Senior Vice President and Chief Strategy Officer, Intel Corporation',
    tags: ['Corporate Executive', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/aicha-evans.jpg',
    bio:
      'Aicha S. Evans is corporate vice president and general manager of the Communications and Devices Group at Intel Corporation. She is responsible for driving wireless engineering for multi-comm products and Intel platforms, including modems, RF, Wi-Fi, GPS, Bluetooth, NFC, FM, LTE, WLAN/WWAN as well as emerging wireless technologies to lead this industry going forward.\r\n\n\rPreviously Evans was the general manager of the Wireless Platform Research and Development Group where managed the engineering, software, hardware, strategic planning, and product test teams responsible for providing wireless connectivity ingredients and solutions for all Intel platforms.\r\n\n\rEvans joined Intel in 2006 as a software integration and test manager. She held a number of management positions responsible for Intel’s wireless efforts including software engineering and support for customers deploying WiMAX networks in multiple geographies. Additionally, she worked in Israel managing WiFi engineering and product lines. Prior to Intel, Evans spent 10 years in various engineering management positions at Rockwell Semiconductors, Conexant and Skyworks.\r\n\n\rEvans received a bachelor’s degree in computer engineering from The George Washington University in 1996.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'aicha-evans-4365731',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Jim Citrin',
    jobTitle: 'Leader, CEO Practice at Spencer Stuart and Author',
    tags: ['Author', 'Corporate Executive', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/jim-citrin.jpg',
    bio:
      'Jim Citrin is one of the world’s most prolific executive search consultants and experts on leadership, governance, and career success. In his 25 years at Spencer Stuart, where he leads the firm’s CEO Practice, he has completed more than 700 searches for CEOs, Board Directors and other top executives for some of the world’s leading corporations and not-for-profit institutions.\n\nA LinkedIn Influencer with one million followers, Jim is a best-selling author of 7 books, including You’re in Charge, Now What? and The Career Playbook.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'james-citrin-57a06758',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Laine Joelson Cohen',
    jobTitle: 'Citi Leadership & Executive Development , Executive Coach, and Speaker',
    tags: ['Corporate Executive', 'Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/laine-cohen-gmstudios.jpg',
    bio:
      'Director\r\n\nNorth America Regional Lead – Citi Learning – Leadership, Executive and Professional Development/Global Business Relationship Management \r\n\n\rCoaching and developing teams has been a thread throughout Laine’s career. As she worked in business roles and later within the Compensation areas of Human Resources, it was her work leading teams that has been the cornerstone of her career. After spending 20 years working in these diverse roles, Laine decided to parlay her passion for coaching and developing people into her formal role. In her current role since 2012, Laine is the Director of Leadership, Executive and Professional Development for North America at Citi where she also has responsibility for Global Business Relationship Management.\r\n\n\rWith Citi since 1991, Laine has seen the organization change dramatically. Laine has enjoyed supporting Citi’s senior leaders by serving as a Coach and Faculty for Citi’s Senior Leadership Program.\r\n\n\rLaine has also taught on an adjunct basis at NYU’s School of Professional Studies.\r\n\n\rLaine holds an M.B.A. in Human Resources Management from the Zicklin School of Business – Baruch College and a B.A. in Psychology from the University of Connecticut.\r\n\n\rlinkedin.com/in/lainejoelsoncohen',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'lainejoelsoncohen',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Scott Osman',
    jobTitle: 'CEO Marshall Goldsmith 100 Coaches | Brand Strategist and Executive Coach',
    tags: ['Entrepreneur', 'Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/scott-osman-headshot-looser_edited-1.jpg',
    bio:
      'Scott Osman is a thought leader in the area of purpose strategy. Scott is rare in his combination of multi-disciplinary talents that span a broad spectrum from creative to management to and vision. His passion is for developing talent and then applying talent and best practices for managing and participating in high performing teams. Scott specializes in multi-disciplinary strategic services including innovation, purpose, brand and business strategy. He understands how to reposition, grow, transform and evolve companies and their products while managing high performing clients. Previously Scott served as the key innovator and global director of the Purpose Strategy practice at Landor Associates.\r\n\n\rAbout Good Omen\r\n\nGood Omen provides a unique purpose led approach through leadership, strategy, design, and program management to expand the capabilities of agencies and internal corporate teams. We work independently, collaboratively, and as knowledge leaders. Work includes: the rebranding of a major sports league, a major religious movement, and entry into the Affordable Care Act, and a new technology that brings the enlivens communities through the power of pictures.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'scottosman',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Alisa Cohn',
    jobTitle: 'NYC Executive Coach for CEOs & Founders',
    tags: ['Executive Coach', 'Entrepreneur', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/alisa-cohn.jpg',
    bio:
      'Alisa is an executive coach who works with senior executives and high potential leaders to help them create positive permanent shifts in their leadership impact and the results they achieve.  In addition to executives in large established companies, she works with Founder/CEOs and executive teams of start-ups to help them improve their leadership, scale the company, and support them in learning key leadership and communication skills. She also leads workshops and speaks on a variety of topics. Her areas of expertise include: Executive Presence; Power, Influence & Charisma; Decision-making; and Corporate Politics.\r\n\nPrior to starting her coaching practice, Alisa was CFO of Clarivergent Technology Partners and head of strategic partnerships at Corporate Alumni. She was a strategy consultant at PricewaterhouseCoopers and The Monitor Group. A CPA, Alisa earned her MBA from Cornell University where she was awarded the Fried Fellowship for Leadership and Academic Excellence. Alisa is known for her high energy and enthusiasm along with her practical, results-oriented approach. She was selected as one of the Top 10 Coaches in Boston by Women’s Business, which called her “absolutely brilliant” and “a super hero.”\r\n\nAlisa is a member of the Cornell Entrepreneurship Advisory Board. She is on the faculty of the “Runway” program at Cornell Tech – an accelerator which focuses on helping post-docs commercialize their research and build companies. She is an angel investor in and advisor to a number of start-ups both in the US and developing countries.\r\n\n\rAlisa is a regular invited lecturer at Harvard University and Cornell University as well as in the Naval War College’s accelerated leadership program. She is a coach for the Linkage Global Institute for Leadership Development and for political leaders from areas of conflict at the Center for Inclusive Security at Harvard University. Alisa a columnist and “Expert” for Worth Magazine and was featured in the book “Reinventing You,” by Dorie Clark. Alisa has been quoted in publications such as the New York Times, the Wall St. Journal, and various other regional and national business publications.\r\n\n\rAlisa has a passionate interest in health, wellness and fitness and has a particular love for running and cycling, especially when combined with scenic travel. She is a fearless cook of ethnic food. She loves all sorts of culture, especially music and theater, and will occasionally burst into song without warning.\r\n\n\rLocated in New York City, Alisa’s current and former clients include: Venmo, Foursquare, Timehop, Bloomberg LLP, Dell, Hitachi Data Systems, Tory Burch, Pfizer, Johnson & Johnson, Novartis, Taro Pharmaceuticals, Association of British Pharmaceuticals Industry (ABPI) , Fidelity, Standard Chartered Bank, Citibank, UBS, SilverLake, KPMG, PricewaterhouseCoopers, Sony Music, Harvard University, and The New York Times Company.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'alisacohn',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Alexander Osterwalder',
    jobTitle: 'Co-Founder Strategyzer',
    tags: ['Author', 'Consultant', 'Entrepreneur', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/alexander-osterwalder.jpg',
    bio:
      'Alexander Osterwalder is an entrepreneur, speaker and business model innovator. He is co-founder of Strategyzer, a leading SaaS company that helps organizations develop new growth engines, better value propositions und powerful business models via online applications and facilitated online courses.\n\nIn 2015 Alex won the strategy award by Thinkers50, called the “Oscars of Management Thinking” by the FT, and ranks #15 among the leading business thinkers of the world. In 2013 he won the inaugural Innovation Luminary Award by the European Union.\n\nAlex is lead author of Business Model Generation and Value Proposition Design, which sold over a million copies in 37 languages. USA Today named Business Model Generation among the 12 best business books of all times. The German edition was named Management Book of the Year 2011. Fast Company Magazine named it one of the Best Books for Business Owners in 2010.\n\nHe crafted the first book with his long-time co-author and former PhD supervisor Professor Yves Pigneur and 470 collaborators from 45 countries. It was initially self-published in 2009 with an innovative crowd-funded business model.\n\nAlex invented the Business Model Canvas, a strategic management tool to visualize, challenge and (re-) invent business models. Leading organizations and start-ups around the world use it. He is a frequent keynote speaker at Fortune 500 companies and has held guest lectures in top universities around the world, including Wharton, Stanford, Berkeley, IESE, MIT, KAUST and IMD.\n\nPrevious start-ups include netfinance.ch and Arvetica. Alexander holds a PhD from HEC Lausanne, Switzerland, and he is a founding member of The Constellation, a global not-for-profit organization aiming to make HIV/AIDS and Malaria history.',
    links: {
      facebook: 'osterwalder',
      instagram: '',
      linkedin: 'osterwalder',
      twitter: 'AlexOsterwalder',
      website: 'https://blog.strategyzer.com/',
    },
  },
  {
    coachName: 'Bonita Thompson',
    jobTitle: 'NYTBestselling Author/Coach, Harvard Club NYC’s GC4W Business Leader of Year',
    tags: ['Author', 'Consultant', 'Executive Coach', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/bonita-thompson-headshot.jpg',
    bio:
      'Bonita Thompson is the creator of the “What’s Next?” Game, a coaching process that helps players walk through what is important to them and then apply those key motivators toward what’s coming up next. The “What’s Next?” Game helps players make their values, their priorities in a fun playful way.\r\n\n\rBonita has been a leading innovator in HR for over 25 years for several major international corporations including: Bank of America, Genentech, Levi Strauss, Pacific Telesis, Varian and Catellus.\r\n\n\rShe is a New York Times bestselling author of ADMIRED: 21 Ways to Double Your Value. She lectures globally and has taught leadership and management courses at John F. Kennedy University and The Institute of Coaching.\r\n\n\rBonita earned an MBA at the University of California Berkeley’s Haas School of Business, and a BA in Industrial Psychology from San Jose State University. She also holds an Honorary PhD from Mount Mary College.\r\n\n\rBonita is passionate about education and making learning useful and engaging. She is co-creator of Storybook Math, an innovative way of teaching foundational math making it playful and fun. She has also created curriculum aimed at making learning engaging called Create, Build, Solve.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'bonitathompson',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Michael Bungay Stanier',
    jobTitle: 'Founder of Box of Crayons, author of The Coaching Habit',
    tags: ['Author', 'Consultant', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Michael Bungay Stanier.jpg',
    bio:
      'Michael is the founder and CEO of Box of Crayons, a company that helps organizations do less good work and more great work. \n\nHe’s the author of several books, including_ The Coaching Habit_ and _Do More Great Work._ Michael has written for or been featured in numerous publications including _Business Insider, Fast Company, Forbes, The Globe & Mail _and_ The Huffington Post._\n\nAt Box of Crayons, Michael and his team of facilitators teach 10-minute coaching so busy managers build stronger teams and get better results. Clients come from all sectors and include Box, the United Nations, the University Health Network and USAA. A sought-after speaker, Michael regularly speaks to businesses and organizations and has delivered keynotes at Leadership, HR and Learning & Development, conferences around the world, including ATD, SHRM, IPL, HRPA and the Conference Board of Canada.\n\nBalancing out these moments of success, Michael was banned from his high school graduation for “the balloon incident,” was sued by one of his Law School lecturers for defamation, and his first published piece of writing was a Mills & Boone short story called “The Male Delivery.”\n\nMichael left Australia 25 years ago to be a Rhodes Scholar at Oxford University, where his only significant achievement was falling in love with a Canadian, which is why he now lives in Toronto, having spent time in London and Boston. He was the first Canadian Coach of the Year.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'michaelbungaystanier',
      twitter: 'boxofcrayons',
      website: 'https://boxofcrayons.com/blog/',
    },
  },
  {
    coachName: 'Ayse Birsel',
    jobTitle: 'Co-founder of Birsel + Seck, author of Design the Life You Love',
    tags: ['Author', 'Consultant', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/ayse-birsel.jpg',
    bio:
      'Ayse Birsel has been designing award-winning products for over 20 years. She is the co-founder of Birsel + Seck, an innovative design studio in New York that partners with leading brands and Fortune 500 companies, including Colgate Palmolive, Converse, GE, Herman Miller, Nissan, Staples, Target, Tiffany & Co, Toyota, on design, design thinking, strategy and innovation projects.\r\n\n\rCalled affectionately by the press the “Queen of Toilets” and “Queen Bee” for her bathroom designs and office systems respectively, she brings new solutions to old problems by thinking differently, using her user-centered, humanistic design approach and her process, Deconstruction:ReconstructionTM.\r\n\n\rAyse is also known for her acclaimed workshops, Design the Life You Love, the foundation of her book, published by Ten Speed Press, an imprint of Penguin Random House, in October 2015.\r\n\n\rAyse is the recipient of numerous design awards including the IDEA Gold Award, ID Magazine Award, the Young Designer Award from the Brooklyn Museum of Art, and the Athena Award for Excellence in Furniture Design from Rhode Island School of Design. She is a speaker at international conferences—notably the Aspen Design Conference, IDSA and AIGA Conferences, the Indaba Conference, Design Management Institute, 99U, The Feast and Fast Company Innovation Conferences.\r\n\n\rShe is a Fulbright Scholar with a master’s degree in Industrial Design from Pratt Institute and is a graduate of Middle East Technical University in Ankara, Turkey. Her work can be found in the permanent collections of the Museum of Modern Art, Cooper Hewitt National Design Museum and Philadelphia Museum of Art. Ayse teaches at Products of Design Department at SVA (School of Visual Arts) and is on the board of IDSA (Industrial Designers Society of America). She lives in New York, with her husband and partner Bibi Seck and their 3 kids.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'aysebirsel',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Dorie Clark',
    jobTitle: 'Keynote Speaker & Marketing Strategy Consultant',
    tags: ['Author', 'Consultant', 'Entrepreneur', 'Executive Coach', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/dorie-clark.jpg',
    bio:
      'Dorie Clark is a marketing strategy consultant, professional speaker, and frequent contributor to the Harvard Business Review and Entrepreneur magazine. She is the author of Entrepreneurial You from Harvard Business Review Press. Her previous books include Reinventing You and Stand Out, which was named the #1 Leadership Book of 2015 by Inc. magazine, one of the Top 10 Business Books of the Year by Forbes, and was a Washington Post bestseller.\n\nThe New York Times has described her as an “expert at self-reinvention and helping others make changes in their lives,” and she has been recognized as a “branding expert” by the Associated Press, Inc., and Fortune magazine.\n\nShe consults and speaks for a diverse range of clients, including Google, the World Bank, the Bill and Melinda Gates Foundation, the Ford Foundation, Yale University, the Mount Sinai Medical Center, and the U.S. National Park Service.\n\nClark, a former presidential campaign spokeswoman, is an adjunct professor of business administration at Duke University’s Fuqua School of Business. She has taught marketing and communications at Tufts University, Suffolk University, Emerson College, HEC-Paris, IE Business School in Madrid, Babson College, the University of North Carolina’s Kenan-Flagler School of Business, Smith College Executive Education, and Nazarbayev University in Kazakhstan. She was named one of Inc. magazine’s “100 Great Leadership Speakers for Your Next Conference,” and recognized in Forbes as one of “25 Professional Networking Experts to Watch in 2015.” \n\nShe has guest lectured at universities including Harvard Business School, the Harvard Kennedy School, Stanford University’s Graduate School of Business, the University of Pennsylvania’s Wharton School, the MIT Sloan School of Management, the University of California-Berkeley’s Haas School of Business, Georgetown, NYU, and the University of Michigan. Her work has been published in The Harvard Business Review Guide to Getting the Right Job, The Harvard Business Review Guide to Networking, The Harvard Business Review Guide to Office Politics, and The Harvard Business Review Guide to Dealing with Conflict. She is quoted frequently in the worldwide media, including NPR, the BBC, and MSNBC.\n\nA former New England Press Association award-winning journalist, Clark is the director of the environmental documentary film The Work of 1000. At age 14, Clark entered Mary Baldwin College’s Program for the Exceptionally Gifted. At 18, she graduated Phi Beta Kappa from Smith College, and two years later received a Master of Theological Studies from Harvard Divinity School. She is also a producer of a multiple Grammy-winning jazz album. You can learn more at dorieclark.com and download her free 42-page Stand Out Self-Assessment Workbook.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'theresultscoach',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Antonio Nieto-Rodriguez',
    jobTitle: 'World Champion Projects and Project Management',
    tags: [
      'Author',
      'Consultant',
      'Corporate Executive',
      'Executive Coach',
      'Non-Profit',
      'Speaker',
      'Thinker',
    ],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/antonio-nieto-rodriguez.jpg',
    bio:
      'Antonio Nieto-Rodriguez (antonionietorodriguez.com) is a thought leader, author, practitioner, and professor. He is the creator of concepts such as the Hierarchy of Purpose, featured by Harvard Business Review, the Project Economy or the Project Manifesto; which argues that projects are the lingua franca of the business and personal worlds from the C-suite to managing your career or relationships. His research and global impact in modern management been recognized by Thinkers50 with the prestigious award "Ideas into Practice" and Global Gurus. \n\nAntonio was the Chairman of the Project Management Institute in 2016, where he co-founded the Brightline Initiative.  Antonio has held leadership positions in PricewaterhouseCoopers, BNP Paribas Fortis, and GlaxoSmithKline. He is the co-founder of the Strategy Implementation Institute.\n\nAntonio is the author of “The Project Revolution” (LID, 2019). "Lead Successful Projects" (Penguin, 2019) and “The Focused Organization” (Taylor & Francis, 2014). A pioneer and leading authority in teaching strategy execution and project management to senior executives at top Business Schools; currently visiting professor at Duke CE, Instituto de Empresa, Solvay, Vlerick, Ecole des Ponts and Skolkovo. Antonio is also a much-in-demand speaker at events worldwide. Over the past 15 years, he has presented at more than 160 conferences around the world: European Business Summit, Gartner, TEDx.  \n\nBorn in Madrid, Spain, and educated in Germany, Mexico, Italy, and the United States, Antonio is an Economist with an MBA from London Business School and Insead\'s International Director Program. He is fluent in five languages.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'antonionietorodriguez',
      twitter: 'ANietoRodriguez',
      website: 'https://www.antonionietorodriguez.com',
    },
  },
  {
    coachName: 'Rita McGrath',
    jobTitle: 'Globally recognized expert on strategy & innovation',
    tags: ['Author', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/rita_mcgrath_headshot.jpg',
    bio:
      'Rita Gunther McGrath is a globally recognized expert on strategy, innovation, and growth with an emphasis on corporate entrepreneurship. Her work and ideas help CEOs and senior executives chart a pathway to success in today’s rapidly changing and volatile environments. McGrath is highly valued for her rare ability to connect research to business problems and in 2016 received the “Theory to Practice” award at the [Vienna Strategy Forum](http://www.strategieforum.at/).\n\nRecognized as one of the top 10 management thinkers by global management award [Thinkers50](http://thinkers50.com/t50-ranking/2015-2/) in 2017, 2015 and 2013, McGrath also received the award for outstanding achievement in the Strategy category. She is a highly sought after speaker at corporate events, such as the Yale CEO Summit, the Innosight CEO Summit and at the World Economic Forum meeting in Davos. McGrath has also been inducted into the Strategic Management Society “Fellows” in recognition of her impact on the field.\n\nMcGrath is often cited in the press, including the Wall Street Journal, New York Times, Washington Post, Financial Times, and NPR’s Marketplace. She maintains an active social media presence, and has been rated one of the 25 smartest women to follow on Twitter by [Fast Company Magazine](http://www.fastcompany.com/3016225/dialed/25-of-the-smartest-women-on-twitter). She consistently appears in rankings of the top business school professors to follow on Twitter. McGrath was voted HR Magazine’s Most Influential International Thinker, writes regularly for Fortune magazine’s [online edition](http://www.fastcompany.com/3016225/dialed/25-of-the-smartest-women-on-twitter), is a regular contributor to the Wall Street Journal’s [The Experts](http://blogs.wsj.com/experts/tag/rita-gunther-mcgrath/) column and blogs regularly at HBR.org.\n\nMcGrath is one of the most widely published authors in the [Harvard Business Review](https://hbr.org/search?term=rita%2520mcgrath), including the best-selling “Discovery Driven Planning” (1995), which was recognized as an early articulation of today’s “lean” startup philosophy and has been praised by Clayton Christensen as ‘one of the most important ideas in management – ever.’ Her related book, Discovery Driven Growth: A Breakthrough Process to Reduce Risk and Seize Opportunity (2009) is a deep dive into how to put the technique to work. Her next project, tentatively entitled Discovery Driven Advantage examines how companies can build true proficiency in innovation.\n\nMcGrath’s best-selling book, The End of Competitive Advantage: How to Keep Your Strategy Moving as Fast as Your Business, was recognized by Strategy+Business as the #1 business book of the year. She has co-authored two more books: MarketBusters: 40 Strategic Moves that Drive Exceptional Business Growth (2005); and The Entrepreneurial Mindset (2000), all published by Harvard Business Review Press.MarketBusters has been translated into ten languages and was named one of the [best business books](http://www.strategy-business.com/article/00223a) of 2005 by Strategy+Business.\n\nRita joined the faculty of Columbia Business School in 1993. Prior to life in academia, she was an IT director, worked in the political arena, and founded two startups. She received her Ph.D. from the Wharton School, University of Pennsylvania and has degrees with honors from Barnard College and the Columbia School of International and Public Affairs. She is married and is proud to be the mother of two delightful grownups.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'ritamcgrath',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Asheesh Advani',
    jobTitle: 'CEO at JA Worldwide',
    tags: ['Corporate Executive', 'Non-Profit', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/asheesh-advani.jpg',
    bio:
      'Asheesh is the President and CEO of Junior Achievement (JA) Worldwide, one of the largest NGOs in the world dedicated to educating young people about financial literacy, entrepreneurship and workforce readiness. With offices in over 100 countries, JA serves more than 10 million young people annually with programs designed to activate youth for the future of jobs.\r\n\nAsheesh is an accomplished technology entrepreneur, having served as CEO of Covestor (acquired by Interactive Brokers) and CircleLending (acquired by Virgin Group).  He began his career as a consultant at the Monitor Group followed by the World Bank.\r\n\n\rAsheesh is actively involved in the World Economic Forum as a member of the Civil Service Advisory Council and the Global Agenda Council for the Future of Education, Gender, and Work. Now living in Boston, he is a JA ​alumnus first exposed to entrepreneurship as a teenager participating in the JA Company Program. ​ His experiences as an entrepreneur and leader were chronicled in case studies at Babson College and at Harvard Business School. Asheesh is a graduate of the Wharton School and Oxford University, where he was a Commonwealth Scholar.\r\n\n\rAsheesh aspires to bring human capital development and management coaching to JA’s leadership around the world. His approach to enabling leaders to realize their full potential is to focus on being empathetic to their unique challenges in each local and regional market. JA is now the largest distribution network to reach young people in the world, so the opportunity to improve the effectiveness of the organization is substantial and impactful.\r\n\n\rAsheesh is a sought-after speaker for leadership conferences, technology conferences, and in the media. He has served as a co-chair of the World Economic Forum in Latin America, a speaker at numerous conferences including the WEF Annual Meeting in Davos and several technology gatherings in the US, India, Europe, and Africa, and a commentator in the media including the Wall Street Journal, New York Times, NPR, and PBS. Speaker fees are donated to Junior Achievement Worldwide and related organizations.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'asheeshadvani',
      twitter: 'asheeshadvani',
      website: '',
    },
  },
  {
    coachName: 'Herminia Ibarra',
    jobTitle: 'Professor of Organizational Behavior',
    tags: ['Author', 'Non-Profit', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/ibarra-photo.jpg',
    bio:
      'Thinkers 50 #9 Management Thinker – 2015, #1 Leadership Thinker 2013, author and Professor at INSEAD.\n\nHerminia Ibarra is the Cora Chaired Professor of Leadership and Learning, and Professor of Organisational Behaviour at INSEAD. Prior to joining INSEAD she served on the Harvard Business School faculty for thirteen years. She is a member of the World Economic Forum Global Agenda Councils, a judge for the Financial Times and McKinsey Business Book of the Year Award, and Chairs the Visiting Committee of the Harvard Business School. Thinkers 50 ranked Ibarra #8 among the most influential business gurus in the world.\n\nProfessor Ibarra is an expert on professional and leadership development. Her most recent book, Act Like a Leader, Think Like a Leader (Harvard Business School Press, 2015), explains how to step up to a bigger leadership role. Her best-selling book, Working Identity: Unconventional Strategies for Reinventing Your Career (HBSP, 2003) describes how people reinvent their careers.\n\nIbarra is the author of numerous articles in the Harvard Business Review, Administrative Science Quarterly, Academy of Management Review, Academy of Management Journal, and Organization Science and writes frequently for business media including The Wall Street Journal, Financial Times, and New York Times. She directs Leadership Transition, an executive program designed for managers moving into broader leadership roles and speaks internationally on leadership, talent management, and women’s careers.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'herminia-ibarra-4455411a',
      twitter: '',
      website: 'https://herminiaibarra.com',
    },
  },
  {
    coachName: 'Agapol Na Songkhla',
    jobTitle: 'Chief People Officer at Thai Beverage PLC',
    tags: ['Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/agapol-na-songkhla.jpg',
    bio:
      'Dr. Agapol Na Songkhla is Chief People Officer and Executive Vice President of Human Capital Group at Thai Beverage (ThaiBev), ASEAN’s leading conglomerate in beverages and food businesses. He is in charge of the Group’s people transformation, with a signature transformation program called “Limitless Opportunities”.\n\nFrom 2006 until 2014 Dr. Agapol served as Executive Vice President and Head of Strategy & Transformation at TMB Bank and doubling as Head of Corporate Governance and Company Secretary from 2012-2014, as Head of Human Resources from 2011 to 2012 and as Head of Retail Operations in 2010.\n\nDr. Agapol began his career with The Boston Consulting Group (BCG) where he worked with leading companies in Southeast Asia on their strategies and transformations from 1997 to 2006.\n\nHe is on the board of multiple companies and is a distinguished member with the Thai Institute of Directors.\n\nDr. Agapol holds a Ph.D. degree in Systems Science from the Tokyo Institute of Technology and undergraduate degree in electrical engineering from Chulalongkorn University.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'agapol-na-songkhla-2b22ba28',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Annie McKee',
    jobTitle: 'Author, Speaker, Senior Fellow at the University of Pennsylvania',
    tags: ['Author', 'Consultant', 'Executive Coach', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/annie-mcknee.jpg',
    bio:
      'Dr. Annie McKee is an executive coach and advisor to leaders of Fortune/FTSE 500 companies, governments and NGOs around the globe. Annie is committed to a person-centered approach that enables leaders to develop their emotional intelligence, enhance their strategic thinking and abilities, and build their the capacity to create cultures where everyone—and the enterprise—can  thrive. \r\n\n\rIn addition, she is a Senior Fellow at the University of Pennsylvania where she teaches and leads the PennCLO Executive Doctoral program.\r\n\n\rAnnie is the bestselling coauthor of three books published by Harvard Business Review Press: Primal Leadership, with Daniel Goleman and Richard Boyatzis (2002/2014); Resonant Leadership, with Richard Boyatzis (2005), and Becoming a Resonant Leader, with Richard Boyatzis and Frances Johnston (2008). She is also the author of Management: A Focus on Leaders (Pearson/Prentice Hall 2014) and her newest book, How to be Happy at Work: The Power of Purpose, Hope and Friendship, will be released by Harvard Business Review Press on September 5, 2017.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'mckeeannie',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Anu Oza',
    jobTitle: 'Leadership Development, Diversity and Inclusion professional',
    tags: ['Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/anu-oza.jpg',
    bio:
      'Anu Oza has over 25 years of international experience in Leadership Development, Diversity and Inclusion and CSR.\r\n\n\rA graduate of Harvard, the London School of Economics and the Tata Institute of Social Sciences, she has blended her dual interests in Human Potential and Public Policy by working across the private, government and non-profit sectors.\r\n\n\rShe has held Senior Executive positions in both consulting and industry. She led the leadership development practice and functions at both Mercer and Accenture, and was Head of Human Resources for Foster Wheeler, a leading Engineering company. Additionally, she worked with Unilever in India and in the UK.\r\n\n\rHer non-profit and government work has included consulting with the UNFPA for their first ever conference of Public-Private Partnerships and consulting for the UN Global Compact. She has been selected by the Government of India to be amongst the first batch of trainers and facilitators on CSR, after the Government made CSR spend mandatory for organizations in specific categories\r\n\n\rHer passion for coaching stems from her deep interest in the art, science and practice of leadership. She believes that both leadership development and coaching involve leading with questions as much as, if not more than directing with answers. Additionally, she believes that leadership development and coaching need to be able to help clients face realities, discard old identities, renegotiate both inner and outer loyalties that may or may not be serving her and much more.\r\n\n\rAnu’s current work involves working extensively with women and men in the fields of diversity and inclusion. She has trained or coached over three thousand people in this field. Her work with women focusses on helping them become aware of and grounded in their value, thereby breaking their “inner glass ceiling”. She also works with them on increasing their impact and influence through better negotiation and navigation of organizational power and politics\r\n\n\rAnu is one of the few people in India who have written about what corporates can do to facilitate broader social inclusion through CSR initiatives and other HR practices that can address some of the most deeply rooted, rigid social hierarchies.\r\n\n\rShe enjoys teaching and especially treasures her experiences of leading sessions at the MS Swaminathan Research Foundation, Harvard University and Columbia University.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'ozaanu',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Beverly Kaye',
    jobTitle: 'Author - Speaker - Thought Leader',
    tags: ['Author', 'Executive Coach', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/beverly-kaye.jpg',
    bio:
      'Dr. Beverly Kaye, Founder of Career Systems International, is recognized internationally as one of the most knowledgeable and practical professionals in the areas of career development, employee engagement and retention. She received the Distinguished Contribution Award from ATD and the Thought Leader Award from The Association of Learning Providers (ISA).\r\n\n\rBeverly has spent years researching corporate strategies for developing, retaining and engaging knowledge workers. Her bestselling book, Love ‘Em or Lose ‘Em: Getting Good People to Stay, co-authored with Sharon Jordan-Evans, has sold over 750,000 copies in 25 languages. Help Them Grow or Watch Them Go: Career Conversations Employees Want, co-authored with Julie Winkle Giulioni, was published in 2012. In 2015 she co-authored Hello Stay Interviews, Goodbye Talent Loss: A Manager’s Playbook and her newest book, Up Is Not the Only Way:  Rethinking Career Mobility, was published in September 2017.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'bevkaye',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Bill Simpson',
    jobTitle: 'Independent Board Director, Retired President & CEO',
    tags: ['Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/bill-simpson.jpg',
    bio:
      "Bill is an experienced CEO and Board Director with 40 years in the hospitality and entertainment industries. He worked with Hershey Entertainment and Resorts Company for 21 years, serving as its CEO from 2013 until his retirement in January of 2018. Known for top line and bottom line growth, Bill and his team achieved record financial results during that time, increasing revenue by 20% and EBITDA by 46%. He is also known for developing a strong organization that focuses on company culture, team building, training and development, and succession planning. Bill is a proven mentor and developer of leadership talent.\n\nBill has served, and continues to serve on for-profit and non-profit Boards. Currently he is a member of the Execustar and Woodstock Resort Company Boards.\n\nBill served on the Hershey Entertainment and Resorts Company Board from 2011. He was a two term member of the American Hotel & Lodging Association Board of Directors, participating on their Audit and Resort Committees. He also served as a Board Member for the Pennsylvania Chamber of Business and Industry, the Ronald McDonald Children's Charities of Central Pennsylvania, and the Dartmouth College Geisel School of Medicine.\n\nBill is a certified Executive Coach through the Marshall Goldsmith Stakeholder Centered Coaching",
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'drbobnelson',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Bob Nelson',
    jobTitle: 'Employee Engagement Thought leader',
    tags: ['Author', 'Executive Coach', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/bob-nelson.jpg',
    bio:
      'Dr. Bob Nelson is considered the leading authority on employee recognition, motivation and engagement in the world.  He is president of Nelson Motivation Inc. (www.drbobnelson.com), a management training and consulting company that specializes in helping organizations improve their management practices, programs and systems and has worked with 80 percent of the Fortune 500 and serves as an Executive Strategist for HR Issues.\r\n\n\rDr. Bob has been named a Top Thought Leader by the Best Practice Institute and a leading Global Employee Engagement Influencer. He previously worked closely with Dr. Ken Blanchard, “The One Minute Manager” for ten years and currently serves as a personal coach for Dr. Marshall Goldsmith, the world’s #1-ranked executive coach.\r\n\n\rDr. Bob has sold 5 million books on management, employee motivation and engagement, including 1501 Ways to Reward Employees, The 1001 Rewards & Recognition Fieldbook, 1001 Ways to Energize Employees, The Management Bible, Ubuntu! Inspiring Teamwork & Collaboration at Work, and his latest, Recognizing & Engaging Employees For Dummies, among others.  His books have been translated into over 30 languages.\r\n\n\rHe has presented on six continents and appears extensively in the national & international media including CBS’ 60 Minutes, CNN, MSNBC, PBS, NPR, as well as in The New York Times, The Wall Street Journal, The Washington Post, The Chicago Tribune, Fortune, BusinessWeek and Inc. magazines to discuss how to best motivate today’s employees.\r\n\n\rHe received an MBA in organizational behavior from UC Berkeley and earned his PhD in management education with Dr. Peter Drucker, “The Father of Modern Management,” at the Drucker Graduate Management School of Claremont Graduate University in Los Angeles. He teaches for the MBA program of the Rady School of Management at the University of California at San Diego.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'drbobnelson',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Brown Johnson',
    jobTitle: 'EVP creative director, Sesame Workshop',
    tags: ['Corporate Executive', 'Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/brown-johnson.jpg',
    bio:
      'Brown Johnson is the Executive Vice President and Creative Director at Sesame Workshop. Johnson is responsible for the development and production of the Workshop’s domestic television content, as well as creative services.\r\n\n\rJohnson is an award-winning producer of some of the most successful children’s programs. Before joining the Workshop, she served as President of Animation and Preschool Entertainment at Nickelodeon where she managed development and production of more than 200 episodes of programming each year. Johnson pioneered the interactive format of the groundbreaking preschool programs Dora the Explorer and Blue’s Clues. She also conceived and oversaw the development of the Nickelodeon preschool block featuring hit shows including Go Diego Go!, Yo Gabba Gabba!, Team UmiZoomi, The Backyardigans, and Ni Hao Kai Lan. Johnson led the creative development to extend the preschool block online and through retail. Many of the programs she created and managed showcase characters of diverse ethnicities. Her focus on the development of multi-ethnic children’s media spurred Johnson to create fellowships in writing and art to grow the next generation of diverse creators.\r\n\n\rIn Johnson’s more than 20 years with Nickelodeon, she received multiple Emmy awards, Television Critics Awards, Peabody Awards, Imagen and NAACP Image Awards. Johnson serves on the advisory board of Peter Gabriel’s WITNESS foundation, the board of governors of We Are Family Foundation, the Ambassador Council of the Geena Davis Institute on Gender in Media and is a graduate student mentor for the USC John C. Hensch Division of Animation and Digital Arts.\r\n\n\rJohnson resides in New York and has one daughter.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'brown-johnson-1b426973',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Bryan Miller',
    jobTitle: 'Writer, Teacher, Entrepreneur, Philanthropist, Coach',
    tags: ['Executive Coach', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/bryan-miller.jpg',
    bio:
      'Bryan Miller is a leadership coach who offers a simple yet profound roadmap for “Good Living” with his Power, Productivity and Peace workshops, keynotes and his forthcoming book by the same title. Audiences and clients leave empowered to harness their true genius, fuse their passion and purpose, and transcend society’s traditional (and often hollow) definitions of success. Bryan’s teachings draw from his leadership roles inside his family’s massive enterprise, the Larry H. Miller Group, as well as lessons learned as the youngest son of self-made billionaire entrepreneurs, and his own deep inquiry into living a life of happiness, meaning and contribution.\r\n\n\rIn 2016, Bryan established Bryan Miller & Associates, a professional training and personal development company dedicated to helping leaders, legacy families and conscious organizations find and express their brilliance and purpose. A certified iPEC coach, he has trained with Jack Canfield and Tony Robbins and is a certified HeartMath trainer and Awakening the Dreamer Symposium facilitator.\r\n\n\rBryan is the award-winning author of Behind the Drive, a collection of powerful stories from his father’s life and work, gleaned from political leaders, NBA legends, business competitors, and close friends. Bryan and his wife, life coach Heather Dawn, founded 100% of Humanity, a charitable foundation dedicated to creating a sustainable, just, and spiritually fulfilling world for all.\r\n\n\rWhen not speaking and coaching nationally and internationally, Bryan is an avid reader, writer, and traveler. He lives in Sandy, Utah, with his wife and six children.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'bryanjosephmiller',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Cara Juicharern',
    jobTitle: 'A leading executive coach in Southeast Asia',
    tags: ['Author', 'Executive Coach', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/atchara-juicharern.jpg',
    bio:
      'Cara is recognized for her distinctive capabilities developing executives and teams from a wide variety of cultural background. Cara had fifteen years of international experience with Northwest Airlines. She managed people across the regions and was awarded “the best manager of the year” in 1997.\r\n\n\rIn 2005, she founded AcComm & Image International. Her inspiring leadership and success frequently appears in business interviews. She was recognized as one of the ten wonder women in business by WOMAN PLUS Magazine by GM Group.\r\n\n\rCara has Ph. D. in Management Development, an international program at National Institute of Development Administration where she also receives Distinguished Alumni Award. She also studied in Germany and USA. Cara is a Thai best-selling author of Leader as Coach and has also been a regular columnist of ASEAN column in Post Today newspaper.',
    links: '',
  },
  {
    coachName: 'Caroline Santiago',
    jobTitle: 'Executive Leadership Coach, Change Agent, and Culture Strategist',
    tags: ['Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/santiago-photo-500x500.png',
    bio:
      'Caroline Santiago is an Executive Coach, Change Agent, Technologist and Culture Strategist. She is the Founder and CEO of Utopia Life Consulting Inc., a San Diego based consultancy specializing in designing and executing leadership development, human capital, and large-scale technology change management programs.   \r\n\n\rIndividually, Caroline helps senior leaders accelerate their personal growth, shift to a strategic mindset, practice agility, and adaptability while leading and managing their organization’s rapid technological advancements, workforce enablement plans, and expeditious organizational growth.\n\nOrganizationally, Caroline helps senior leaders and their teams elevate their organizational performance and effectiveness by focusing on several key areas of their business: Leadership Development, Strategic Alignment, Organizational Design, Organizational Change Management, and Strategic Workforce Enablement. She partners with senior leaders and their teams to help them obtain clarity, stakeholder buy in and strategic alignment when executing and operationalizing their mission, vision, and corporate strategy.\r\n\n\rPrior to launching Utopia Life Consulting Inc., Caroline held leadership positions at Arthur Andersen, KPMG, BearingPoint, and Deloitte Consulting. During her 20-year tenure at the Big 4 Consulting firms she was able to gain invaluable insights and deep expertise in helping senior leaders drive, shape, and powerfully influence their organization’s culture, business, and technology transformations. She has worked with numerous Fortune 500 companies and public-sector clients across multiple segments and industries.\r\n\n\rCaroline holds a BA in International Studies with a minor in Gender and Race Relations from George Mason University. She has a passion for speaking and teaching leadership development to high school and college students. She has travelled the world globally and has spoken to thousands of youth and young adults on “Living Your Life with Passion and Purpose”. She volunteers and serves as a Leadership Consultant for the Hugh O’Brian Youth (HOBY) Leadership Foundation.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'caroline-santiago-20911723',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Chester Elton',
    jobTitle: 'Author of "The Best Team Wins" & "All In," NY Times Best-Seller',
    tags: ['Author', 'Consultant', 'Executive Coach', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/elton-c-photo.jpg',
    bio:
      'For the past four years, Chester Elton has been ranked in the top 30 Global Gurus for Leadership and #10 for Organizational Culture. He is co-author of 5 New York Times bestselling business books, including The Carrot Principle, The Orange Revolution and All In. His books have sold over 1.5 million copies and have been translated in over 30 languages.\r\n\n\rElton is the co-author of 10 books on leadership and culture with his friend Adrian Gostick. Their next book “The Best Team Wins” will be a major release with Simon & Schuster on February 13, 2018. Some of Elton’s other books include: Managing with Carrots, The 24 Carrot Manager, A Carrot a Day and The Invisible Employee. As a LinkedIn Influencer, he has over 480,000 followers and his posts have reached millions. Elton has a weekly segment on WCBS Radio, in New York City, that highlights good news in business and what many organizations are doing to honor their employees and impact their communities in a positive way.\r\n\n\rElton is a regular guest lecturer at Cornell University’s masters program in HR as well as Fordham University’s MBA program at the Gabelli School of Business. He also guest lectures at BYU where he is a proud alumnus of the Tanner School of Business.\r\n\n\rA volunteer worker over the last 4 years for his church, Elton is dedicated to working with inner city youth where he is a teacher and mentor to several young men between the ages of 12-18 in East Orange, New Jersey.\r\n\n\rElton is the co-founder of The Culture Works; an international training company that helps organizations of all sizes create the culture they need to succeed. www.thecultureworks.com. Elton is proud to be on the advisory board for Camp Corral, a non-profit organization that provides summer camp each year for children of wounded and fallen military hero’s. www.campcorral.org\r\n\n\rWhat he is most proud of is to be the father of 4 exceptional children and proud grandfather to Lucas Elton who is 2 1⁄2 years old! Happily married for 34 years to the lovely Heidi Olsen Elton, there isn’t a luckier man on the planet!\r\n\n\rChester@chesterelton.com • chesterelton.com',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'chesterelton',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Adrian Gostick ',
    jobTitle: 'Bestselling Leadership Author | Organizational Culture Expert ',
    tags: ['Author', 'Consultant', 'Executive Coach', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/adrian-headshot.jpg',
    bio:
      'How do today’s best leaders accelerate business results? By engaging their employees to execute on strategy, vision, and values. #1 bestselling leadership author Adrian Gostick provides real solutions on managing change, driving innovation, and leading high-performance teams. \n\nGostick is a global workplace expert and thought leader in the fields of corporate culture, leadership, and engagement. He is founder of the training and consulting company The Culture Works and author of the #1 New York Times, USA Today and Wall Street Journal bestsellers All In, The Carrot Principle and The Best Team Wins. His books have been translated into 30 languages and have sold 1.5 million copies around the world. \n\nAs a leadership expert, he has been called “fascinating,” by Fortune magazine and “creative and refreshing” by the New York Times. Gostick has appeared on NBC’s Today Show and CNN, and is often quoted in The Economist, Newsweek, and Wall Street Journal. If you Google the 30 Top Leadership Gurus, he is on the list along side Jack Welch and Jim Collins. His consulting clients include Danaher, Bank of America, Rolls Royce, JELD-WEN and California Pizza Kitchen.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'adriangostick',
      twitter: 'adriangostick',
      website: 'https://www.adriangostick.com/',
    },
  },
  {
    coachName: 'Chris Cuomo',
    jobTitle: 'Anchor on Cuomo Prime Time at CNN',
    tags: ['Corporate Executive', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/chris-cuomo.jpg',
    bio:
      'CNN anchor Chris Cuomo covers international events and breaking news for CNN. He anchors CNN’s morning show “New Day” with co-anchor Alisyn Camerota. NEW DAY airs every weekday, from 6am to 9am EST— on CNN.\r\n\n\rBefore joining CNN, Cuomo was the co-anchor of “20/20,” the Emmy Award-winning ABC Newsmagazine, and Chief Law and Justice Correspondent for ABC News. He formerly co-anchored “Good Morning America,” where he covered international breaking news as the primary reporter.\r\n\n\rChris is the recipient of multiple journalism awards. His profile on 12-year-old poet Mattie Stepanek on “Good Morning America” was awarded a News Emmy. He has received Polk and Peabody awards for his team coverage throughout the years, and the Edward R. Murrow award for his work covering breaking news.\r\n\n\rCuomo is a graduate of Fordham University School of Law, and received his undergraduate degree from Yale University.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'chris-cuomo-158a1b164',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Chris Coffey',
    jobTitle: 'Master Certified Coach & Practice Leader',
    tags: ['Executive Coach', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/chris-coffey.jpg',
    bio:
      'For 25+ years, Chris has been in the leadership development world. He has worked with and coached hundreds of key leaders and successful people develop leadership to become even more effective.\n\nChris’s coaching style is direct and well-defined around the Goldsmith Stakeholder Centered Coaching® Process he co-developed with Frank Wagner and Marshall Goldsmith. Chris has coached leaders in Fortune 100, 500, 1000 companies, as well as in start ups and not for profits. The common denominator for all the individuals Chris works with is, they are all successful, high-potential leaders whose organizations want to accelerate their development by having them work closely with a seasoned, leadership coach. \n\nActual coaching engagements results and after Action Reviews\n\nGerard Iman mini survey and AAR\n\nJack Clarkson’s mini survey and AAR\n\nKerry Peters mini survey and AAR\n\nTom Lee mini survey and AAR\n\nCoaching Testimonials scroll down page to One to One Results\n\nChris has taught management and leadership courses In the UCLA Technical Manager Program and at  Gonzaga University in Florence, Italy.\n\nChris is a much sought after Keynote speaker:  Topics and videos\n\nKeynotes  \n\nStakeholder Centered Coaching®  certification  \n\nMarshall Goldsmith: Stakeholder Centered Coaching\n\nMarshall Goldsmith’s endorsement of Chris Coffey:\n\n“My partner, Chris Coffey, helps individuals and teams achieve and sustain outstanding results. In addition, he is clearly one of the world’s best keynote speakers and trainers in the area of coaching, leadership development, and teamwork. He provides a rare combination of being entertaining and dynamic while providing advice and stories from his extensive coaching experience that is both practical and applicable. He is a person that I trust to lead the Stakeholder Centered Coaching®  certification process for our behavioral coaches!” \n\nAUTHOR : THE NEW IQ: LEADING UP ,DOWN, AND ACROSS USING INNOVATIVE QUESTIONS\n\nAmazon IQ',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'coachchriscoffey',
      twitter: '',
      website: 'https://www.ChristopherCoffey.com',
    },
  },
  {
    coachName: 'Claire Diaz-Ortiz',
    jobTitle: 'Bestselling Author | Speaker | Advisor',
    tags: ['Author', 'Entrepreneur', 'Executive Coach', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/claire-diaz-ortiz.jpg',
    bio:
      'Claire Diaz-Ortiz is an author, speaker, and technology innovator who has been named one of the 100 Most Creative People in Business by Fast Company. Claire was an early employee at Twitter, where she spent five and a years leading social innovation.\r\n\n\rIn Claire’s time at Twitter, she was called everything from “The Woman Who Got the Pope on Twitter” (Wired) and “Twitter’s Pontiff Recruitment Chief” (The Washington Post) to a “Force for Good“ (Forbes) and “One of the Most Generous People in Social Media” (Fast Company).\r\n\n\rClaire is the award-winning author of eight books that have been translated into more than ten languages, including One Minute Mentoring: How to Find and Work with a Mentor – and How You’ll Benefit from Being One, Twitter for Good: Change the World One Tweet at a Time, Design Your Day: Be More Productive, Set Better Goals, and Live Life on Purpose, and Hope Runs: An American Tourist, a Kenyan Boy, a Journey of Redemption.\r\n\n\rShe is a frequent international speaker on social media, business and innovation and has been invited to deliver keynotes and trainings at organizations like the Vatican, the US State Department, Verizon, South by Southwest, TEDX, and many others.\r\n\n\rShe writes a popular business blog at ClaireDiazOrtiz.com and serves as a LinkedIn Influencer, one of a select group of several hundred global leaders chosen to provide original content on the LinkedIn platform.\r\n\n\rClaire holds an MBA from Oxford University, where she was a Skoll Foundation Scholar for Social Entrepreneurship, and has a B.A. and an M.A. in Anthropology from Stanford University.\r\n\n\rShe is the co-founder of Hope Runs, a non-profit organization operating in AIDS orphanages in Kenya.\r\n\n\rShe has appeared widely in major television and print news sources such as CNN, BBC, Time, Newsweek, The New York Times, Good Morning America, The Today Show, The Washington Post, Fortune, Forbes, Fast Company, and many others.\r\n\n\rRead more about her at ClaireDiazOrtiz.com or via @claire on Twitter.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'clairediazortiz',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Clark Callahan',
    jobTitle: 'Managing Director at Harvard Business School Executive Education',
    tags: ['Corporate Executive', 'Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/clark-callahan.jpg',
    bio:
      'Clark Callahan is Managing Director, Custom Programs at Harvard Business School Executive Education. In that capacity, he manages a portfolio of executive education client relationships, business development, program design and delivery, and coordinates the activities of the Custom Programs team.\r\n\n\rClark also serves on the board of directors of UNICON, the university-based executive education consortium where he was co-chair in 2014-15 and chair in 2015-16. Clark is certified in Marshall Goldsmith’s Stakeholder Centered Coaching method, and brings those practices and principles to all of his client work.\r\n\n\rBefore joining Harvard in 2016, Clark led the growth and transformation of Executive Education at the Tuck School of Business at Dartmouth College since 2003. Prior to Tuck, Clark was Managing Director of Strategic Management Group (SMG) UK-Europe (now BTS), a leading provider of simulation-based executive education. He was responsible for SMG’s UK and Europe sales and delivery operations and served on the parent company’s executive committee. Before joining SMG, Clark spent eight years at the Wharton School of the University of Pennsylvania. He held a number of posts including director of the Wharton Small Business Development Center, which advises early-stage companies, and lecturer in entrepreneurial management.\r\n\n\rClark holds a master’s degree in government administration from the University of Pennsylvania and a bachelor of arts from Franklin & Marshall College. He and his wife are happily transitioning back to city life in Boston, where one of their two adult daughters also lives.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'clarkcallahan',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Darek Lenart',
    jobTitle: 'Senior Vice President, Human Resources, North America Markets and Strategic Growth',
    tags: ['Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/darek-lenart.jpg',
    bio:
      'Darek Lenart is Senior Vice President, Human Resources at Mastercard. Based in New York he provides HR leadership to the North America Markets and Strategic Growth function. He plays a critical role in shaping the right culture, driving the business and human resources strategies and has direct responsibility for guiding and managing HR practices and programs. He is a member of Human Resources, North America and Strategic Growth Leadership teams. Previously he served as HR Business Partner for Mastercard Finance organization globally.\r\n\n \rPrior, Darek held HR leadership roles in the PepsiCo headquarters office for its Europe enterprise based in Geneva, Switzerland.  He was charged with developing and executing HR agendas for multi-category technical operations as well as partnering with sector heads of Finance, IT, HR and Corporate Communication.  His objectives centered on long-term leadership development, front line engagement and change management capabilities development in a matrix organization.\r\n\n \rPrior to this experience, Darek served as HR director within Pepsi’s Central Eastern Europe.  Among other assignments he led HR for Poland and the Baltics, supporting the full range of business units: Commercial, Supply Chain, and Support Functions.  During his tenure, the new Route to Market strategy was developed and implemented bringing significant business benefits.\r\n\n \rIn the early stages of his professional career, Darek developed his HR expertise in the pharmaceutical business, moving through the ranks of PLIVA Pharmaceutical Company (now part of Teva Group) including an international assignment in Zagreb, Croatia. \r\n\n \rDarek holds a master’s degree in International Business & Politics from the University of Economics in Krakow, Poland.  He continued with his post-graduate studies in the IEDC-Bled School of Management. Darek is also one of the founders of the HR Generation Next organization for HR professionals.\r\n\n\rRecently, Darek joined Marshall Goldsmith’s 100 Coaches pay it forward initiative and became certified in his Stakeholder Centered Coaching process.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'darek-lenart-6325541',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Dave Meltzer',
    jobTitle: 'CEO and Co-Founder, Sports 1 Marketing',
    tags: ['Corporate Executive', 'Executive Coach', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/david-meltzer.jpg',
    bio:
      "David Meltzer is the CEO of Sports 1 Marketing, a firm in which he co- founded with Hall of Fame Quarterback Warren Moon. Sports 1 Marketing is a global marketing agency whose projects include The Super Bowl, The Master’s, and Pro Football Hall of Fame, the Crescent Moon Foundation, and the Unstoppable Foundation.\n\nDavid has been recognized by Forbes and Entrepreneur as a Top 5 Keynote Speaker, and named 2017 “Game Changer of the year” by ACQ Global Awards. He has also been honored for his philanthropic work as Variety Magazine’s “Sports Humanitarian of the Year” and a recipient of the Ellis Island Medal of Honor\n\nAs an author, he is the international #1 best-selling author and national best-selling author of Compassionate Capitalism and Connected to Goodness.\n\nDavid is an executive Producer, and host judge of Entrepreneur Media’s newest original show, Elevator Pitch and the host of newly released podcast, The Playbook, with Entrepreneur—which landed as a Top Five business podcast on iTunes.\n\n* CEO of Sports 1 Marketing, which he co-founded with Hall of Fame quarterback Warren Moon\n* Former CEO of Leigh Steinberg Sports & Entertainment, the world’s most notable sports agency.\n* Former CEO of Samsung and Microsoft's first smartphone the PC-E Phone, manufactured by Samsung\n* Former VP of Thomson Reuters Corporation\n* Named “Sports Humanitarian of the Year” by Variety Magazine\n* Recipient of the Ellis Island Medal of Honor",
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'davidmeltzer2',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'David Allen',
    jobTitle: 'Founder, David Allen Company',
    tags: ['Author', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/david-allen.jpg',
    bio:
      'One of the world’s most influential thinkers on productivity, David’s 35 years experience as a management consultant and executive coach have earned him the titles of “personal productivity guru” by Fast Company Magazine and one of America’s top 5 executive coaches by Forbes Magazine. The American Management Association has ranked him in the top ten business leaders. His bestselling book, the groundbreaking “Getting Things Done: The Art of Stress-Free Productivity”, has been published in thirty languages; and the “GTD” methodology it describes has become a global phenomenon, being taught by training companies in sixty countries.\r\n\n\rDavid, his company, and his partners are dedicated to teaching people how to stay relaxed and productive in our fast paced world.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'davidallengtd',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'David Burkus',
    jobTitle: 'Keynote Speaker and Associate Professor of Leadership and Innovation at ORU',
    tags: ['Author', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/david-burkus.jpg',
    bio:
      'David Burkus is a best-selling author, a sought after speaker, and business school professor. In 2017, he was named as one of the world’s top business thought leaders by Thinkes50\r\n\n\rHis forthcoming book, Friend of a Friend, offers readers a new perspective on how to grow their networks and build key connections—one based on the science of human behavior, not rote networking advice. He is also the author of Under New Management and The Myths of Creativity. David is a regular contributor to Harvard Business Review and his work has been featured in Fast Company, the Financial Times, Inc magazine, Bloomberg BusinessWeek, and CBS This Morning.\r\n\n\rDavid’s innovative views on leadership have earned him invitations to speak to leaders from a variety of organizations. He’s delivered keynote speeches and workshops for Fortune 500 companies such as Microsoft, Google, and Stryker and governmental and military leaders at the U.S. Naval Academy and Naval Postgraduate School. His TED talk has been viewed over 1.5 million times.\r\n\n\rWhen he’s not speaking or writing, David is in the classroom. He is associate professor of leadership and innovation at Oral Roberts University where he was recently named one of the nation’s “Top 40 Under 40 Professors Who Inspire.”\r\n\n\rDavid lives outside of Tulsa with his wife and their two boys.',
    links: {
      facebook: 'drdavidburkus',
      instagram: '',
      linkedin: 'davidburkus',
      twitter: 'davidburkus',
      website: 'https://davidburkus.com',
    },
  },
  {
    coachName: 'David Gallimore',
    jobTitle: 'Innovative Business & Technology Executive',
    tags: ['Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/david-gallimore.jpg',
    bio:
      'Strategic Business and Technology Executive with success in dramatically transforming global industrial, technology, and professional services companies to protect and grow revenue. Deep knowledge of digital innovation and disruptive technologies to solve complex problems, cut costs, and create new business models. Expert in high performance teams and nurturing the culture required to fully embrace digital transformation. Bridge builder between two cultures, business and technology, to deliver competitive advantage and sustainable results with speed.\r\n\n\rCreated 7 successful startups inside companies generating $1B+ across industries: Boeing, Capgemini, IBM, Wall Data. Delivered 4 years of complex work in 2 years, and generated $100M+ in operational benefits over 3 years for BC Hydro. Attracted and retained 100+ women, Gen X, and Millennials to increase diversity and transform cultures in Tech.\r\n\n\rCOMMITTED TO PAYING IT FORWARD\r\n\n\rAs a volunteer Chief Technology Officer and Leadership Coach with the Corinthian Yacht Club of Seattle since September 2017, David is helping accelerate the transformation of the 1,422 member (and growing quickly), internationally recognized, racing club. Introduced Alan Mulally’s Working Together Management System to drive the execution of a strategic, comprehensive, and integrated initiative to protect and grow revenue and cut operational costs. Introduced the Marshall Goldsmith Stakeholder Centered Coaching leadership development program to empower club leadership, improve governance, and increase volunteer engagement.\r\n\n\rHe co-founded in 2005 and co-led for six years a business/law school clinic at Seattle University based on the Grameen Bank micro-lending model. Now in its 12th year, the clinic has inspired and trained over 200 business and law students and served over 300 micro-enterprise clients creating meaningful, profitable, and sustainable businesses.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'davidgallimore',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'David Nour',
    jobTitle: 'Relationship Economics Thinker, Speaker, Advisor, & Coach',
    tags: ['Author', 'Executive Coach', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/david-nour-high-res-biz-photo.jpg',
    bio:
      'A thinker, business advisor, best-selling author, and keynote speaker, David Nour is internationally recognized as a leading expert on strategic business relationships. The author of 10 books, including best-sellers CO-CREATE (St. Martin’s Press) and Relationship Economics® (Wiley), and the upcoming Curve Benders, Nour serves as a trusted advisor to global clients and coaches corporate leaders and their teams. He is CEO of The Nour Group, a consulting firm that advises top global leaders, boards, and associations on disruptive innovations to fuel their growth. Client engagements span leading global companies including Chubb, Cisco, Dell Technologies, Deloitte, Disney, Equifax, Eversheds Sutherland, HPE, IBM, KPMG, Marriott International, and ThyssenKrupp.\n\nNour is an adjunct professor at the Goizueta Business School at Emory University and Vanderbilt University’s Owen School of Management, was named to the Global Gurus Top 30 Leadership Professionals list and is honored to be one of Marshall Goldsmith’s 100 Global Coaches. He is a member of the FBI Citizens Academy, Association for Corporate Growth (ACG), and the National Association of Corporate Directors (NACD), where he has earned the Governance Fellow accreditation.\n\nA Forbes Leadership contributor on the Future of Work, Nour’s unique insights have been featured in a variety of prominent publications, including The Wall Street Journal, The New York Times, Fast Company, Huffington Post Business, Entrepreneur, and Knowledge@Wharton.\n\nBorn in Iran, Nour immigrated to the U.S. in 1981 with $100, a suitcase and limited fluency in English. He graduated from Georgia State University with a bachelor’s degree in business management and went on to earn an Executive MBA from the Goizueta Business School at Emory University. He resides in Atlanta, GA, with his wife and two teenagers.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'davidnour',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Deanne Kissinger',
    jobTitle: 'Vice President, Global Talent Management and Certified Coach',
    tags: ['Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/deanne-kissinger.jpg',
    bio:
      'Deanne is Vice President, Global Talent Management at Diversey, Inc. Owned by Bain Capital, Diversey is a $2.6bn organization with approximately 9000 employees in nearly 60 countries and is a leading provider of sustainable cleaning and hygiene solutions. Deanne’s current role also includes responsibility as Global HR Business Partner for HR. \n\n\r\rDeanne started her career in the commercial side of the business in sales and sales management for pharmaceutical organizations including GlaxoSmithKline in both the United Kingdom and United States. She now has over 20 years of international experience in various aspects of Talent and Leadership Development in industries including pharmaceuticals, consumer goods (FMCG), property, manufacturing and finance.  She previously worked for other leading organizations such as Diageo (Smirnoff, Guinness, Baileys, Tanqueray, Johnnie Walker and Captain Morgan) both in the UK and Australia. Also in Australia, she worked at Westpac Bank and The GPT Group.\n\n\r\rDeanne earned a Bachelor’s of Science (BS) in Marketing Management from Grove City College in Pennsylvania and a Master’s in Business Administration (MBA) from the Melbourne Business School in Melbourne, Australia.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'deannekissinger',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Deborah Borg',
    jobTitle: 'Chief Human Resources and Communications Officer at Bunge',
    tags: ['Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Deborah-Borg.jpg',
    bio:
      'Ms. Borg assumed the role of Chief Human Resources Officer in January 2016 where she leads Bunge’s global Human Resources strategy and operations. She is a seasoned business and human resources leader with a proven track record in developing people and culture based programs in support of business performance and growth, Ms. Borg joined Bunge from Dow Chemical, where she served as President Dow USA, a role in which she was responsible for regional business strategy and external relationships with customers, government organizations and joint venture partners. She started her career at Dow in 2000 as Human Resources Manager for Australia / New Zealand, and went on to hold regional and business HR roles in Asia, Europe and North America. She also served as Global HR Director, Marketing and Sales, and led the Human Capital Planning and Development function for Dow focusing on talent acquisition, retention, diversity and development. Previously, Ms. Borg served in HR and talent development roles with General Motors Australia. She holds a Bachelor of Business Management in Human Resources and a Master in Training and Change Management from Victoria University, Australia.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'deborah-borg-6065b41',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Deepa Prahalad',
    jobTitle: 'Design Strategist, Social Innovator, Author, Speaker. ',
    tags: ['Author', 'Consultant', 'Executive Coach', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/PRAHALAD-DEEPA.jpg',
    bio:
      'Deepa Prahalad is an author and consultant focused on design and emerging markets, and is co-author of Predictable Magic (Wharton School Press), which was chosen by Fast Company as one of the Best Design Books of the Year. She also blogs for the Harvard Business Review, Huffington Post, BusinessWeek and others.\r\n\n\rDeepa has worked with companies from start-ups to large multinationals and mentors social entrepreneurs. A regular speaker on design strategy and innovation policy and governance, Deepa also serves on the Boards of the Global Peter Drucker Forum, ArogyaWorld, Re:Materials and TiE South Coast. She is and is an elected Fellow of the International Academy of Management and the Center for Digital Transformation at UC Irvine and was named #34 on\r the inaugural Thinkers50 India list. \n\nDeepa holds a BA in Political Science and Economics from the University of Michigan and an MBA from the Tuck School of Business at Dartmouth. She actively supports several programs created in honor of her late father, CK Prahalad, such as the Prahalad Initiative at the University of Michigan and the Prahalad Center for Emerging India.\r\n\n\rHBR blogs: Five Beliefs that Inhibit Good Design \\* Design Lessons from the Consumer at the Bottom of the Pyramid \\* Using Games to Get a Handle on Bank Risk, (with Ashwin Abhyankar) \\*Why Trust Matters More than Ever for Brands \\*Leading Change in the New Normal (with Kumaar Bagrodia)\r\n\n\rSelected Keynotes: Global Peter Drucker Forum, OECD, Confederation of Indian Industry, Thailand Creative Economy Forum, Chief Learning Officers Summit, Harvard Business School, TiE.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'deepaprahalad',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Denise Pirrotti Hummel',
    jobTitle: 'Chief Innovation Officer at Lead Inclusively, Inc.',
    tags: ['Author', 'Consultant', 'Executive Coach', 'Speaker'],
    photo: 'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/p1.jpg',
    bio:
      "One of the world’s experts in organizational culture transformation, Denise has been leveraging her knowledge of human and organizational behavior from her undergraduate days at Columbia University.  She continued her journey as an attorney, using Diversity & Inclusion (D&I) as a lever for business impact.  While she is known for her role as the attorney who litigated and won the first class-action under the Americans with Disabilities Act, her career since then has been focused on the opportunity, rather than the compliance side of D&I.\n\nIn 2010, Denise founded an organizational culture consulting firm where she supported Aon-Hewitt’s international M&A people integration and built Deloitte’s success analytics for Global Mobility.  She also supported the U.S. Department of Defense to develop their cross-cultural readiness of intelligence advisors and diplomats.\n\nDenise sold her firm to Ernst & Young in 2016 and became a Principal leading “Culture, Inclusion and Innovation” initiatives for EY’s Fortune 1000 clients and developed EY's client-facing methodology for Diversity & Inclusion client engagements.  She won EY’s Annual Innovation Award the first year of her tenure.\n\nNow the Founder and Chief Executive Officer of Lead Inclusively, Inc., Denise was nominated Microsoft M12 Female Founder of the Year, for her work at the intersection of inclusion, technology and business results. In addition to the full spectrum of D&I strategy and learning, Denise’s passion and decades of work in cultivating inclusive workplaces has led her to develop the Inclusion Virtual Coach® App, designed to create and sustain culture transformation at scale.",
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'denisehummel',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Diane Ryan',
    jobTitle: 'Associate Dean at Jonathan M Tisch College of Civic Life - Tufts University',
    tags: ['Non-Profit', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Diane_ryan.jpg',
    bio:
      'Diane M. Ryan is the Associate Dean for Programs and Administration in the Jonathan M. Tisch College of Civic Life at Tufts University. As the only university-wide initiative of its kind, the mission of Tisch College is to prepare students for a\r lifetime of engagement in civic life, to study civic life and its intersections with public and private institutions, and to promote practices that strengthen civic life in the United States and around the world. Dr. Ryan oversees a portfolio of programs and curricula that service the entire undergraduate and graduate student body as well as provide resources for faculty research and professional development.\r\n\n\rPrior to joining Tufts, Diane was an Academy Professor, Director of the Eisenhower Leader Development Program with Columbia University and Acting Deputy Department Head in the Department of Behavioral Sciences and Leadership at the United States Military Academy, West Point, NY where she served for nine years. During her 29-year career as an active-duty U.S. Army officer she served in a variety of command and staff assignments both stateside and abroad.\r\n\n\rDiane is a noted expert in leader development and mentoring. During her last combat assignment with the 1st Cavalry Division in Baghdad, Iraq she founded a US-Iraqi partnership for military women and worked with a number of NGOs on peace and security initiatives. More recently she served as a strategy consultant to the Commander of U.S. Army Pacific designing leader development exchange programs for several key U.S. partners. Diane retired from the Army in 2017 at the rank of Colonel.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'diane-m-ryan-1483586',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Divya Silbermann',
    jobTitle: 'Leadership Performance Coach',
    tags: ['Author', 'Executive Coach', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Divya-Silbermann.jpg',
    bio:
      'For the last 10 years, Divya has worked in Human Resources at technology start ups, including Facebook and Eventbrite. The first HR hire at Facebook (growing the company from 200-4,000) Divya held the role of Global people programs manager and HR Business Partner to the CFO, Head of Online Sales and General Counsel. While there, she coached dozens of leaders, from young professionals at the beginning of their careers to C-level executives with decades of experience.\n\nIn 20015, Divya started Brave Coaching, a leadership coaching practice focused on helping entrepreneurs and executives who are taking on increased leadership roles for the first time. Clients include CEO’s, Directors and VP’s of Product, Growth, Engineering, Design and Marketing.\n\nDivya brings a blend of her expertise in people strategy along with several coaching models she’s learned over the years to support her clients. She is currently pursuing a certification in Integral Coaching and has been trained by the Coaches Training Institute and the Conscious Leadership Group.\n\nDivya currently lives in San Francisco.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'divyasilbermann',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Donnie Dhillon',
    jobTitle: 'Executive Leadership and Business Results Coach',
    tags: ['Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/donnie-dhillon-april-2019.jpg',
    bio:
      'Donnie is the founder and CEO of London Business Growth, a business coaching and mentoring firm based in London UK and is also partnered with the worlds number one business coaching firm ActionCOACH who coach small to medium enterprises in over 60 countries.\r\n\n\rDonnie’s core purpose is to help business owners and entrepreneurs create better results in their lives through: better use of their time, developing growth strategies, leveraged systemisation of the business operation and developing winning teams.\r\n\n\rAs an award winning business coach, he has added substantial value to his clients’ businesses both in increased revenue and decreased costs using the latest management, technological and motivational techniques obtained through his past experiences spanning several large corporates, running his own and selling businesses, and his overall passion for continuous education and growth.\r\n\n\rHis clients often achieve double and triple digit growth accomplished through improvements in strategic planning, sales & marketing, collaborative team work, systems and process development and driving the right culture across the business which not only supports but also sustains such growth whilst enhancing the customer experience, the brand and value of the business.\r\n\n\rDonnie is a natural people person and someone who easily builds strong relationships in understanding and valuing cultural differences that make each one of us unique. He understands both the bird’s eye view through to the actual plans that deliver real solutions to business problems. He has a natural ability to align others to be part of the overall journey and has a strong desire to help others to reach their true potential.\r\n\n\rHe has a passion for emerging technologies and education, having received a BSc (Hons) in Business Computing from City University, London in 1999 and MSc in Information Management from Brunel University, London in 2002. He is also a Member & Chartered IT Professional with the British Computer Society, a certified Master Practitioner in Business Neuro-Linguistic Programming (NLP) endorsed by the Society of NLP, a practitioner in Emotional Freedom Technique, Prince 2, ITIL v2/v3, Six Sigma, Lean Sigma and DISC psychometric profiling. In his spare time, he is known to be helping people in his local community and his overall passion is traveling where he aims to visit at least one new country each year.',
    links: '',
  },
  {
    coachName: 'Douglas J. Winnie',
    jobTitle: 'Speaker, Entrepreneur, Motivator, Guaranteed Results Business Coach',
    tags: ['Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Douglas-Winnie.jpg',
    bio:
      'Raised by entrepreneurs in a western suburb of Detroit, Doug learned about the fun and frequent challenges of owning a business at an early age.  Doug’s Dad had a painting business, and his Mom had a maid-service business.  Both parents had been very dedicated to build their businesses, however, the challenges for them were overwhelming.  This created a “don’t own a business” belief system which Doug overcame at an early age. \n\nDue to the family not having much money, Doug at 14, embarked on his first business experience by selling holiday greeting cards door-to-door.  Now, and over the last 30 years the early drive for success led him to become an owner of 9 businesses, an avid instrument-rated private pilot, and an accomplished world traveler, exploring over 35 countries. \n\nAfter selling two of his self-built, multi-million dollar businesses Doug began to work as an ActionCOACH Business Coach in 2009.  While teaching from his experience has great value, the greatest value he has provided is the use of the ActionCOACH systems to cause his clients to have massive success.  Doug has received over 30 awards for himself and for his clients all based on the results he has obtained.\n\nEarning the designation PMP (Project Manager Principal) per the requirements of the Project Management Institute has been beneficial in following processes and procedures and all the systems which franchises create.  The ability to “copy-paste”, as Doug likes to refer, is a skill which has helped benefit Doug as a franchisee.   \n\nThe designation MG100 is a special recognition of being awarded membership in a very elite, 100-person organization, called the Marshall Goldsmith 100 Coaches.  Each member of the organization has been handpicked by Marshall Goldsmith (#1 Thinkers 50, NY Times Best Selling Author, Internationally known speaker, and professional known as the #1 Executive Coach, with clients including the CEO of Ford, CEO of Boeing, President of Google Americas, CEO of Hershey, President & CEO of The World Bank, etc.)  Each member of the MG100 has committed to providing free education and mentorship upon reaching retirement, just as Marshall is providing for the MG100. \n\nDoug is very passionate about helping the family business owner become more successful.  Doug’s #1 business belief is that “no one should have to live a life of struggle like my parents did.  If they own a business where the market exists, they only need to learn how to work on their business instead of in their business.  The limitations of youth, including poverty, are no match to the education available and opportunity to be successful in a world economy.”  Family businesses are the core foundation of every country in the world – families should have happier lives because of the lifestyle a successful business brings and Doug achieves this through his coaching programs. \n\nDoug has reached the Million Dollar Coach Level, inducted in to the ActionCOACH Hall of Fame, and has been selected to be the Chairman of the ActionCOACH Foundation. \n\nDoug’s selection to be the Chairman of the Foundation is based on both his experience as an entrepreneur and because of his passion to help young adults become entrepreneurs, just like himself.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'americassmallbusinesscoach',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Edy Greenblatt',
    jobTitle: 'Resilience Pioneer, Embodied Leadership, Coach Supervisor',
    tags: ['Author', 'Consultant', 'Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Edy-greenblatt.jpg',
    bio:
      'Dr. Edy Greenblatt, PCC  is a transformational coach-educator, resilience pioneer, integration visionary, and entrepreneur.  As Founder and President of Execu-Care Coaching & Consulting, Inc. she creates radically innovative interdisciplinary, multi-method interventions that help leaders, teams, and organizations learn, grow, laugh, and energize while they rise to meet demanding performance goals.  Her Blended Solutions can include interactive classroom sessions, aerial arts and flying trapeze, embodied and peer coaching, world dance, WATSU, coach supervision, interactive online support, and offsite resilience retreats. \r\n\n\rConcurrently, she is faculty at two of the world’s top executive education institutions – Center for Creative Leadership and the DeSautels Centre for Integrative Thinking at the Rotman School of Management, University of Toronto.  Previously, Dr. Edy served on faculties at UCLA and USC’s Marshall School of Business and as a management consultant and organizational practice specialist at McKinsey & Co..\r\n\n\rDr. Edy holds a joint Ph.D. in Organizational Behavior from Harvard Business School and Harvard University (Psychology & Sociology), master’s degrees in Dance Ethnology (UCLA) and Psychology (Harvard), and a bachelor’s degree in World Arts & Cultures/Dance (UCLA). \r\n\n\rHer pioneering research at Harvard and subsequent award-winning book Restore Yourself:  The Antidote for Professional Exhaustion (on resilience and energy in 24/7 work environments) have shaped team effectiveness, organizational results, women’s leadership, and strategic HR initiatives at companies such as McKinsey & Co., DaVita Healthcare, and Mattel.\r\n\n\rDr. Edy is an entertaining and sought-after speaker, change agent, coach, and coach supervisor, dividing her time between Santa Monica (USA), Ra’anana (Israel), and Toronto (Canada).  In her free time, she mentors children, dances, swims, studies WATSU and aerial silks, and, more often than one might expect, sleeps.  She is currently launching the Strategic Vacation project, which aligns the needs of leaders, work teams, families, corporate finances, and the global travel and tourism industry to improve everyone’s well-being and bottom line. She is committed to helping heal the world through integrating and energizing mind and body.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'dredygreenblatt',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Eric Schurenberg',
    jobTitle: 'CEO at Mansueto Ventures',
    tags: ['Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Eric-Schurenberg.jpg',
    bio:
      'Eric Schurenberg is the president and editor-in-chief of Inc. Before joining Inc, Eric was the editor of CBS MoneyWatch.com and BNET.com and managing editor of Money Magazine. As a writer, he is a winner of a Loeb and a National Magazine Award.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'ericschurenberg',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Everett Alexander',
    jobTitle: 'Chief Investment Officer',
    tags: ['Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/screen-shot-2018-12-13-at-5.13.33-pm.png',
    bio:
      'Everett Alexander is the Chief Investment Officer (CIO) of a single-family office, where his responsibilities include directing the family’s investments in public and private equity.\r\n\n \rEverett holds an MBA in Finance from the Wharton School, an MA in International Studies from The Lauder Institute and a BA in Asian Studies from Williams College.\r\n\n\rDrawing by Ayse Birsel',
    links: '',
  },
  {
    coachName: 'Feyzi Fatehi',
    jobTitle: 'CEO, Corent Technology, Inc.',
    tags: ['Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Feyzi-Fatehi.jpg',
    bio:
      'Feyzi Fatehi is a technology visionary, inventor, innovator and entrepreneur. As a Silicon Valley veteran of a Fortune 100 and multiple disruptive technology start-ups, he currently serves as the CEO of Corent Technology – a company that was named among the 10 Most Valuable Cloud Solution Providers in 2017.\r\n\n\rFeyzi has studied at Cambridge, Princeton, UT Austin and UCLA and has given talks at Harvard Business School, Wharton, Stanford and around the globe. He was recognized as 2017 Entrepreneur of the Year by the Orange County Business Journal.\r\n\n\rAs an avid supporter of education, Feyzi serves as an advisor to UCLA Anderson School of Management, UC Irvine Samueli School of Engineering, and the Beall Center for Innovation and Entrepreneurship. He also serves as a CEO mentor and coach at two California technology incubators: EvoNexus and the UCI Applied Innovation Institute.\r\n\n\rFeyzi has been interviewed and quoted by Harvard Business Review, Forbes, CEO Magazine, and Start-up Grind – Google for Entrepreneurs, on the topics of 10X innovation, and his entrepreneurship philosophy – an integrated leadership framework for life and business.\r\n\n\rFeyzi lives in Laguna Niguel, California, and is currently working on three books: The Soft Skills Are the Hard Skills; “What” Got You Here, “How” will Get You There! and Inspiring the Culture of 10X Innovation and Entrepreneurship Within Any Organization. He is a sought-after speaker on these topics and as a coach and mentor to entrepreneurial CEOs.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'feyzifatehi',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Fiona M. Macaulay',
    jobTitle: 'Women in Innovation and  Leadership Expert',
    tags: ['Consultant', 'Entrepreneur', 'Speaker', 'Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/fiona_macaulay_podium.jpg',
    bio:
      'Fiona M. Macaulay is professional speaker, entrepreneur and educator who inspires people to make their greatest contribution to the world - and empower others to do the same.  \r\n\nNamed as one of the top 1% of U.S. female business owners to scale her business to multi-million annual revenues (while maintaining a double bottom-line!), Macaulay runs an MBA leadership clinic, and is a Professor of Entrepreneurship at Georgetown University’s McDonough School of Business. She has also lectured at Columbia University in NYC, and the John Hopkins School for Advanced International Studies in Washington DC. A recognized thought-leader, Macaulay has appeared in the New York Times, writes a monthly column for Inc.com, is a TEDx speaker.\r\n\nMacaulay is the Founder of the WILD Network (Women Innovators and Leaders Development Network), to support social innovators to have even greater impact and to enjoy the ride. She convenes the internationally recognized Women in Global Development Leadership Forum (Next taking place May 6, 2020, in Washington DC www.WILDLeadershipForum.org), the first and largest conference of its kind. \r\n\nMacaulay supports successful women to have greater impact through her speaking engagements, targeted courses and leadership coaching. The topics of her engaging and insightful key-notes include: “Power, and Empowering Others”, “Design Thinking for Women Leaders”, and “The Entrepreneur’s Secret to Being a Great Leader”. Macaulay’s audiences learn how to deepen, and expand their leadership role within their organization, and leave the room feeling inspired and ready to take action. \r\n\nMacaulay has delivered talks and courses in 40 countries, and she’s a fluent French speaker. Her messages, and examples resonate with a global audience. \r\n\nFollow her on twitter: @F_Macaulay and connect via www.Linkedin.com/in/FionaMacaulay',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'fionamacaulay',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Frank Wagner',
    jobTitle: 'Marshall Goldsmith Stakeholder Centered Coaching',
    tags: ['Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/frank-wagner.jpg',
    bio:
      'Frank’s consulting career started at The Center For Leadership Studies with Paul Hersey in the late 1970’s. He then became a partner and director at Keilty, Goldsmith & Boone. With Marshall Goldsmith, Frank co-developed the highly successful Excellent Manager Program originally for IBM, and then many other Fortune 100 Companies. Marshall asked Frank to oversee the design and training of coaches in using his principles and methods of helping successful leaders improve.\r\n\n\rHe has written: The Power of Total Commitment; and is lead author for: The Stakeholder Centered Coach’s Playbook; and, The Team Stakeholder Centered Coaching Playbook.\r\n\n\rFor more information visit his website at: frank.sccoaching.com',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'coachfrank',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Fred Hassan',
    jobTitle: 'Managing director with Warburg Pincus & Chairman of Claret Group',
    tags: ['Corporate Executive', 'Iconic Leader'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/fred-hassan.jpg',
    bio:
      'Fred Hassan is based in Boca Raton, Florida and works as Special Limited Partner at Warburg Pincus, New York. Mr. Hassan was Chairman of Bausch & Lomb, until its sale in 2013, and serves on the board of Time Warner, Amgen and Intrexon. \r\n\n\rMr. Hassan is the former Chief Executive Officer and Chairman of the Board of Schering-Plough Corporation. Prior to joining Schering-Plough in April 2003, he was Chairman and Chief Executive Officer of Pharmacia Corporation, a company that was formed in March 2000 as a result of the merger of Monsanto and Pharmacia and Upjohn.  Mr. Hassan joined Pharmacia & Upjohn as Chief Executive Officer in 1997.  Previously, he was Executive Vice President of Wyeth with responsibility for its pharmaceutical and medical products businesses, and was elected to Wyeth’s board in 1995.  Earlier in his career, Mr. Hassan spent 17 years with Sandoz Pharmaceuticals (now Novartis) and headed its U.S. pharmaceuticals business. \r\n\n\rHe received a B.S. degree in chemical engineering from the Imperial College at the University of London and an M.B.A. from Harvard Business School.  Mr. Hassan has chaired significant pharmaceutical industry organizations including The Pharmaceutical Research and Manufacturers of America (PhRMA) and The International Federation of Pharmaceutical Manufacturers Associations (IFPMA). \r\n\n\rMr. Hassan’s book, “Reinvent, A Leader’s Playbook for Serial Success,” was published by Wiley in February 2013.',
    links: '',
  },
  {
    coachName: 'Gabriela Teasdale',
    jobTitle: 'Author, Coach & Trainer',
    tags: ['Executive Coach', 'Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Gabriela-Teasdale.jpg',
    bio:
      'Gabriela Teasdale is the President at Fundación Transformación PY. Transformation Paraguay is a non profit organization that works with The John Maxwell leadership foundation in a national project in Paraguay. The objective of this social initiative is to train 10% of the population in values and leadership principles. We do the training in the seven strengths of a country, government, business, education, culture, media, religion and family. The slogan of the project is “transformation is in me” because we believe that if you can transform yourself you can transform your country.\r\n\n\rGabriela also serves as the CEO of Paraguay Leadership Team. As owner and director of Paraguay Leadership Team, a professional Training, Coaching & Communication business in Paraguay, Gabriela works with The John Maxwell Team and Equip Leadership Inc. She represents JMT and Equip Leadership in Paraguay, and provides professional development and leadership training.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'gabriela-teasdale-63056950',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Garry Ridge',
    jobTitle: 'WD-40 Company CEO - Leader, Author, Mentor, Coach',
    tags: ['Author', 'Corporate Executive', 'Iconic Leader', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Garry-Ridge.jpg',
    bio:
      'Marshall Goldsmith Certified Coach, Leader, author, mentor, coach.\r\n\n\rGarry Ridge joined WD-40 Company in 1987 and held various leadership positions their before being appointed CEO in 1997. He is also an adjunct professor at the University of San Diego where he teaches leadership development, talent management & succession planning. He believes that in the long term, values are arguably the most important aspect of working at WD-40 Company. In 2009, he co-authored a book with Ken Blanchard titled “Helping People Win at Work: A Business Philosophy called “Don’t Mark My Paper, Help Me Get an A.”\r\n\n\rA native of Sydney, Mr. Ridge holds a certificate in Modern Retailing and wholesale distribution and a Master of Science in Executive Leadership from the University of San Diego.\r\n\n\rWebsite – www.thelearningmoment.net',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'garryridge',
      twitter: 'learningmoment',
      website: 'https://thelearningmoment.net/blogs/',
    },
  },
  {
    coachName: 'George Daley',
    jobTitle: 'Dean of the Faculty of Medicine at Harvard Medical School',
    tags: ['Corporate Executive', 'Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/george-daley.jpg',
    bio:
      'George Q. Daley, MD, PhD is Dean of Harvard Medical School and the Caroline Shields Walker Professor of Medicine. He is also Professor of Biological Chemistry and Molecular Pharmacology. Prior to becoming Dean he was the Robert A. Stranahan Professor of Pediatrics and director of the Pediatric Stem Cell Transplantation Program at Dana-Farber/Boston Children’s Cancer and Blood Disorders Center and a Howard Hughes Medical Institute investigator.\r\n\n\rDaley received his AB, magna cum laude, from Harvard (1982), a PhD in biology from MIT (1989), working with Nobel laureate David Baltimore, and his MD, summa cum laude, from Harvard Medical School (1991). Daley pursued clinical training in internal medicine at Massachusetts General Hospital, where he served as chief resident (1994-1995), and a clinical fellowship in heme/onc at Brigham and Women’s Hospital and Children’s.\r\n\n\rHe was a founding executive committee member of the Harvard Stem Cell Institute, served as president of the International Society for Stem Cell Research (2007-2008), and anchored the special task forces that produced the society’s guidelines for stem cell research and clinical translation (2006, 2008, 2016). Daley’s research uses mouse and human disease models to study cancer and blood disorders.\r\n\n\rDaley has been elected to the National Academy of Medicine, the American Society for Clinical Investigation, the American Association of Physicians, the American Pediatric Societies, the American Academy of Arts and Sciences and the American Association for the Advancement of Science. He was an inaugural winner of the NIH Director’s Pioneer Award, and has won the E. Donnall Thomas Prize of the American Society of Hematology.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'george-q-daley-md-phd-9528718',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Gianpiero Petriglieri',
    jobTitle: 'Associate Professor of Organisational Behaviour at INSEAD',
    tags: ['Author', 'Executive Coach', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/gianpiero-petriglieri.jpg',
    bio:
      'Gianpiero Petriglieri is Associate Professor of Organisational Behaviour at INSEAD. A medical doctor and psychiatrist by training, his award-winning research, teaching, and coaching focus on what it means, and what it takes, to become a leader.\r\n\n\rHis work is particularly concerned with helping people live, lead, and learn in the age of “nomadic professionalism,” in which many of us have deep bonds to our work but loose affiliations to our organizations, and authenticity and mobility have replaced loyalty and advancement as hallmarks of virtue and success.\r\n\n\rBuilding on his research, Gianpiero has refined a unique approach to experiential leadership development that aims to deepen and accelerate the development of individual leaders as well as to broaden and strengthen leadership communities within and across organisations. At INSEAD, he directs the Management Acceleration Programme, the school’s flagship executive programme for emerging leaders, and chairs the initiative for Learning Innovation and Teaching Excellence.\r\n\n\rGianpiero has chaired the World Economic Forum’s Global Agenda Council on new models of leadership, and was recently named one of the 50 most influential management thinkers in the world by Thinkers50. His research appears in top academic journals and he writes regularly for the Harvard Business Review,  where his essays have been included among the “ideas that shaped management” for four of the past five years. \r\n\n\rAlongside the Management Acceleration Programme, Gianpiero directs customized leadership development programmes for multinationals in a variety of industries. He also speaks widely on how to develop and exercise leadership in fast-changing, uncertain and diverse workplaces.\r\n\n\rYou can find out more on his website, and follow him on Twitter and LinkedIn.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'gpetriglieri',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Gregory Enjalbert',
    jobTitle: 'Vice President and Managing Director',
    tags: ['Author', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/gregory_enjalbert.jpg',
    bio:
      'genjalbert@hotmail.com\r\n\nSummary\r\n\nRailway industry executive with a varied experience in strategy, business development, M&A, project management and general management.\r\n\nMy current focus is on enabling our organisation to deliver railway projects that will help improve people’s life with a more convenient and efficient time spent moving from A to B. This we do through improving efficiency of our work, developing enabling technologies, coaching/mentoring our people, and increasing the diversity of our team.\n\nExperience\r\n\nVice-President Rail Control Solutions Asia-Pacific at Bombardier Transportation\r\n\nApril 2013 – Present\r\n\nGeneral management of Bombardier signalling business in Asia-Pacific\r\n\n\r\n\nHead of Rail Control Solutions China at Bombardier Transportation\r\n\nSeptember 2011 – April 2013 (1 year 8 months)\r\n\nGeneral management of mainline and mass transit signalling business in China. Involves sales, project management and P&L responsibility.\r\n\n\r\n\nDirector Mainline Projects China at Bombardier Transportation\r\n\nJanuary 2010 – September 2011 (1 year 9 months)\r\n\nResponsible for project execution of all CTCS-3 (ETCS Level 2) signalling projects in China Responsible for sales and business development of CTCS-3 (ETCS Level 2) signalling system in China\r\n\n\r\n\nProject Director, WuGuang DPL at Bombardier Transportation\r\n\nNovember 2008 – February 2010 (1 year 4 months)\r\n\nImplementation of an ERTMS Level 2 signalling system for a 1000 km line between Wuhan and Guanghzou in China.\r\n\n\r\n\nProject Manager, Wu-Guang DPL at Bombardier Transportation\r\n\nNovember 2007 – October 2008 (1 year)\r\n\nProject manager for transfer of technology and training of a high speed signalling project from Wuhan to Guanghzou in China.\r\n\n\r\n\nMergers & Acquisitions, Strategic Partnerships at Bombardier Transportation\r\n\nOctober 2006 – October 2007 (1 year 1 month)\r\n\n– Summary: development, implementation and monitoring of M&A and divestiture activities to fulfill the company’s external growth objectives\r\n\n– Lead a three months project to identify the top signaling targets for acquisition worldwide\r\n\n– Created the company M&A roadmap outlining the strategic objectives supported by the M&A activities\r\n\n– Completed successfully various transaction approval stages within the corporation for a number of targets – Lead the creation of two joint ventures and one acquisition\r\n\n\r\n\nManager, Services & Products Business Development at Bombardier Transportation\r\n\nJanuary 2006 – October 2006 (10 months)\r\n\n– Summary: in charge of business development for one of three business streams within the signaling division. The role encompassed order intake, revenues and profitability targets through regional sales coordination\r\n\n– Oversaw best ever year for the business stream in terms of order intake, revenues and margin\r\n\n– Successfully implemented a new business plan to establish the business stream as a core revenue and profitability generator\r\n\n– Coordinated a team of regional sales worldwide to deliver a challenging order intake target\r\n\n– Coordinated the creation of a new product and branding structure for the business to simplify and improve communication to customers\r\n\n\r\n\nManager Strategy & Marketing Services and Products at Bombardier Transportation\r\n\nNovember 2004 – December 2005 (1 year 2 months)\r\n\n– Summary: in charge of providing management with clear strategies and development opportunities for the Services & Products business stream\r\n\n– Lead the development and implemented a new streamlined and customer focused product planning process through Six Sigma projects\r\n\n– Developed an entirely new business plan for the Services & Products business stream outlining future areas of growth and organizational needs\r\n\n– Participated in the strategic planning process as lead for the Services & Products business stream, outlining the strategic objectives and order intake targets for a three year plan\r\n\n\r\n\nSenior Analyst Product Planning at Bombardier Transportation\r\n\nJuly 2003 – November 2004 (1 year 5 months)\r\n\n– Summary: assigned to special projects for the Vice-President Strategy, Markets and Product Planning and other company divisions\r\n\n– Prepared a Confidential Information Memorandum and business presentation to preferred bidders for divestiture project\r\n\n– Prepared extensive benchmarks on two railway industry competitors\r\n\n– Project lead for Propulsion division business case regarding identification of alternative low-cost production sites in Poland or India\r\n\n– Delivered headcount reduction analysis for company-wide reorganization and right-sizing initiative – Prepared the filing to European Commission for a competitor’s government subsidies case\r\n\n\r\n\nAnalyst, Competitive Analysis at Bombardier Transportation\r\n\nJanuary 2002 – July 2003 (1 year 7 months)\r\n\n– Summary: responsible for providing best practice in competitive analysis to divisions and provide senior management with global understanding of competitive environment.\r\n\n– Created the Bombardier Transportation Integrated directive on Competitive Benchmarking\r\n\n– Developed Cactus 2002 competitors’ database through cooperation with divisions\r\n\n– Assessed of consultant operator’s model in cooperation with division Intercity\r\n\n– Delivered various presentations and special projects for VP Marketing and Product Planning including Risk\r\n\n\r\n\nManagement presentation, filing to European Commission for LUL case and Quarterly Senior Management Meeting presentations\r\n\n\n\nTrainee at Bombardier Aerospace\r\n\nFebruary 2000 – March 2001 (1 year 2 months)\r\n\nTrainee at Bombardier Aerospace Regional Aircraft division.\r\n\nWorked in three different departments:\r\n\nCustomer Service Account Management: assistant manager.\r\n\nMaintenance Engineering: special projects for Director Maintenance Engineering Market and Industry Analysis: market analyst\n\nEducation\r\n\nRouen Business School\r\n\nMSc., Business Administration, 1998 – 2001\r\n\nUniversity of Paris I: Panthéon-Sorbonne\r\n\nMaster, Economics, 1993 – 1997',
    links: '',
  },
  {
    coachName: 'Hal Gregersen',
    jobTitle: 'Executive Director MIT Leadership Center',
    tags: ['Author', 'Non-Profit', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/hal-gregersen.jpg',
    bio:
      'Hal Gregersen is Executive Director of the MIT Leadership Center and a Senior Lecturer in Leadership and Innovation at the MIT Sloan School of Management where he pursues his vocation of executive teaching, coaching, and research by exploring how leaders in business, government, and society discover provocative new ideas, develop the human and organizational capacity to realize those ideas, and ultimately deliver positive, powerful results.\r\n\n\rHe is a Senior Fellow at Innosight and a former advisory board member at Pharmascience, a privately held pharmaceutical company based in Montreal, Canada. Before joining MIT, he taught at INSEAD, London Business School, Tuck School of Business at Dartmouth College, Brigham Young University, and in Finland as a Fulbright Fellow.\r\n\n\rGregersen’s most recent book, The Innovator’s DNA: Mastering the Five Skills of Disruptive Innovators, flows from a path-breaking international research project (with Jeff Dyer & Clayton Christensen). They explored where disruptive innovations come from by interviewing founder entrepreneurs and CEOs at 100+ of the most innovative companies in the world and by assessing how 8,000+ leaders leverage five key innovation skills to create valuable new products, services, processes, and businesses.\r\n\n\rTo grasp how leaders find and ask the right questions – ones that disrupt the world – Gregersen is now studying 100+ renowned business and government leaders. This question-centric project, conducted in collaboration with Clayton Christensen, is surfacing insights into how leaders build better questions to unlock game-changing solutions. Gregersen is also founder of The 4-24 Project, an initiative dedicated to rekindling the provocative power of asking the right questions in adults so they can pass this crucial creativity skill onto the next generation.\r\n\n\rGregersen has co-authored ten books and published over 50 articles, book chapters, and cases on leading innovation and change. His research has been highlighted in global media such\r\n\nas BBC, CNN, The Economist, Fast Company, Financial Times, Forbes, Fortune, Inc., The New York Times, and The Wall Street Journal. He has received several awards for his cutting edge work, including: 2013 Thinkers50 Innovation Award Nominee, 2012 Chartered Management – British Library Book of the Year Award for Innovation and Entrepreneurship, and the 2009 McKinsey Award runner-up for the best article in Harvard Business Review.\r\n\n\rPutting his research to practice, Gregersen regularly delivers high impact keynote speeches and executive workshops with companies like Accenture, Adidas, AT&T, Christie’s, Coca-Cola, Daimler, Danone, Genentech, IBM, Intel, Johnson & Johnson, LG, Lilly, McAfee, Marriott, MasterCard, Sanofi Aventis, SAP, Vivendi, WalMart, World Economic Forum, & Yahoo! He also works with governments, not-for-profit and NGO organizations to generate greater innovation capabilities in the next generation of leaders.\r\n\n\rGregersen has lived and worked outside the United States for over a decade – in England, Finland, France, and the UAE. He and his wife now reside in Boston where he pursues his lifelong avocation, photography, and she her lifelong love, painting.\r\n\n\rMore information about Gregersen and his work can be found at www.halgregersen.com and www.sternspeakers.com.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'halgregersen',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Harry Kraemer',
    jobTitle: 'Author, Professor & Executive Partner',
    tags: ['Corporate Executive', 'Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Harry-Kraemer.jpg',
    bio:
      'HARRY M. JANSEN KRAEMER, JR. is an executive partner with Madison Dearborn Partners, a private equity firm based in Chicago, Illinois and a Clinical Professor of Management and Strategy at Northwestern University’s Kellogg School of Management. He was named the 2008 Kellogg School Professor of the Year. Harry is the author of two bestselling leadership books: “From Values to Action: The Four Principles of Values-Based Leadership” and “Becoming The Best: Build a World-Class Organization Through Values-Based Leadership”.\r\n\n\rHe is the former chairman and chief executive officer of Baxter International Inc., a $12 billion global healthcare company. He became Baxter’s chief executive officer in January 1999, and assumed the additional responsibility of chairman of Baxter’s board of directors in January 2000. \r\n\n\rMr. Kraemer joined Baxter in 1982 as director of corporate development.  His twenty three year career at Baxter included senior positions in both domestic and international operations.  In 1993, he was named senior vice president and chief financial officer, responsible for financial operations, business development, global communications, and European operations.  Over the next several years, he assumed additional responsibility for Baxter’s Renal and Medication Delivery businesses. He was elected to Baxter’s board of directors in 1995, and was named president of Baxter International Inc. in 1997.\r\n\n\rBefore joining Baxter, Mr. Kraemer worked for Bank of America in corporate banking and for Northwest Industries in planning and business development.\r\n\n\rMr. Kraemer is active in business, education and civic affairs.  He serves on the board of directors of Leidos Corporation, Sirona Dental Systems , VWR International, Sage Products Inc., and Catamaran Corporation and on the board of trustees of Northwestern University, The Conference Board, NorthShore University Healthsystem and the Archdiocese of Chicago Finance Committee and School Board.\r\n\n\rHe is a member of the Dean’s Global Advisory Board of Northwestern University’s Kellogg School of Management. He is a member of the Commercial Club of Chicago, the Chicago Council on Global Affairs, and the Economics Club of Chicago. He is a past member of the Business Roundtable, the Business Council, and the Healthcare Leadership Council.\r\n\n\rMr. Kraemer graduated summa cum laude from Lawrence University of Wisconsin in 1977 with a bachelor’s degree in mathematics and economics.  He received an MBA degree in finance and accounting from Northwestern University’s Kellogg School of Management in 1979 and is a certified public accountant.  For his outstanding leadership and service, he received the 1996 Schaffner Award from the Kellogg School of Management.  Harry enjoys jogging, tennis, skiing and reading, especially world civilization.  Harry, his wife Julie, and their five children live in Wilmette, Illinois. More info on Harry at www.harrykraemer.org .',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'harrykraemerjr',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Himanshu Saxena',
    jobTitle: 'CEO, Centre of Strategic Mindset',
    tags: ['Corporate Executive', 'Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Himanshu Photo I.jpg',
    bio:
      'Himanshu is the Founder & CEO of Center of Strategic Mindset (COSM ™), a Thought Leadership and Consulting organization, focused on advising boards on Strategy, People and Risk. He is a C-Suite Executive Coach who works with Promoters, Boards, CXOs and top leaders in the disciplines of managing strategy, driving execution; implementing Balanced Scorecard and developing top leadership. In the past, he has been the Advisor and Coach in Residence with two leading Pharma businesses. He is currently consulting a Big 4, a large Indian Global conglomerate, a leading financial company, a chemical company, a logistics company and many more. Prior to COSM, he headed Strategy Alignment, Balanced Scorecard and Leadership Development at Tata Consultancy Services (TCS). He instituted an integral coaching model based on Eastern & Western Philosophy.  At TCS, he was responsible for making Strategy Everyone’s Job, strengthening organic Leadership and driving culture of coaching. He successfully implemented Balanced Scorecard and won TCS the Balanced Scorecard Hall of Fame Award, for strategy execution. He was also recognized as BSC Professional of the year 2012 by Dr. Robert Kaplan & David Norton. Himanshu was also appointed as the Business Coach for ‘Industry Vertical Heads’ for a Global Innovation Program under Prof Vijay Govindarajan, Tuck School of Business. Himanshu’s three most significant organizational pursuits included expanding the ‘Imagination of the Organization’ developing ‘Strategic Thinking’ among Top Leaders’ and enabling ‘Big Picture Envisioning’. Himanshu excels in Scenario Planning, War Gaming and Art of Questioning for future creation. He operates at the intersection of strategy, leadership & coaching, a rare differentiator. He has excellent mindshare with leading management thinkers such as Gary Hamel, Vijay Govindarajan, Marshall Goldsmith, Roger Martin and Joel barker and has co-authored blogs and articles with some of them. With more than 3000 coaching hours with senior leaders, he is a sought-after coach and key-note speaker. He has coached a large number of top leaders, CEOs & MDs of different organizations, globally. \n\nHimanshu has driven multiple and significantly-complex transformation initiatives leading to customer experience. As a change architect, he has the knack of ascertaining the hidden intricacies pertaining to people, processes and systems that impacts the productivity as well as operational excellence. Prior to TCS, Himanshu founded Mavrik Consulting focused on Strategy, Leadership Development & Leading Change. The journey of entrepreneurship was preceded by significant tenures in United Nations International Staff (Chief People Officer in UN, Africa), Armed Forces and a short stint as a Geologist, at the beginning of his career. In his 29 years of journey, he has held significant leadership assignments in Strategy, Operations and Leadership Development. He holds Masters in Strategy, Geology and is an MBA in International Business from IIFT, Delhi. His accreditations include: –\n\n* \n\nDesign Thinking from HPI (Hasso Plattner Institute), Potsdam Germany\n\n* Certified Independent Director from Directors Club\n* Certified C-Suite Executive Coach\n* Global Innovation Leadership & Leadership and Strategic Impact, Tuck Business School\n* Developing Global Business Strategy, Wharton Leadership Program\n* Blue Ocean Strategy, Blue Ocean Institute, Insead\n* Balanced Scorecard, Palladium (Kaplan – Norton)\n* Leadership Architect & Hi-Pot Master Class from Lominger, Korn/Ferry International\n* Crucial Conversation, Vital Smarts\n\nHe is a constant learner, practice-leader & a prolific speaker on Strategy, Leadership, Innovation; Paradigms; Organizational Immunity and Leading Change. He is a regular speaker at GE-Tuck Leadership Roundtable at Crotonville, Bloomberg; GE Digital Learning Summit and many other global summits. He also advises Ivey League institutions on curriculums for Executive Education, based on his industry insights. He regularly writes in leading journals & portals, delivers key note address in global forums and teaches as a visiting faculty in leading B-Schools.  Himanshu is now committed to replicate above success in organizations seeking aspirational growth; scale-expansion and reinvention and/or the ones that are struggling with issues that are hampering it.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'himanshursaxena',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Hortense le Gentil',
    jobTitle: 'Executive Leadership Coach',
    tags: ['Consultant', 'Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Hortense Le Gentil.jpg',
    bio:
      'Hortense le Gentil is the President and Founder of JAY Consulting. She works with decision makers in the business world, supporting them in their development and leadership by using their Personal Identity as an instrument of behavioral progress.\r\n\n\rBorn in 1965, Hortense studied in Boston (United States), where she graduated from Northeastern University with a degrees in Marketing and Human Behavior.\r\n\n\rShe returned to France in 1986 and occupied the position of Media Manager at Havas Worldwide until 1996. After spending two years at High Co, bellwether of new technologies, she worked in the advertising department at Lagardère Media from 1999 to 2003, before joining the Express-Roularta group, where she did similar work until 2006.\r\n\n\rIn 2007, she took up the challenge of industrial entrepreneurship. She founded HLG Management and its subsidiary Optimum Cement, a firm specializing in the recycling of metals for niche professions. She developed an innovative process of transforming residues into compact and neutral ores that can be recovered and reused for the production of superalloys. She was chosen as a member of the European Commission Reslag for her expertise.\r\n\n\rStrengthened by these professional experiences and by her stamina as a former high-level horse rider, representing France in the 1980s in international show jumping, Hortense le Gentil simultaneously pursued her passion in the Humanities, which inspired her studies in the United States. She continued to closely monitor developments in neuroscience, personal development, and cognitive and behavioral sciences.\r\n\n\rAs a result, she started her own consulting firm in 2013, JAY Consulting, and now exclusively dedicates her efforts to the coaching of decision makers and entrepreneurs, as well as senior executives. Her work seeks to develop their leadership abilities and reinforce their intuitive faculties through different mental techniques. As a result, she promotes better perception of both professional and personal environments, which enables improved efficiency in action and decision-making.\r\n\n\rIn conjunction with her consulting business, she regularly participates in public discussion via conferences and published articles.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'hortense-le-gentil-0a712a3',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Howard Morgan',
    jobTitle: 'Managing Director at Leadership Research Institute',
    tags: ['Author', 'Executive Coach', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/howardmorgan.jpg',
    bio:
      'As an executive coach, Howard Morgan has worked with international executives to successfully drive organizational change initiatives. He was named as one of the 50 top coaches globally, has been recognized as one of five coaches with “a proven track record of success” and has published several books. \r\n\n\rHoward has worked with over 1000 CEO and Executive Team members from more than 50 countries and from a diverse industry base including Chemical, Information Technology, Financial Services, Media, Retail and Real Estate.  His work with these teams and individuals has become focused in recent years on two main practice areas.  First, he helps leaders improve corporate and executive performance through maximizing their leadership potential within diverse international teams/groups.\r\n\n\rSecond, he helps executives transition to new organizations/roles with the maximum impact and the minimum of disruption.  Howard’s profound understanding of executive leadership comes from 17 years as a line executive and executive vice president in the consumer goods, telecommunication, government and healthcare industries. He has operated major businesses with full profit and loss responsibility; managed the people side of mergers and acquisitions; led international expansions and start-ups; and gained the respect of unions and corporations when negotiating agreements in volatile labor environments. He knows what it means to structure an organization, lead people and manage a business to exceed quarterly objectives. This practical background, along with an understanding of the politics of leadership and the competitive pressures of today’s global marketplace, is reflected in the roll-up-your-sleeves coaching style he utilizes with executives.\r\n\n\rHoward is one of the founders of HRM Possibilities (with Marshall and Ron Campbell) and Founding Partner of the 50 Top Coaches organization. He specializes in executive coaching as a strategic change management tool leading to improved customer / employee satisfaction and overall corporate performance. He has worked with the executive committees of many the worlds’ largest organizations. Howard holds an MBA from Simon Fraser University and has completed advanced studies at the University of Michigan. He currently serves on three Boards of Directors and can be reached at howardjmorgan.com',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'howard-morgan-5118389',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Howard Prager',
    jobTitle: 'Certified Executive Coach Leadership consultant',
    tags: ['Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Howard-prager.jpg',
    bio:
      'Howard Prager is Senior Leadership and Change Strategist for the Association of College and Research Libraries (www.ala.org/acrl) and President of Advance Learning Group, a learning and leadership consulting firm (advancelearninggroup.com)\r\n\n\rHoward has broad experience in all phases of training assessment, design, development, implementation and evaluation as well as OD, mentoring and coaching. A thought leader in leadership development, his article on “How can we fix the leadership crisis?” was lead article in the March 2016 Talent Development Journal. He is a contributing author to the first ASTD Workplace Learning and Development Handbook and recently Finding the Fortune by Jean MacDonald and Christine Schaefer. He also created the Team Banquet, a highly-regarded experiential team building exercise used globally. (teambanquet.com)\r\n\n\rHoward has won several awards for measurable results of leadership, customer service, and organizational change as a leader of executive education at the University of Notre Dame and the Lake Forest Graduate School of Management including the ATD Excellence in Practice award, Optimas Award, Corporate University Xchange Awards, and the European Foundation for Management Development (EFMD) Excellence in Practice Award. His management of complex projects and strengths in learning helped clients including Allstate, City of New York, Chicago Police Academy, Exelon Generation, Federal Reserve Bank of Chicago, HSBC, Hollister, IACET, Infosys, Rosalind Franklin University, Simonton Windows, Spencer Stuart, Temple Chai.\r\n\n\rA lead training certificate assessor for the American National Standards Institute (ANSI), Howard serves as a judge for the Association for Talent Development (ATD) Excellence in Practice awards and is a frequent speaker at conferences. Howard earned his MBA from the University of Michigan in Organizational Behavior and BA in Psychology from Northwestern University, with 360 certifications from the Hartman Institute, Human Synergistics Lifestyle Inventories, and completed the Return on Investment (ROI) workshop. He is an Eagle Scout and active in the Boy Scouts of America, Northwestern Alumni Association and plays tuba with the Northwest Concert Band and The Royal Blue Tinkertoy Dixieland Band. His motto is “anything is possible.”',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'hprager',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Hubert Joly',
    jobTitle: 'Chairman and CEO of Best Buy',
    tags: ['Corporate Executive', 'Iconic Leader'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/hubert-joly.jpg',
    bio:
      'Hubert Joly is chairman and CEO of Best Buy Co. Inc., the leading provider of consumer technology products and services, with approximately 125,000 employees in North America and approximately $40 billion in annual revenue.\r\n\n\rMr. Joly joined Best Buy in 2012 and led the company through its much publicized Renew Blue transformation. The customer-focused strategy entailed: taking price off the table by ensuring Best Buy’s price competitiveness and matching online prices; investing in the online shopping experience; reinvigorating the customer experience in the stores by investing in the engagement and proficiency of the sales associates; partnering with the world’s foremost tech companies to help them showcase their technology; and taking $1.5 billion of costs out to fund the required investments. The transformation has resulted in improvements in customer satisfaction, market share gains, revenue growth and improved margins.\r\n\n\rNow, Mr. Joly is leading Best Buy into its next phase, Best Buy 2020: Building the New Blue. In this next phase, Best Buy is driven by a clear purpose: to help customers pursue their passions and enrich their lives with the help of technology. It aims to address their needs around entertainment, communication, productivity, security, health, etc. in a more holistic fashion. It seeks to evolve from selling products through transactions to providing solutions and building relationships.\r\n\n\rUnder Mr. Joly’s leadership, Best Buy has committed to help provide, each year, technology training and career pathing to one million under-served teens in the US. Additionally, Best Buy is on a path to reduce its carbon footprint by 60 percent.\r\n\n\rPrior to joining Best Buy, Mr. Joly was CEO of Carlson, a global hospitality and travel company. Before that, he led Carlson Wagonlit Travel, Vivendi Universal Games, and Electronic Data Systems’ business in France.\r\n\n\rHe serves on the board of directors of Ralph Lauren Corp., the Retail Industry Leaders Association, Minnesota Business Partnership, Minneapolis Institute of Art and the Minnesota Orchestra. In August 2017, Mr. Joly was awarded the Legion of Honor, France’s highest civilian distinction.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'hubertjoly',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'James Downing',
    jobTitle: "President and CEO, St. Jude Children's Research Hospital",
    tags: ['Corporate Executive', 'Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/James-downing.jpg',
    bio:
      'James R. Downing, M.D., became the President and Chief Executive Officer of St. Jude Children’s Research Hospital in 2014. A renowned leader in pediatric cancer research, Dr. Downing focuses his work on understanding the genetic basis of cancer and using that information to improve the treatment of children with cancer. He was instrumental in launching the Pediatric Cancer Genome Project (PCGP), which has sequenced the normal and cancer genomes of more than 800 young cancer patients with some of the least understood and most aggressive tumors. The project made TIME magazine’s 2012 list of top 10 medical breakthroughs. In 2013, he was a finalist for TIME magazine’s 100 most influential people in the world.\r\n\n\rDr. Downing is a Detroit native who earned his undergraduate and medical degrees at the University of Michigan. He joined St. Jude in 1986 after training in anatomic pathology at Washington University in St. Louis and completing a fellowship in hematopathology at the University of Florida in Gainesville.\r\n\n\rPrior to taking the helm of St. Jude, Dr. Downing served as the institution’s Scientific and Deputy Director and as an Executive Vice President in the organization. For his work, Dr. Downing has received numerous honors, including the Association for Molecular Pathology Award for Excellence in Molecular Diagnostics, which recognizes lifetime, pioneering achievement, particularly in regard to molecular diagnostics and molecular medicine.\r\n\n\rIn 2013, he was elected to the Institute of Medicine of the National Academy of Sciences (now known as National Academy of Medicine), and in 2016, he was named a fellow of the American Academy of Arts and Sciences. Dr. Downing served on a Blue Ribbon Panel to advise former Vice President Joe Biden’s National Cancer Moonshot Initiative through the National Cancer Institute. Dr. Downing received the 2017 Society of Memorial Sloan Kettering Prize in recognition of the major influence his work has had in defining the genetics and genomics of pediatric cancers. He was also awarded The American Society of Hematology (ASH) 2017 E. Donnall Thomas Lecture and Prize for his discoveries related to the hematopathology and molecular biology of childhood leukemia, particularly acute lymphocytic leukemia, the most common pediatric cancer.',
    links: '',
  },
  {
    coachName: 'Jasmin Thompson',
    jobTitle: 'Leadership Coach | Engagement Advisor | Facilitator | People Operations',
    tags: ['Corporate Executive', 'Executive Coach', 'Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Jasmin-Thomson.jpg',
    bio:
      'Dr. Jasmin Thomson is a facilitator and certified coach through the College of Executive Coaching and Stakeholder Centered Coaching.  Her practice is based in organizational psychology research, with over 10 years of management experience.  She provides a balance of high accountability with compassion, support, and a curious mindset to achieve sustainable change and greater insight. Her expertise encompasses the comprehension of advanced methodology in performance assessments/psychometrics, organizational change, succession planning, emotional intelligence, and transformational leadership.\r\n\n\rYou will find that Dr. Thomson is approachable, knowledgeable and passionate about coaching for development.   She holds a MS and PhD in Industrial Organizational Psychology from the California School of Professional Psychology at Alliant International University, and for the past 6 years has been a licensed Project Management Professional (PMP), as well as a Senior Professional of Human Resources as of 2016.\r\n\n\rShe has been recognized as one of Marshall Goldsmith’s 100 Coaches out of 14,000 applicants. She has coached leadership professionals at Tuck School of Business at Dartmouth College and Children’s Hospital Children’s Hospital Los Angeles.  Prior to joining Kaiser Permanente, she provided management consulting in professional education to leading pharmaceutical companies such as Bristol-Myers Squibb and Eli Lilly.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'jasminthomson',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Jeffrey Kuhn',
    jobTitle: 'Thinker, author, advisor, educator, and speaker on strategic leadership',
    tags: ['Author', 'Executive Coach', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Jeffery-Kuhn.jpg',
    bio:
      "Dr. Jeffrey Kuhn is a distinguished thinker, author, advisor, educator, and speaker with expertise uniquely positioned at the intersection of strategy, innovation and growth, and organizational renewal—the work of strategic leadership. He is a globally recognized thought leader and master teacher with deep intellectual substance and craft derived from decades of scholarly research and practical experience working with the world’s leading firms.\n\nDr. Kuhn’s research, teaching, and advisory work center on helping senior business leaders develop the capacity to think and lead strategically in dynamic market environments undergoing profound change. His unique immersive learning methodologies and insightful frameworks help senior leaders overcome the forces of short-termism and incrementalism to think broadly and imaginatively beyond the boundaries of the core business and unlock new market growth.\n\nDr. Kuhn has advised market-leading firms in a wide range of industries around the world and taught in corporate leadership development programs for Booz Allen Hamilton, Boeing, SAP, Chubb, Deloitte, Johnson & Johnson, SunPower, Novartis, Sanofi, KaiserPermanente, and The Ritz Carlton.\n\nDr. Kuhn's research and writings on strategic capacity and dynamic capabilities have garnered worldwide acclaim.  He has published numerous articles on enterprise strategy, executive leadership, and organizational renewal, and has book under development on strategic leadership in dynamic market environments (LID Publishing, 2019).\n\nHe holds a doctorate in adult and organizational learning from Columbia University, and has served on the faculty of Columbia Business School, and Teachers College, Columbia University, and as a guest lecturer at The Wharton School and The U.S. Naval Postgraduate School. He is a founding member of the London-based Strategic Management Forum and a Fellow at the Royal Society of Arts. In 2017, Dr. Kuhn was inducted into Marshall Goldsmith 100 Coaches. \n\nDr. Kuhn is a former corporate executive and professional bassist. In his spare time, he is an internationally-ranked competitive road cyclist.",
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'jeffreymkuhn',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Jeff Slovin',
    jobTitle: 'Chief Executive Officer at Dentsply Sirona',
    tags: ['Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Jeffrey-Slovin.jpg',
    bio:
      'Mr. Slovin held the role of Chief Executive Officer of Dentsply Sirona and was a member of the Board of Directors until September 2017. Prior to that, Mr. Slovin served as President and Chief Executive Officer of Sirona. From September 2010 until February 2013 he was President and Director of Sirona. From June 2006 until September 2010, Mr. Slovin served as Executive Vice President and Chief Operating Officer of U.S. Operations.\r\n\n\rBetween June 2004 and June 2006, he served as Chief Executive Officer of Schick Technologies, Inc., from December 1999 until June 2006 as its President and from November 2001 to June 2004 as COO. From 1999 to November 2001, Mr. Slovin was a Managing Director at Greystone & Co., Inc.\r\n\n\rServed in other various executive capacities: Managing Director and President of Sommerset Realty Investment Corp. from 1996 to 1999; President of Sports and Entertainment Inc. from 1993 to 1994; and Chief Financial Officer of SportsLab USA Corp. from 1991 to 1994. Prior to this, he worked as an Associate at Bear Stearns & Co., specializing in mergers and acquisitions and corporate finance, from 1987 to 1991.\r\n\n\rMr. Slovin is currently a member of the World President’s Organization and the Board of Fellows of the Harvard School of Dental Medicine. He holds an MBA degree from Harvard Business School.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'jeff-slovin-6b337214a',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'John Noseworthy',
    jobTitle: 'President and CEO at Mayo Clinic',
    tags: ['Corporate Executive', 'Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/john-noseworthy.jpg',
    bio:
      'Dr. John H. Noseworthy is president and chief executive officer of Mayo Clinic, a not-for-profit organization operating in five states that is dedicated to medical care, research and education. Every year, more than a million people from all 50 states and nearly 150 countries come to Mayo Clinic for care.\r\n\n\rPrior to his current appointment, Dr. Noseworthy served as chair of Mayo Clinic’s Department of Neurology, medical director of the Department of Development, and vice chair of the Mayo Clinic Rochester Executive Board.\r\n\n\rDuring his tenure as CEO, Dr. Noseworthy and his leadership team have implemented a plan to ensure that Mayo Clinic remains a trusted resource for patients amid a rapidly changing health care environment – extending Mayo’s mission to new populations, providing care through more efficient delivery models, and increasing the personalization and immediacy of health care for all people. Examples of new initiatives include a proton beam cancer therapy program with two treatment centers – one in Phoenix and one in Rochester, Minn. – and development of a Mayo Clinic-affiliate network of high-quality medical practices throughout the country.\r\n\n\rDr. Noseworthy is a professor in the Department of Neurology. He specialized in multiple sclerosis and spent more than two decades designing and conducting controlled clinical trials with generous support from the Medical Research Council of Canada, the Multiple Sclerosis Society of Canada, the National Multiple Sclerosis Society (USA) and the National Institutes of Health. Dr. Noseworthy also is the author of more than 150 research papers, chapters, editorials and several books, including the three-volume textbook Neurological Therapeutics: Principles and Practice now in its second edition. He also served as editor-in-chief for Neurology, the official journal of the American Academy of Neurology.\r\n\n\rBorn in Melrose, Mass., Dr. Noseworthy received the M.D. degree from Dalhousie University in Halifax, Nova Scotia, Canada. He completed his neurology training at Dalhousie University and the University of Western Ontario, and a research fellowship at Harvard Medical School. He joined Mayo Clinic in 1990. He has received the Alumnus of the Year award from Dalhousie University (2005), an honorary doctorate of science degree from the University of Western Ontario (2012), an honorary doctorate of laws from Dalhousie University (2015). Dr. Noseworthy was named an Officer of the Order of the Orange-Nassau (2015) and received the Research!America, Geoffrey Beene Builders of Science Award (2016). He is a Health Governor of the World Economic Forum.\r\n\n\rDr. Noseworthy and his wife, Patricia, have two sons, Peter and Mark.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'john-noseworthy-md',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Julie Carrier',
    jobTitle: 'International Authority on Leadership Development for Girls & Youth',
    tags: ['Author', 'Consultant', 'Executive Coach', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/julie_carrier_headshot.jpg',
    bio:
      'A Trusted Authority on Leadership Development and Confidence for Teens and Girls; #1 National Bestselling Author of Girls Lead; Emmy-Nominee and Teen Success Coach as Seen on MTV’s “MADE”\r\n\n\rSeen on NBC’s Today Show and in The New York Times and Boston Globe, Julie Carrier is a trusted authority on leadership development and confidence for teens, girls and young women. Julie is also the #1 National Bestselling author of Girls Lead and the award-winning book on mind/body/self- esteem, BeYOUtiful, which launched at the National Girl Scout Leadership Institute. She is also featured in The Success Principles for Teens and Chicken Soup for the Extraordinary Teen Soul. This Emmy-Nominee has also reached millions on national TV as a teen success coach featured on MTV’s positive goal-setting show, MADE. She also feels incredibly honored to be a member of Marshall Goldsmith’s 100 Coaches Program and his pay-it-forward legacy to change the world.\r\n\n\rAs the CEO of Girls Lead, Julie is leading a movement to “empower those who empower girls and empower girls to empower each other.” She supports the world’s leading girl-serving and youth serving organizations including the United Nations Foundation, Girl Scouts, the Future Business Leaders of America and hundreds of other organizations, through innovative, fun, and neuroscience- based leadership keynotes, seminars, curricula, and best-practice program consulting and coaching for youth leaders. She is also a former Senior Management Consultant in Leadership Development for the Pentagon, where she specialized in neuroscience-based leadership education; a Rotary International Ambassadorial Scholar; and an award-winning speaker who has reached over a million teens, girls, young women, and those who care about them, world-wide.\r\n\n\rLearn more at: girlslead.com',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'juliemariecarrier',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Julie Rosenberg',
    jobTitle: 'Global Healthcare Leader, Keynote Speaker, Executive Coach, Author',
    tags: ['Author', 'Corporate Executive', 'Executive Coach', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Julie-Rosenberg-MD-.jpg',
    bio:
      'Julie Rosenberg, MD, is an experienced pediatric oncologist and global healthcare leader who has worked in a variety of leadership roles in both academic medicine and the pharmaceutical industry. She is a certified Marshall Goldsmith Stakeholder Centered Coach and honored member of the Marshall Goldsmith 100 coaches. \r\r\n\nJulie believes that each of us is our own best healthcare provider. In an effort to find ways to support people in adopting a conscious lifestyle, Julie has devoted that last 16 years to the in-depth study and practice of yoga, meditation and mindfulness. While trained in Western medicine, these Eastern principles and practices now inform her thinking, her leadership style and her work. Recognizing that chronic stress and burnout are on the rise with the relentless pace of business today, Julie works with senior leaders and teams to help them achieve their highest state of well-being and become more effective in their organizations. \r\r\n\nJulie’s first book, Beyond the Mat: _Achieve Focus, Presence and Enlightened Leadership Through the Principles and Practice of Yoga _(Da Capo Press) is an Amazon best seller and has been heavily endorsed by leading health and wellness, leadership and yoga experts. Her articles have appeared in Thrive Global, The Daily Positive, Fulfillment Daily, Dr. Laura, Reader’s Digest, Writer’s Digest, Elephant Journal, and Investor’s Business Daily. She has had featured commentary on ABC, America Trends, and RT America.\r\r\n\nJulie earned her B.A. and M.D. from the University of Missouri-Kansas City on a full academic scholarship and completed her medical residency and fellowship at the Baylor College of Medicine in Houston, TX.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'julie-rosenberg-md-3387a5149',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Kathleen Wilson-Thompson',
    jobTitle: 'Executive VP & Global Chief HR Officer of Walgreens Boots Alliance',
    tags: ['Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Kathleen-Wilson-Thompson.jpg',
    bio:
      'Kathleen Wilson-Thompson is executive vice president and global chief human resources officer for Walgreens Boots Alliance Inc., based in Deerfield, Illinois.\r\n\n\rMs. Wilson-Thompson joined Walgreen Co. in January 2010 as senior vice president and chief human resources officer. Following the strategic partnership between Walgreens and Alliance Boots announced in June 2012 and resulting in the merger of the two companies and formation of Walgreens Boots Alliance on December 31, 2014, Ms. Wilson-Thompson is currently the company’s executive vice president and global chief human resources officer.\r\n\n\rPrior to her role at Walgreens, she held several positions of increasing responsibility in the operations and legal departments at Kelloggs from 1992 to 2010 and left Kelloggs as senior vice president of global human resources to join Walgreens. She also worked as vice president and staff counsel of litigation and banking law for Michigan National Corporation in Farmington Hills, Mich., from 1986 to 1991.\r\n\n\rMs. Wilson-Thompson earned a bachelor’s degree in English from the University of Michigan in Ann Arbor in 1979, a Juris Doctorate in 1982 and an LLM, master of laws in corporate and finance law in 1996, both from Wayne State University in Detroit.\r\n\n\rMs. Wilson-Thompson is a board member on the Vulcan Materials Company Board of Directors and serves on the board of The Alumni Association of The University of Michigan, The NAACP Foundation, The Chicago Children’s Choir, and Skills for Chicagoland’s Future and is a member of the National Advisory Board of the National Civil Rights Museum. Additionally, Ms. Wilson-Thompson was named by Black Enterprise magazine in 2012 as one of its “Top 100 Most Powerful Executives in Corporate America and in 2015 as its “50 Most Powerful Women in Corporate America”. Finally, she was named a Distinguished Alumni of Wayne State University Law School in 2016.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'kathleenwilsonthompson',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Keith Ferrazzi',
    jobTitle: 'Founder & Chairman Ferrazzi Greenlight',
    tags: ['Author', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/keith-ferrazzi.jpg',
    bio:
      'As founder and chairman of Ferrazzi Greenlight, Keith Ferrazzi has spent over a decade addressing the behaviors that block global organizations from reaching strategic goals and transforming them into new habits that increase shareholder value.\r\n\n\rMore recently, in partnership with Zappos’ Tony Hsieh and Groupon’s Brad Keywell, Keith launched Yoi, a digital onboarding tool that drives transparency, improved coaching, and real-time feedback between\r busy managers and their new hires. The platform utilizes practice-based learning and quantitative assessments to deliver increased productivity in the workplace.\r\n\nKeith is the author of the bestsellers Who’s Got Your Back and Never Eat Alone. His writing has also been published in The Wall Street Journal, Harvard Business Review, Inc., and Fast Company .',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'keithferrazzi',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Kevin Koch',
    jobTitle: 'President and CEO',
    tags: ['Corporate Executive', 'Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Koch-Kevin.jpg',
    bio:
      'Kevin R. Koch, President & CEO, Koch Enterprises, Inc. Kevin Koch is president and CEO of Koch Enterprises, Inc. (KEI) located in Evansville, Indiana. KEI is a holding company that operates seven distinct businesses and employs approximately 2,800 team members. Prior to being named president, he served in various capacities within the KEI family of companies beginning in 1999. These roles included president and CEO of Brake Supply Company and several management positions at Gibbs Die Casting Corporation based in Henderson, Kentucky.\r\n\n\rBefore joining KEI, he gained experience at Electronic Data Systems, Ford Motor Company and Westinghouse (now Siemens) in engineering, purchasing and marketing.\r\n\n\rKevin currently serves on for-profit company boards including Koch Enterprises and its subsidiaries and Jasper Engines and Transmissions.\r\n\n\rKevin has served on many community boards including the Catholic Foundation, Tri-State World Trade Network and Economic Development Coalition of SW Indiana. He currently serves on boards of the Koch Foundation, Koch Family Children’s Museum of Evansville and University of Evansville Board of Trustees. He is currently a member of YPO Bluegrass. Kevin is the chair of the 2017 United Way campaign of SW Indiana.\r\n\n\rKevin earned a Bachelor of Science degree in metallurgical engineering from the University of Notre Dame and a MBA from Indiana University.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'kevin-koch-5054aa143',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Linda Sharkey',
    jobTitle: 'Trusted transformational expert, speaker, & author',
    tags: ['Author', 'Executive Coach', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/linda-sharkey.jpg',
    bio:
      'Dr. Linda Sharkey is a trusted transformational expert, author, speaker, and global leadership development coach.\r\n\n\rThrough her proven programs and no-nonsense approach, she helps create high-potential leaders and shapes company culture for future growth. Linda has deep experience working with Fortune 50 companies, and held senior human resource executive positions at Hewlett-Packard and at GE Capital.\r\n\n\rShe is the co-author of, The Future-Proof Workplace – Six Strategies to Accelerate Talent Development, Reshape Your Culture, and Succeed with Purpose. (Wiley, 2017) This book is a survival guide for the new realities of business and highlights Linda’s approach to helping businesses prepare for the future.\r\n\n\rHer co-authored book, Winning With Transglobal Leadership was named one of the top 30 best business books for 2013.\r\n\n\rShe also co-authored Optimizing Talent with Dr. Paul Eccher, a groundbreaking work spelling out proven steps to build a talent rich organization.\r\n\n\rDr. Sharkey is an inspiring keynote speaker at many global events, including the Global HR Academy with the Conference Board and the World Human Resources Development Conference, where she was  honored with the “Super Women Achievement Award.”\r\n\n\rShe is a founding member of the Marshall Goldsmith Group focused on helping successful executives become even more successful. She has a reputation as a no nonsense executive coach that enables those she coaches to show measurable behavior change in the eyes of others.\r\n\n\rLinda was Chief Talent Officer and V.P., People Development at Hewlett Packard, responsible for establishing and driving the company’s talent management initiative, performance management processes, career development, executive staffing, coaching, employee engagement, and diversity and inclusion efforts.\r\n\n\rPrior to Hewlett Packard, Linda was with General Electric and held numerous Senior Human Resources and Talent Management roles. She established a leadership development effort for GE Capital that became part of the Crotonville offerings and was named a best practice by CEO Jack Welch. She led several key cultural integrations and established a coaching process for executives, developed HR professionals as coaches and personally coached many senior leaders.\r\n\n\rShe holds a PhD in Organization Development from Benedictine University, MPA from Russell Sage College and a BA in History from Nazareth College. She is a past two term member of the Academy of Management Board for OD as the scholar practitioner.\r\n\n\rLindaSharkey.com',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'lindadsharkey',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Liz Smith',
    jobTitle: "Chairman of the Board of Directors and CEO Bloomin' Brands, Inc. ",
    tags: ['Corporate Executive', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/liz-smith.jpg',
    bio:
      'Elizabeth (Liz) Smith is the Chairman of the Board and Chief Executive Officer of Bloomin’ Brands.\r\n\n\rAs CEO, she is responsible for developing and executing the company’s long-term objectives, growth strategies and initiatives for its portfolio of casual and fine-dining brands, which include Outback Steakhouse, Carrabba’s Italian Grill, Bonefish Grill and Fleming’s Prime Steakhouse & Wine Bar.\r\n\n\rSince joining Bloomin’ Brands in 2009, Ms. Smith’s leadership has been instrumental in the revitalization of the company’s core brands, both domestically and internationally.\r\n\n\rMs. Smith has almost 30 years’ experience growing brands in consumer-facing industries. Prior to Bloomin’ Brands, she was President of Avon Products, Inc., where she successfully led the company’s global marketing, supply chain, information technology and sales business units.\r\n\n\rMs. Smith also worked in several roles at Kraft Foods, Inc., including Group Vice President and President of the U.S. beverages and grocery sectors, overseeing a total of $6 billion in sales.\r\n\n\rMs. Smith currently serves on the Board of Directors for Hilton Worldwide Holdings, Inc., U.S. Fund for UNICEF and H. Lee Moffitt Cancer Center & Research Institute (Tampa, Florida).\r\n\n\rShe holds a bachelor’s degree, Phi Beta Kappa, from the University of Virginia and an MBA from the Stanford Graduate School of Business.',
    links: '',
  },
  {
    coachName: 'Liz Wiseman',
    jobTitle: 'NY Times bestselling author and executive advisor',
    tags: ['Author', 'Consultant', 'Executive Coach', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Liz-Wiseman.jpg',
    bio:
      'Liz Wiseman teaches leadership to executives and emerging leaders around the world. She is the President of the Wiseman Group, a leadership research and development firm headquartered in Silicon Valley. Some of her recent clients include: Apple, Disney, eBay/PayPal, Facebook, GAP, Google, Microsoft, Nike, Roche, Salesforce.com, and Twitter. Liz has been listed on the biennial Thinkers50 ranking for 2013 and 2015, and named as one of the top 10 leadership thinkers in the world.\r\n\n\rShe is the author of three best-selling books: Rookie Smarts: Why Learning Beats Knowing in the New Game of Work, Multipliers: How the Best Leaders Make Everyone Smarter and The Multiplier Effect: Tapping the Genius Inside Our Schools. She has conducted significant research in the field of leadership and collective intelligence and writes for Harvard Business Review and Fortune and her work has appeared in the Wall Street Journal, Fast Company, Entrepreneur, Inc. and Time Magazines. She is a frequent guest lecturer at BYU, and Stanford University.\r\n\n\rA former executive at Oracle Corporation, she worked over the course of 17 years as the Vice President of Oracle University and as the global leader for Human Resource Development. During her tenure at Oracle, she led several major global initiatives and has worked and traveled in over 40 countries.\r\n\n\rLiz holds a Bachelors degree in Business Management and a Masters of Organizational Behavior from Brigham Young University. Liz lives in Menlo Park, California with her husband and four children who share her over-active curiosity and sense of adventure.\r\n\n\rLiz@TheWisemanGroup.com\r\\\nMultipliersBooks.com\r\\\nTheWisemanGroup.com',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'lizwiseman',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Louis Carter',
    jobTitle: 'CEO, Best Practice Institute',
    tags: ['Author', 'Executive Coach', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/louis-carter.jpg',
    bio:
      'Louis Carter is an organization psychologist and one of the top advisors to C-level executives of major companies such as Kimberly Clark, Federal Reserve Bank of NY, Saudi Aramco, Duke Energy, Humana, Shire, Jazz Pharmaceuticals, Key Bank, QBE, Cigna, Nokia, AbbVie, J&J, WestRock, Gilead Sciences, Battelle, Madison Square Gar- den, CIT, Goodyear, and many more helping them transform themselves and their organizations into an environment where employees love and want to produce the best results for their company.\r\n\n\rHe is the author of over 10 books on best practices in leadership development and talent management including Change Champion’s Field Guide, Best Practices in Leadership Development and Organization Change and Best Practices in Talent Management. He is a proud member of the MG 100 Coaches project chosen from over 12,000 coaches by his longtime men- tor Marshall Goldsmith. Louis is the recipient of ELearning! Magazine’s Trailblazer Award, HR Tech Conference’s Top Products Award, and Leader- ship Excellence Magazine’s Best in Leadership Development for his work as found- er and CEO of Best Practice Institute and the creator of the rst anytime 360-degree feedback tool based on feed- forward and appreciative dialogue, skillrater.\r\n\n\rLouis Carter founded Best Practice Institute in 2001 while obtaining his graduate degree from Columbia University. He facilitated drum circles in New York City after 9-11 to help rebuild the community. He further developed this concept into the BPI Senior Executive Board, a bench- mark research consortium comprised of C-levels from F500s who want to transform themselves and their organizations through best practices in leadership and organization development.\r\n\n\rHis newest book, In Great Company: How to spark emotional connectedness and peak performance will be released at the end of 2018.\r\n\n\rHe has spoken to the Prime Minister of the UAE’s HR Lighthouse Initiative, Pentagon and UN officials, and various international conferences on his work and research. He has been a drummer for over 5 bands throughout the past 30 years and volunteers to drum for community drum circles and children’s centers.',
    links: {
      facebook: 'bestpracticeinstitute',
      instagram: '',
      linkedin: 'louiscarter',
      twitter: 'louislcarter',
      website: 'https://www.louiscarter.com',
    },
  },
  {
    coachName: 'Bill Carrier',
    jobTitle: 'President of Carrier Leadership Coaching',
    tags: ['Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/bill-carrier-executive-coach.jpg',
    bio:
      'Bill Carrier, President of Carrier Leadership Coaching Inc., specializes in coaching senior executives and high-potential executives in leadership, executive presence, and organizational impact. He is a member of the Marshall Goldsmith 100 Coaches program for the top leadership professionals in the world.  A graduate of the United States Military Academy at West Point, former Army officer, and Rotary International Ambassadorial Scholar, Bill anchors his coaching work in extensive practical leadership experience and the firm belief that we are all part of something bigger than ourselves. \r\n\nAn executive coach and thought partner to senior leaders, Bill leverages best-practive from neuroscience, ontology, movement psychology/somatics, and West Point leadership development.  Executive coaching clients have included CEO’s, CTO’s and SVP’s of corporations from $100M to $10B in annual revenue, a winner of the Navy’s Zumwalt Award (annually given to the best captain of a ship in the US Navy), TED Fellows, and senior executives at the Board of Governors of the Federal Reserve. \n\n\rBill has extensive experience in working with senior-most HR executives of billion-dollar companies across the US, Australia, and South Africa to leverage leadership assessment and human capital measurement to improve company culture and performance.  As a senior director at the Executive Intelligence Group (EIG), Bill led business development, working with the world’s leading corporations regarding assessment practices for succession management, high potentials, and senior executive deployment and development.\r\n\nPrior to EIG, Bill led business development teams for the Corporate Leadership Council (CLC) Solutions at the Corporate Executive Board, the world’s top corporate best-practice research and executive education firm.  Bill worked with the top HR executives at Fortune 1000 companies to help them to build stronger leadership benches, strengthen relationships with high potential employees, and effectively measure and manage human capital. \n\nBill began his career as an officer in the U.S. Army, where he was the direct supervisor of a combat arms team in high-stress training environments. After retiring from the Army, Bill was selected to represent the United States as a Rotary International Ambassadorial Scholar to Brazil.\n\nIn addition to an extraordinary background as a leader himself, Bill has extensive studies in leadership and coaching.  He continues his ongoing education in leading-edge coaching best-practices with world-class nonverbal and somatics coaching expert, Dr. Stuart Heller. Bill is a Marshall Goldsmith Stakeholder Centered Certified Coach, a Certified Newfield Ontological Coach, and has been a certified Dale Carnegie instructor. \n\nBill contributes to the coaching profession in many ways.  He is the co-founder and co-editor of The Future of Coaching magazine, a Founding Fellow of the Institute of Coaching at Harvard Medical School, and a founding member of the Coaching Excellence in Organizations (CEO) community of practice. In recognition of his excellence as a senior executive coach and thought leader, he has served as a Mentor Coach for the CEO advanced education program. Bill has been a member of the Board of Directors of the International Consortium for Coaching in Organizations (ICCO) and is on the accreditation committee of the Association of Corporate Executive Coaches (ACEC).',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'billcarrier',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Luke Joerger',
    jobTitle: 'CEO of Hastings Digital',
    tags: '',
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/luke-joerger.jpg',
    bio:
      'As the owner of Hastings Digital, a full service digital marketing agency in New York, Luke leads the social media, video content creation and audience development for Marshall Goldsmith and the 100 Coaches Project. \r\n\n\rResponsible for the production and curation of thousands of minutes of video generating millions of followers and billions of video views across platforms for major media brands, Luke has years of experience around large scale sales campaigns and digital advertising. He is well versed in areas of leadership education, music, sports, publishing, video games, fashion and news. Luke has worked as digital media advisor to top leaders, agencies, marketers and media companies including Viacom, Huffington Post, CEB and Bloomberg.\r\n\n\rHastings Digital was instrumental in helping to launch Deepak Chopra’s wellness app JIYO as well as development of the YouTube channel strategies for Martha Stewart, Complex Media and World Wrestling Entertainment.\r\n\n\rLuke has produced over 200 music videos and apprenticed with the late Academy Award winning directors Jonathan Demme (Silence of the Lambs) and director Joel Schumaker (Batman, Falling Down).\r\n\n\rHis agency currently leads the marketing efforts for Bard College’s Symphony TŌN which regularly performs at Carnegie Hall and Lincoln Center. He has also worked with the University of California at Irvine to help promote their Center for Digital Transformation. \r\n\n\rHis videos for Marshall Goldsmith’s have received over one and a half million views on YouTube helping  drive million followers on Linkedin. Luke is excited to support Marshall and his team to “pay it forward” with the 100 Coaches project and spread the word to millions more across the globe.',
    links: '',
  },
  {
    coachName: 'Marcia Blenko',
    jobTitle: 'Advisory Partner at Bain & Company',
    tags: ['Author', 'Executive Coach', 'Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Marcia-W-Blenko.jpg',
    bio:
      'Marcia Blenko is an advisory partner at Bain & Company. She joined Bain in 1988 and was elected to the partnership in 1995. Marcia is currently based in the Boston office, but also worked in Bain’s London office for 13 years.\r\n\n\rMarcia co-founded and led Bain’s Global Organization practice for a number of years. She has extensive experience collaborating with clients to optimize organizational design, improve decision and execution capabilities and lead successful implementation of organizational change. She has authored a number of articles on organization, decision effectiveness and leadership, which have appeared in The Harvard Business Review, The Financial Times, The Wall Street Journal and Harvard Management Update. She also co-authored the book Decide & Deliver: Five Steps to Breakthrough Performance in your Organization (Harvard Business Press, September 2010).\r\n\n\rWhile at Bain, Marcia has also pursued her interest in the non-profit sector, working on Bain-supported efforts such as Business Action on Homelessness in London. She currently serves on a number of non-profit boards, including Education Resource Strategies, The World Wide Web Foundation, and WGBH where she serves as a Trustee and Chair of the Board of Overseers. Marcia also provides support to Bridgespan on organization-related issues relevant to non-profit clients.\r\n\n\rPrior to joining Bain & Company, Marcia worked for Goldman Sachs in both New York and London. She earned her MBA from Stanford’s Graduate School of Business where she was an Arjay Miller Scholar. She graduated Phi Beta Kappa from Brown University with a Bachelor of Science degree in Applied Mathematics/Economics.\r\n\n\rMarcia lives in Wellesley, MA with her husband and has three grown children.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'lizwiseman',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Mark Parsells',
    jobTitle: 'Founder & Managing General Partner, Montpelier Ventures',
    tags: ['Corporate Executive', 'Executive Coach', 'Consultant', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Mark-par.jpg',
    bio:
      'Mark Parsells is Founder and Managing General Partner of Montpelier Ventures where he focuses on advising senior executives on leadership, turn-arounds and M&A transactions.  He has broad experience in successfully running both traditional offline Financial Services companies as well as highly technical FinTech businesses. He has served on more than 20 public, private and non-profit boards. \r\n\nMark was Chairman and Chief Executive Officer of three successful private equity backed FinTech companies: Global Debt Registry (Major Investor – MHR Fund); Regulatory Datacorp (Major investors - Bain Capital/Goldman Sachs – sold to Vista) and Fusura (Major investors - AIG/Prudential – sold to AIG).\r\n\nMark was President of Citibank Online, the #1 ranked online bank in the US and ran Citi’s Global Online Banking Technology group spanning 52 countries. He also served on the Massachusetts Institute of Technology’s (MIT) Sloane School Global eCommerce Board as well as on the Board of Citibank Delaware. Mark’s turn-around of the US online banking business was the subject of a case written by then MIT Sloane School of Management Dean Glen Urban and was included as a chapter in his book, “Digital Marketing Strategy.” Mark has lectured on the case at various business schools including MIT, Harvard Business School and Cornell’s Johnson Graduate School of Business.\r\n\nPrior to Citi, he was General Manager of the Revenue Services division at Bank One where he turned around the performance resulting in increasing profit of the group from $60M to $220M in 24 months. In addition, he was Bank One’s first Chief Privacy Officer and created the Bank One Privacy Council. He also served on the Board of the Bank One Insurance Services Company.\r\n\nAt American Express, he was responsible for influencing the United States Postal Services to accept credit cards for the first time and he founded the Government Services division where he served as General Manager. The division grew to more than $1 Billion in charge volume and was asked by then Chairman and CEO to speak at the American Express Annual Shareholder Meeting. He concurrently was asked to serve as the Chief Compliance Officer of $100+ Billion US Establishment Services division that managed relationships with card accepting merchants.\r\n\nPrior the graduate business school, Mark served as Special Assistant to US Senator H. John Heinz III of Pennsylvania.\r\n\nMark earned a BA at Emory University; an MBA with a focus in Marketing and General Management at Cornell University’s Johnson Graduate School of Management; an MBA from KU Leuven in Belgium with a focus in Economics and Finance and is an alumnus of the Graduate Management Program at Harvard Business School. Mark enjoys lacrosse, tennis, skiing and reading.  Mark, his wife Cathy, and their two children live in Wilmington, Delaware.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'mark-parsells-7267785',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Mark Tercek',
    jobTitle: "CEO of The Nature Conservancy and author of Nature's Fortune",
    tags: ['Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/mark-tercek.jpg',
    bio:
      'Mark Tercek is president and CEO of The Nature Conservancy (TNC), the global conservation organization known for its intense focus on collaboration and getting things done for the benefit of people and nature. He is the author of the Washington Post and Publisher’s Weekly bestselling book Nature’s Fortune: How Business and Society Thrive by Investing in Nature.\r\n\n\rGrowing up as a city kid in Cleveland, Mark was a late-bloomer to conservation. It was becoming a parent that sparked his passion for nature. “I want to be able to look my kids in the eye,” he says, “and tell them I did all I could to leave the world a better place.”\r\n\n\rA former managing director and Partner for Goldman Sachs, where he spent 24 years, Mark brings deep business experience to his role leading The Nature Conservancy. He is a champion of the idea of natural capital — valuing nature for its own sake as well as for the services it provides for people, such as clean air and water, productive soils and a stable climate.\r\n\n\rMark’s leadership of TNC has been profiled in The New Yorker, Bloomberg BusinessWeek, the Wall Street Journal and The Atlantic.\r\n\n\rDuring his time at Goldman Sachs, Mark managed several of the firm’s key units, including Corporate Finance, Equity Capital Markets and Pine Street, the firm’s leadership development program. In 2005, after two decades as an investment banker, Mark was tapped to develop the firm’s environmental strategy and to lead its Environmental Markets Group.\r\n\n\rInspired by the opportunity to help businesses, governments and environmental organizations work together in new, innovative ways, Mark left Goldman Sachs in 2008 to head up The Nature Conservancy.\r\n\n\rIn 2012, Mark was appointed by New York Governor Andrew Cuomo to serve on the New York State 2100 Commission, which was created in the wake of Superstorm Sandy to advise the governor and the state on how to make the state’s infrastructure more resilient to future storms. In 2016, Mark was appointed by President Barack Obama to the president’s Advisory Committee for Trade Policy and Negotiations.\r\n\n\rMark is a member of several boards and councils, including Resources for the Future, the Nicholas Institute for Environmental Policy Solutions, Harvard Business School’s Social Enterprise Initiative, and the Science for Nature and People Partnership (SNAPP), TNC’s science joint venture with the Wildlife Conservation Society and the National Center for Ecological Analysis and Synthesis (NCEAS) at the University of California, Santa Barbara. Mark serves on the Williams College Board of Trustees and was on the finance faculty of New York University’s Stern School of Business until 2008.\r\n\n\rDrawing on his professional background in the financial sector, Mark also leads TNC’s impact capital initiative and serves as board chair of NatureVest.\r\n\n\rMark earned an M.B.A. from Harvard in 1984 and a B.A. from Williams College in 1979.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'marktercek',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Michel Kripalani',
    jobTitle: 'Executive Coach, Speaker, Entrepreneurs',
    tags: ['Corporate Executive', 'Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Michael-kripalani.jpg',
    bio:
      'Michel Kripalani is President & CEO of Oceanhouse Media, a leading developer and publisher of apps that uplift, educate and inspire. Oceanhouse Media has released over 500 mobile apps, the vast majority focused on bringing the works of prominent authors to mobile devices. In 2013, the company was ranked #114 on the Inc 500 Fastest Growing Private Companies list.\r\n\n\rMichel is a “digital tinkerer” at heart and is known for developing apps that help drive personal performance. Some of his more notable creations are “CommitTo3” and the daily coaching app “Mindset for Success”.\r\n\n\rOceanhouse Media is Michel’s third start-up. He found prior success with Presto Studios, a videogame development company that he co-founded and ran for 11 years. Presto Studios had numerous hits including “The Journeyman Project” series, “Myst 3: Exile” and many more. His first company, MOOV design, was founded in 1989 just after receiving his B.A. from UC San Diego. MOOV developed innovative interactive multimedia projects many years before these new technologies were mainstream. It was here that he was a design and programming lead on Verbum Interactive (the world’s first interactive, multimedia magazine).\r\n\n\rMichel is extremely active in Entrepreneurs’ Organization (EO) where he served as the San Diego Chapter President from 2015-16 and later on the US West Regional Council. He has been an Accelerator mentor, where the goal is to help early-stage entrepreneurs grow their businesses into larger, more sustainable ventures. He also completed the 3-year EO Entrepreneurial Masters Program at MIT and EO’s Global Leadership Academy in Washington D.C.\r\n\n\rAs someone who has strived for and found success in work, personal and family life, Michel has decided that it is time to give back. Even though he remains an active learner, his efforts are now transitioning to writing, coaching, teaching and lecturing.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'michelkripalani',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Mike Sursock',
    jobTitle: 'Partner at Baring Private Equity Asia',
    tags: ['Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Mike-sursock.jpg',
    bio:
      'Mike Sursock, Managing Director‐ Operations Group, currently leads a team that supports investments across the Baring Private Equity portfolio of companies, pre and post investment. Prior to joining Baring, Mr. Sursock was CEO of KKR Capstone for Asia Pacific, where he drove value creation in businesses spanning mining, financial services, industrials, logistics, dairy, FMCG and a wide range of other sectors across the region.\r\n\n\rHe has had deep operational experience in his roles as COO Asia Pacific and VP‐ Global Sales Operations for Motorola.\r\n\nMike came to Asia with Mars, where he had previously spent 20 years with roles in Marketing, Sales, Human Resources, Manufacturing and General Management across Europe. His most recent role at Mars was as President and General Manager of Greater China, leading a team devising and implementing broad‐based strategies which resulted in growing market share to 60 percent of the China market.\r\n\n\rMike is a member of ATTA (Asia Turnaround and Transformation Association) and holds a B.Sc. Honors in Mechanical and Production Engineering from the University of Leeds and an MBA in Marketing from the University of Bradford. Additionally Mike is an Advisor and Speaker at the Tuck School of Leadership Dartmouth, and a member of its Asia Advisory Board.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'mike-sursock-19980010',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Mitchell Carmichael',
    jobTitle: 'Senate President: State of West Virginia',
    tags: ['Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/mitch-carmichael.jpg',
    bio:
      'Senator President-Lieutenant Governor Mitch B. Carmichael (R- Jackson, 4th District) is an accomplished businessman in the field of information technology. He was born on April 15, 1960 in Charleston, W.Va., the son of Carolyn V. Carmichael and the late William F. Carmichael. Senator Carmichael was raised in Jackson County and attended public schools in Ripley, W.Va. He is an Honors graduate from Marshall University with degrees in Finance and Economics. Upon graduation, he was recruited to one of the world’s leading technology companies. His exceptional career has taken him to an executive position with CityNet, a growing, innovative, entrepreneurial technology company in West Virginia. He resides in Ripley, W.Va., where he is active in many community and charitable organizations, including Epworth United Methodist Church.\r\n\n\rSenator Carmichael was first elected to the Senate in 2012 and re-elected in 2016. His talent, vision, leadership, and enthusiasm were quickly realized by his colleagues in the Senate to the extent that he was appointed to the important position of Senate Majority Leader. He served as the first Republican Senate Majority Leader in more than 83 years. His fellow Senators unanimously elected Senator Carmichael to the position of Senate President-Lieutenant Governor in January 2017.\r\n\n\rSenator Carmichael previously served the State of West Virginia as an elected member of the House of Delegates. He was elected to five consecutive terms. His vast experience from serving on the Committees of Finance, Judiciary, Education, and Rules, along with his stellar voting record, has garnered awards from many fiscally conservative organizations including the West Virginia Chamber of Commerce, West Virginia Business and Industry Council, and the West Virginia State Medical Association. Senator Carmichael is recognized statewide for his free-market, pro-growth economic policies, and is a strong voice for smaller government, judicial reform, lower taxes, and more individual freedom.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'mitch-carmichael-444226108',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Mo Kasti',
    jobTitle: 'Innovator, Author, CEO',
    tags: ['Corporate Executive', 'Executive Coach', 'Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/mo-kasti.jpg',
    bio:
      'Mo Kasti is a distinguished author, thinker, speaker, coach, strategy advisor and family man.\r\n\n\rHis mission and passion center around saving lives by helping clinicians and executives elevate their thinking in times of disruption. When terrains are shifting, and outcomes are uncertain, Mo is uniquely equipped to help leaders think in uncommon ways. With more than 27 years in healthcare, Mo is sought after for his expertise in strategy, leadership, innovation, growth, and organizational resilience.\r\n\n\rAs an author, Mo wrote his first best- selling book, Physician Leadership, on the transformational effects of leadership in medicine. His highly anticipated second book, Beyond Physician Engagement: A Roadmap, is due out this spring. His third book, in the works, is titled: Drama-Free Healthcare. In addition to his books, Mo freely shares transformative insights on his blog (MoKasti.com and CTIleadership.com) and popular video series – Mo’isms.\r\n\n\rAs a strategist, Mo helps organizations, boards, executives and leaders apply Terrain-Based Strategy thinking to envision new possibilities and differentiate themselves, their offerings and their organizations.\r\n\n\rMo is the CEO and founder of the nationally recognized Center for Transformation and Innovation (CTI) that focuses on Leadership, Strategy and Innovation. Mo also founded the Physician Leadership Institute (PLI) that works to develop physicians into leaders. PLI has transformed thousands of clinicians into clinician leaders and improved outcomes for hundreds of healthcare organizations and their patients.\r\n\n\rMo is a successful entrepreneur that has been recognized by Inc. Magazine’s 5000 Fastest-Growing Private Companies five years in a row; only seven percent\r\n\nof companies receive such an honor. His company has been a finalist in the Tampa, Florida Chamber of Commerce Small Business of the Year; LEAD Top 10 Leadership Partner; LEAD Top 10 Best Executive Coaching Program; LEAD Top\r\n\n10 Use of Team Building; State of Florida Healthcare Innovation Award; GrowFL 2015 Top 50 Florida Companies to Watch; and AHA Exclusive Endorsement 2015/2016.\r\n\n\rMo has been a national speaker and panelist for national and regional organizations and conferences such as AMGA, MGMA, AHA, ACHE, Kentucky Hospital Association, Iowa Hospital Association, and others. His favorite topics include healthcare transformation, Terrain- Based Strategy thinking, leadership and management transformation, and effective process improvement.\r\n\n\rMo’s career span included roles as Chief Transformation Officer and Chief Operating Officer (COO) for USF Health where he facilitated the “transformation\r\n\nof the DNA of Healthcare” by integrating the Colleges of Medicine, Nursing, Public Health, and 500 Physician Groups into USF Health, an entrepreneurial academic model with $1.2 Billion in revenue.\r\n\n\rPrior to joining USF, Mo held successful leadership roles with General Electric Healthcare (NYSE: GE), a top Fortune magazine most admired company and #1 market leader in diagnostic equipment and services. Mo has held positions at various hospitals and Healthcare system including Summa Health System in Akron Ohio.\r\n\n\rHe has a Masters of Science in Clinical Engineering and Healthcare Administration from Case Western Reserve University in Cleveland, Ohio, USA and has earned numerous awards as a coach, trainer, and speaker on leadership development. He is certified as a Master Black Belt (MBB) in Lean Six Sigma and Master Change Agent (MCA) in Change Management. Mo is a life- long learner and student of ancient Asian teachings (i.e. Sun Tzu, The Art of War, The Seven Chinese Military Classics, and The Five Rings) as they apply to strategy and leadership.\r\n\n\rMo has faculty appointments in the USF College of Medicine, College of Nursing, Business School, Honor College, and College of Pharmacy. He has received numerous management awards for outstanding performance and holds several patents.\r\n\n\rMo is a father of two emerging leaders Adam and Jude. He is exceedingly proud of his boys and often shares stories of Adam’s presidential aspirations (internationaladam.com) and Jude’s creativity (RJcreativity.com)',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'mkasti',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Molly Tschang',
    jobTitle: 'Executive Talent & Leadership Team Development',
    tags: ['Consultant', 'Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/mollymt2-headshot.jpg',
    bio:
      'Molly Tschang is Founder and CEO of Abella Consulting, a New York-based leadership development and business advisory consultancy that helps senior leaders cultivate the collaborative capacity to elevate individual, team, and organizational performance and accelerate sustained, profitable growth.\r\n\n\rMolly helps senior executives collaborate more skillfully through heightened individual and team awareness and empathetic understanding that aligns leadership teams around a shared business purpose and interdependently achieving outcomes.\r\n\n\rPrior to launching Abella, Molly held executive leadership positions at Cisco Systems and U.S. Filter, where she led the integration of over 80 acquisitions, and consulting and business development roles at Deloitte, and IBM. She gained deep expertise in helping senior leaders navigate rapid change and uncertainty in high growth environments.\r\n\n\rMolly holds a BS in chemical engineering from Cornell University and an MBA from UCLA with a focus on entrepreneurship. She has served as the Executive Director for NetHope and serves on the Cornell Engineering College Council as well as the Board of Advisors of Relief International. An advocate of social enterprise, Molly provides pro bono strategic advisory services to Community Solutions (homelessness), Three Dot Dash® (mentoring for global teen leaders), and the NYU Reynolds Program for Social Entrepreneurship.\r\n\n\rIn 2017, Molly was selected from among 12,000 applicants to be a protégé of Marshall Goldsmith through his 100 Coaches initiative.\r\n\n\rIn her downtime, she enjoys tennis, yoga, and cooking with family and friends. Learn more at abella.consulting',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'mollytschang',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Patricia Gorton',
    jobTitle: 'Talent & Leadership Development Executive',
    tags: ['Corporate Executive', 'Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Patricia-gorton.jpg',
    bio:
      'Patricia Gorton is the Director of Global Leadership and Talent Development at Depository Trust and Clearing Corporation (DTCC) where she has spent the last ten years leading talent, learning, organizational development and change projects for the organization. She focuses on performance enhancing solutions for employees whether for targeted groups in a leadership program or for individuals engaging in activities that drive development such as mentoring, learning and coaching. Leaders value her support around talent analysis and succession planning to build a strong leadership pipeline to reach future business needs.\r\n\n\rShe joined the company in 2008 from Citi where she spent seven years there as an SVP in both marketing and business development roles for their global payments, online banking and credit card divisions. Prior to Citi, she was the founder of an online retailer that raised $90 million from an IPO with backing from GE Capital, Intel and Accenture. This business expertise is the commercial lens from which she drives behavioral and organizational change at DTCC. She can structure global, scalable solutions that are cost effective, results oriented and well- designed that delivers business impact.\r\n\n\rTricia graduated with an honors degree in Economics from the University of Rochester and received her MBA from the Ross School of Business at the University of Michigan. While at Michigan, she won an innovation award voted by the student body and spoke at commencement. Tricia loves skiing, ice hockey, cooking, dancing, music, writing poetry and traveling. She recently trekked to Kilimanjaro!',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'globalinnovationtraining',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Paul Corona',
    jobTitle: "Founder of the Lee's 3 Habits system",
    tags: ['Author', 'Executive Coach', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/paul-corona.jpg',
    bio:
      'Dr. Paul L. Corona is a clinical professor of leadership in the Kellogg School of Management at Northwestern University, where his teaching and coaching ratings average 95/100. Paul is also the founder of the [Lee’s 3 Habits system](https://www.lees3habits.com/), which helps motivated people build stronger relationships and achieve greater happiness, and the author of [The Wisdom of Walk-Ons: 7 Winning Strategies for College, Business and Life](https://www.amazon.com/Wisdom-Walk-Ons-Winning-Strategies-Business/dp/1439286442). Paul is a certified leadership coach and a Marshall Goldsmith “100 Coaches” honoree, selected from more than 16,000 candidates to advance the practice of coaching with Dr. Goldsmith, who is recognized as the world’s top leadership coach. During the past 33 years, Paul has transformed himself from a business person into a performance improvement specialist. He previously held a variety of leadership roles in Fortune 500 corporations, a Big 4 accounting and consulting firm, and major research universities. Most importantly, Paul is a husband, parent and friend.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'dr-paul-l-corona-5a01682',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Paul Hill',
    jobTitle: 'Author, Speaker, Leadership Evangelist',
    tags: ['Author', 'Corporate Executive', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Paul-sean-hill.jpg',
    bio:
      'Paul Sean Hill spent 25 years in NASA’s iconic Mission Control, learning and living the values he now evangelizes.  After a career leading human spaceflight operations – from the Mission Control Room to the executive level – he offers a candid and passionate insider’s look at the leadership values and culture that have been critical for their “impossible” wins for decades. \r\n\n\rAs the executive who is credited with revolutionizing the leadership environment in Mission Control’s management ranks, he can show leaders how to apply the same core ideas and values to their own challenges and boost team performance in any industry and business. \r\n\n\rBeyond the rocket science and leadership theory, he shows how these deliberate values are the enablers in solving “impossible” problems at all levels.  Through his book Leadership from the Mission Control Room to the Boardroom, leadership workshops, and keynote addresses, anyone can learn how Mission Control does it, and more importantly, how to enable a leadership environment that inherently strengthens team performance in in your own organization.  Paul has inspired leaders across many industries, including:  Shell, Texas A&M University, Google, Citi Group, J.P. Morgan Chase, The Conference Board of Canada, and Texas Education Service Center Regions 15 and 18. \r\n\n\rAs NASA’s Director of Mission Operations from 2007 through 2014, Paul was responsible for all aspects of human spaceflight mission planning, training, and Mission Control.  In this role, Paul led a critical leadership transformation, dramatically reduced costs, and increased capability, all while still conducting highly successful missions in space.\r\n\n\rBefore this, he held a number of senior leadership positions including Deputy Manager of the Extravehicular Activity Office, Manager of Shuttle Operations, and Deputy Director of Mission Operations.  Paul served as a Space Shuttle and International Space Station Flight Director leading flight preparation and execution from Mission Control for 24 missions from 1996 through 2005, with his final assignment as the Lead Flight Director for the return-to-flight after the Space Shuttle Columbia accident. Prior to NASA, he was a U.S. Air Force Captain and satellite operations officer.\rHis professional awards include the Presidential Rank Award of Meritorious Executive, two NASA Outstanding Leadership Medals, NASA Distinguished Service Medal, NASA Exceptional Service Medal, Rotary National Award for Space Achievement – Stellar Award, and recognition as an Outstanding Aerospace Engineer by the Aerospace Alumni Academy of Texas A&M University.\r\n\n\rPaul is a member of the Texas A&M University Aerospace Engineering Advisory Board and the Texas A&M University – Galveston Board of Visitors.  He is also a member of Marshall Goldsmith’s 100 Coaches.\r\n\n\rPaul holds Bachelor and Master of Science degrees in Aerospace Engineering from Texas A&M University where he was a member of the Corps of Cadets. He lives in League City, Texas where he and his wife raised two extraordinary, Texas Aggie daughters.\r\n\n\rFind Paul and Atlas Executive Consulting at:\r\n\n\rpshill@AtlasExec.com     AtlasExec.com\r\n\n\rLinkedin.com/in/PaulHillLeadership/     Facebook.com/MissionControlLeadership',
    links: {
      facebook: 'MissionControlLeadership',
      instagram: '',
      linkedin: 'paulhillleadership',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Pawel Motyl',
    jobTitle: 'Author of a best-selling book on decision-making',
    tags: ['Author', 'Executive Coach', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Pawel-Motyl.jpg',
    bio:
      'One of leading European experts in decision-making, leadership, team effectiveness and talent management; author of a best-selling book on decision-making, keynote speaker at numerous conferences, C-level consultant, trainer and certified executive coach.\r\n\n\r20+ years’ business experience, including 10 years in management consulting and executive search roles with 7+ years in the CEO position (Harvard Business Review Poland / ICAN Institute). Speaker at Harvard Business Review conferences in Poland, has delivered presentations with dr. Marshall Goldsmith, prof. Dave Ulrich, prof. Andrew McAfee, prof. Joseph Badaracco, Neil Rackham, Coleen Stanley, prof. Heike Bruch and many others. Designer and facilitator of C-level leadership development programs (2500+ hours of training sessions delivered). Top-ranked trainer in ICAN Institute executive education projects. Architect of consulting solutions and advisor to the management boards of leading companies in Poland, has managed and participated in numerous international assignments. Certified executive coach with Marshall Goldsmith Stakeholder-Centered Coaching. In 2005, he was the first Pole to complete Train-the-Trainer program at McClelland Centre for Research and Innovation in Boston. In 2016 Pawel was selected to participate in dr. Marshall Goldsmith’s 100 Coaches initiative.\r\n\n\rPawel’s book on decision-making was published in Polish in 2015 and became Harvard Business Review Poland all-time bestseller in just 4 weeks. The book won many prestigious awards in Poland, including 2015 Golden Owl.\r\n\n\rPawel spends his spare time in mountains, has climbed numerous 6000m and 7000m peaks in Himalaya and Pamir. He is also an admirer of Italian red wines, from Tuscany in particular.\r\n\n\rMore information: www.pawelmotyl.com\r\n\n\r“It is my honor to endorse the work of Pawel Motyl. Pawel is a fantastic expert in leadership, who is consistently at the leading edge of thinking. He is a wonderful speaker, who receives consistently positive feedback from his participants. He is also an excellent coach and consultant who can help both individuals and organizations achieve positive change. Along with all of this, he is a great guy. Working with him is a joy!” — Dr. Marshall Goldsmith',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'pawelmotyl',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Peter Chee',
    jobTitle: 'CEO of ITD World',
    tags: ['Author', 'Executive Coach', 'Speaker', 'Consultant', 'Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/peter-chee.jpg',
    bio:
      'Dr. Peter Chee is the President and CEO of ITD World, a global leadership development expert with over 30 years of experience in developing leaders from over 80 countries. Peter is the chief mentor coach and developer of the Certified Coaching and Mentoring Professional (CCMP) program which is accredited and recognized by ICF (International Coach Federation). He is the inventor of the Coaching for Breakthrough Success (CBS) Metta Model, The Coaching Principles (TCP), Situational Coaching Model (SCM) and Achievers Coaching Techniques (ACT).\n\nHe works in close partnership with Dr. Marshall Goldsmith, the worlds #1 leadership coach and with award-winning professor Dr. William J. Rothwell, who has written more than 120 books. Dr. Peter Chee and Dr. Jack Canfield are co-authors of Coaching for Breakthrough Success whereas Dr. Peter Chee and Dr. William Rothwell are co-authors of the book entitled Becoming an Effective Mentoring Leader and The Leader’s Daily Role in Talent Management: Maximizing Results, Engagement and Retention. He is also the author of the 12 Disciplines of Leadership Excellence with Brian Tracy.\n\nPeter specializes in developing, transforming and coaching CEOs, CXOs and top leaders, some of the organisations that he has worked for include: Intel, Citibank, Schneider, Chevron, OSRAM, AIA, Infineon, B Braun, Mattel, Petron, World Scout Foundation, Philips, ANZ Bank, First Solar, MSIG, Bangkok Bank, ThaiBev, DTAC -Telenor, Vingroup, Petorvietnam, Beiersdorf, Sandisk-Western Digital, Nestle, PepsiCo and Nike. His life purpose is to transform leaders and change the world with love for God and people.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'drpeterchee',
      twitter: '',
      website: 'http://www.itdworld.com/drpeterchee.html',
    },
  },
  {
    coachName: 'Philippe Grall',
    jobTitle: 'Founder CEO of equilibre coaching',
    tags: ['Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Phillipe-Grall.jpg',
    bio:
      'Founder of equilibre k.k. in 2006\r\n\nFrench – Born in France in 1968\r\n\nLiving and working in Japan since 2000\r\n\nLanguage: French, English and Japanese\r\n\nHis Mission\r\n\nTo Help People to Shine in Business and Life.\n\n1. Activities\r\n\n– Coaching\r\n\n1 to 1 Executive Coaching for Leadership Group Coaching for Boards Members\r\n\n– Facilitation\r\n\nStrategic In-house Workshops: Vision, Mission & Values integration\n\n– Keynotes\r\n\nPublic Presentations about Leadership at Chambers of Commerce, CEOs associations (CEO Insights), Universities (Globis, iCLA), Grandes Ecoles Alumni (Polytechnique, Science-Po, HEC, Insead, Essec).\n\n2. Background:\r\n\n– Coaching Experience\r\n\n+ 6000 hours of individual and group coaching of more than 500 Top Executives in Tokyo since 2006.\r\n\n– Career\r\n\n+ 30 years studies and experience in personal development.\r\n\n20 year business experience (sales, marketing and training) including 17 years in Japan. 6 year experience at Autobacs Seven Co. Ltd. (Worldwide leader in Automotive aftermarket – 600 stores) Responsible for international corporate communication, international internet strategy and overseas training program.\n\n– Credential\r\n\n2008: Neuro-Linguistic Programming Trainer at NLPU ( UCSC – USA)\r\n\n2015: Hypnotherapist (CA- USA)\r\n\n2016: Lojon Tibetan Meditation\r\n\n\n\n3. Clients\r\n\n– Profile\r\n\nPresidents & C-Level Executives – Entrepreneurs – Artists\r\n\n– Industries\r\n\nConsulting – Pharmacy – Biotech- Communications – Chemicals\r\n\nBrands – Fashion – Luxury Goods – Lifestyle – Retail – F&B – Hospitality\r\n\n\rwww.e-quilibre.jp',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'philippe-grall-1012531',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Pooneh Mohajer',
    jobTitle: 'Co-Founder / CEO at TOKIDOKI LLC',
    tags: ['Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Pooneh-Mohajer.jpg',
    bio:
      'Pooneh is a serial entrepreneur at heart. Tokidoki is her third company to date. Since debuting in 2005, tokidoki has amassed a cult-like following, and is known not only for its eye-popping aesthetic and criminally cute characters but also its megawatt partnerships with evergreen brands such as Hello Kitty, Karl Lagerfeld, LeSportsac, Barbie, Sephora, Marvel and others.\r\n\n\rPooneh also co-founded Hard Candy Inc., a color cosmetics Company that revolutionized the nail enamel and cosmetic industries worldwide with innovative products. In 1999, Pooneh successfully sold Hard Candy Inc. to LVMH, Moët Hennessy Louis Vuitton SA, an international luxury goods conglomerate. Pooneh received her BA from Vanderbilt University and went on to receive a Juris Doctor from California Western School of Law. Pooneh currently serves on the Inc. Media Board of Advisors.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'pooneh-mohajer-3b261a1',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Prakash Raman',
    jobTitle: 'Leadership Expert',
    tags: ['Entrepreneur', 'Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Prakash-Raman.jpg',
    bio:
      'Prakash Raman serves as a high-performance coach and facilitator for C-Suite executives. Prior to running his own business, he spent 5 years leading Executive Development at LinkedIn, coaching and facilitating for LinkedIn’s senior executives. He facilitates the Leading with Mindfulness and Compassion MBA course at the Stanford Graduate School of Business, and is a member of Marshall Goldsmith’s 100 Coaches initiative. \n\nPrakash’s focus on high-performance is driven from his corporate and athletic experience. Prakash began his career on Wall Street as an investment banker, and achieved success in a variety of business functions, from globally scaling a non-profit, to managing the P&L for the iconic Oreo Cookie brand, and running biz ops for a venture-backed startup. Prior to his corporate career, Prakash played professional tennis, achieved a top 10 ranking in the United States and still holds the Texas record for the longest winning streak (2.5 years) and longest tenure at #1 (6 years).\n\nPrakash received his MBA from the Kellogg School of Management at Northwestern, and his BA in Economics from Rice University, where he played Division I tennis.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'prakash-raman',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Praveen Kopalle',
    jobTitle: 'Professor of Marketing at Tuck School of Business at Dartmouth',
    tags: ['Executive Coach', 'Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Praveen-K-Kopalle.jpg',
    bio:
      'Praveen Kopalle is Associate Dean for the MBA Program, Signal Companies’ Professor of Management, and Professor of Marketing at the Tuck School of Business at Dartmouth, Dartmouth College. Praveen received his Ph.D. from Columbia University, New York, MBA from Indian Institute of Management, Bangalore, and B.E. from Osmania University, Hyderabad. Praveen’s teaching interests are Marketing Management, Statistics, Pricing Strategies, Product Management and his research interests include new products/innovation, pricing and promotions, customer expectations, and e-commerce. Professor Kopalle serves as an Area Editor at the Journal of Marketing, Associate Editor at the Journal of Consumer Research, and Associate Editor at the Journal of Retailing; in addition, he is on the Editorial Boards of Marketing Science, Journal of Marketing Research, Marketing Letters, and Journal of Interactive Marketing. Professor Kopalle has won many awards including: 2011 Distinguished Alumni Award, Indian Institute of Management, Bangalore, India, 2015 Core Teaching Excellence Award at the Tuck School, Winner, 2005 John D. C. Little Best Paper Award in Marketing Science, Best Paper Award of the special issue on Marketing and Innovation (2015), International Journal of Research in Marketing, Finalist, 2006 John D. C. Little Best Paper Award in Marketing Science, Finalist, 2011 Marketing Science Institute’s Robert Buzzell award, Winner, 2014 William R. Davidson Award, American Marketing Association Consortium Faculty, 2013, 2009, 2005, 2001, Finalist, 2012 William R. Davidson Award, Visiting Scholar, Rensselaer Polytechnic Institute (USA), Bocconi University (Italy), Indian School of Business, Hyderabad, India, University of Texas, Austin, TX, 1998 Harvey H. Bundy III Fellowship.\r\n\n\rPraveen’s research has been published in many top-tier journals including Journal of Consumer Research, Journal of Marketing Research, Marketing Science, Management Science, International Journal of Research in Marketing, Strategic Management Journal, Organizational Behavior and Human Decision Processes, Journal of Retailing, Production and Operations Management, Journal of Product Innovation Management, Managerial and Decision Economics, Marketing Letters, Applied Economics, and International Journal of Electronic Commerce. He has also been invited to speak at over forty six universities and institutes worldwide. Praveen Kopalle is a faculty fellow (Internet marketing and pricing) of the Glassmeyer/McNamee Center for Digital Strategies and a faculty associate of the William F. Achtmeyer Center for Global Leadership, both at the Tuck School.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'praveen-kopalle-8a9a008',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Price Pritchett ',
    jobTitle: 'CEO, PRITCHETT, LP',
    tags: ['Author', 'Consultant', 'Executive Coach', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Price-Pritchett.jpg',
    bio:
      'Price Pritchett grew up on a dusty, windblown farm in the flatlands of Texas some 80 miles south of Amarillo. He says, “Mother Nature ran the place. We merely farmed it.” Having mastered the art of plowing with John Deere tractors by the age of nine, he went on to earn B.A. and M.A. degrees in English from West Texas A&M University, then a Ph.D. in psychology from Texas Tech University.\nToday Dr. Pritchett is one of the foremost experts on personal and organizational change. His firm-PRITCHETT, LP-is recognized worldwide for its thought leadership in merger integration strategy, corporate culture, and change management.\nHis book, After the Merger: Managing the Shockwaves-named “One of the 10 Best Business Books of the Year” by Library Journal, was the first ever written on M&A integration and (in its Third Edition) stands as the classic text on the topic. He also is author of the all-time bestseller on mergers, The Employee Guide to Mergers an d Acquisitions. Since founding PRITCHET T in 1974, he has authored half a dozen million-sellers on mergers, culture, plus personal and organizational change. With over 20 million of his 30+ books and handbooks in print, many translated into foreign languages, he stands as one of the best-selling business authors in the world.\nDr. Pritchett’s firm has consulted on some of the world’s largest mergers and corporate change projects, with his work taking him throughout Europe, Asia, and the Americas. His client list stands as a “Who’s Who” of business. Most of the Fortune 1000 companies have used some combination of PRITCHETT ‘s consulting, training, and publications. His work has been referenced in many of the major business journals and newspapers plus featured on CNN, CNBC, and other major television channels.\nHis current focus is on advising boards of directors and executive teams, as well as speaking and writing. Keynote audiences include executive groups at many prestigious organizations such as Honeywell, American Medical Association, Abbott, Xerox, Association for Corporate Growth, John Deere, ABC Radio, Duracell, Texas Health Resources, Chicago Mercantile Exchange, The Conference Board, Mattel, 3M, General Motors, GE, and Bridgestone.\nDr. Pritchett’s newest innovation is clips. These captivating 60-second coaching videos are designed to:\n* Fit people’s shrinking attention span\n* Penetrate the noise in today’s information-overloaded world\n* Position people for self-directed change\nHe says, “clips is like a marriage of YouTube and texting, which means it’s perfectly engineered for the ‘millennial mind:”\nDr. Pritchett is a past-president of the Dallas Psychological Association. Currently he serves on the board of directors for the Park Cities Historical and Preservation Society.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'pricep1',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Rafael Pastor',
    jobTitle: 'Member of Corporate & Not-for-profit Boards',
    tags: ['Corporate Executive', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/rafael-pastor.jpg',
    bio:
      'Rafael Pastor has an extensive and diversified track record in both running successful businesses and advising business leaders. His career has spanned the media/entertainment, education, and business/financial services sectors.\r\n\n\rCurrently serving on a variety of Boards and as an Advisor, Rafael is dedicated to helping organizations harmonize strategy (growth), execution (people), and culture (values). He serves on the Boards of KinderCare Education, Rosetta Books, and Assurance, as well as on the Advisory Boards of Julius, Thuzio,  and MD Revolution.\r\n\n\rRafael also serves as an Advisor to a major international private equity firm, to Vistage International, and to Sonenshine Partners. He is also Chairman of the International Advisory Board of UCSD’s School of Global Policy and Strategy. He is also a member of the Board of the La Jolla Music Society; the Advisory Board of the Rady School of Management at UCSD; the Board of the National Association of Corporate Directors (Southern California Chapter); and the Strategic Roundtable of the San Diego Regional Economic Development Corporation.\r\n\n\rMost recently, he was Chairman of the Board and CEO of Vistage International, the world’s largest for-profit CEO membership company. Previously, based in New York, Rafael held senior executive positions at global media companies as: CEO of Hoyts Cinemas Corporation; President of USA Networks International; Executive Vice President, International, of News Corporation and Fox Television International; and President of CBS/Fox Video International.\r\n\n\rSubsequently, he was co-Founder and co-Chairman of the Sonenshine Pastor (now Sonenshine Partners) investment-banking and venture-capital firm in New York City. Rafael started his career as an attorney, first at the Wall Street law firm of Hawkins, Delafield and Wood and then as Associate General Counsel at CBS Inc. He earned a BA from Columbia University and a JD from NYU School of Law. He was born in Israel to Hungarian parents and speaks several languages.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'rafael-pastor-1561356a',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Raj Raghunathan',
    jobTitle: 'Professor of Marketing at The University of Texas at Austin',
    tags: ['Author', 'Non-Profit', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/raj-raghunathan.jpg',
    bio:
      'Dr. Raj Raghunathan is Professor of Marketing at the McCombs School of Business at The University of Texas at Austin. He is interested in exploring the impact that people’s judgments and decisions have on their happiness and fulfillment. Raj’s work has appeared in top journals, including The Journal of Marketing, The Journal of Consumer Research, The Journal of Marketing Research, Journal of Consumer Psychology, Organizational Behavior and Human Decision Processes, Information Systems Research, and The Journal of Personality and Social Psychology. His work has also been cited in several mass media outlets, including The Atlantic, The New York Times, Fortune, Forbes, Harvard Business Review, Inc, Fast Company, and The Los Angeles Times.\r\n\n\rRaj writes about his views on happiness, creativity, and leadership on his popular Psychology Today blog (with over 1 million page views), Sapient Nature. His six-week long Coursera course on happiness (titled, A Life of Happiness and Fulfillment) currently has over 200,000 registered students from 196 countries, and was recently voted the Top MOOC (Massive Open Online Course) of 2015 and one of the Top 50 MOOCs of all time. Raj’s book (titled, If you’re so smart, why aren’t you happy?) was released in the Spring of 2016 in the US, UK, and India subsequently released in 12 other languages around the world.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'raj-raghunathan-47793a2',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Raj Shah',
    jobTitle: 'President of the Rockefeller Foundation',
    tags: ['Corporate Executive', 'Iconic Leader', 'Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/raj-shah.jpg',
    bio:
      'Dr. Shah brings over twenty years of experience in business, government, and philanthropy to The Rockefeller Foundation.  Appointed as USAID Administrator by President Obama in 2009, Dr. Shah was charged with reshaping the $20 billion agency’s operations to provide greater assistance to pressing development challenges around the globe. By elevating the importance of innovation, promoting public-private partnerships, rethinking internal practices, and shifting how dollars were spent to deliver stronger results, Shah secured bipartisan support that enabled USAID to dramatically accelerate its work to end extreme poverty. Two significant Presidential priorities – Feed the Future and Power Africa – passed the House and Senate with bipartisan support and were signed into law by President Obama, and the Global Food Security Act is the second largest global development legislation after PEPFAR.  Shah’s work delivered results for countries facing democratic transitions, post-conflict situations, and humanitarian crises, and is widely credited with providing life-saving access to food, health, and water for millions of children across the planet. \r\n\n\rDr. Shah is a graduate of the University of Michigan at Ann Arbor, the University of Pennsylvania School of Medicine, and the Wharton School of Business.  Prior to his appointment at USAID, Shah served as Chief Scientist and Undersecretary for Research, Education and Economics at the United States Department of Agriculture.  He also served in a number of leadership roes at the Bill & Melinda Gates Foundation, where he helped launch the Alliance for a Green Revolution in Africa (a joint venture by the Gates and Rockefeller foundations) and the International Financing Facility for Immunization (credited with raising more than $5 billion for childhood immunizations worldwide) and where he supported the creation of the Global Development Program.',
    links: '',
  },
  {
    coachName: 'Reeta Nathwani',
    jobTitle: 'Global Executive Coach PCC Leadership & Change Facilitator',
    tags: ['Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/reeta-professional-pic-2019.jpg',
    bio:
      'Reeta works internationally with CEOs and board directors to achieve greater Success, Fulfillment and Legacy. She has a strong track record across all sectors and a known reputation for her work with individual executives, boards and top teams. She is a Leadership Coach with a direct and inspirational style and is known for growing leaders”. Reeta’s life purpose is to have leaders achieve inspiring performance in their organizations through intelligent emotions and bringing values alive in the work place.\r\n\n\rShe is a Certified Emotional Intelligence & Solution Focused Coach, with a wealth of practical coaching and assessment qualifications. She brings a strong background in behavioural and organizational change from her time in Mars Confectionery and over 21 years of consulting experience. She also draws out lessons learnt from challenging experiences of working globally. She encourages her clients that she coaches to also lead by example, have courageous conversations and give inspirational feedback.\r\n\n\rReeta is an active committee member of the BoardAgender in Singapore “BoardAgender is a conscious and concerted initiative to raise awareness on the economic benefits of an inclusive and gender-balanced business. BoardAgender encourages and enables more women to contribute their expertise in the boardroom and committees. Reeta is a mentor with the Cherie Blair Foundation and more recently was invited to be a coach on the Queen Elizabeth’s Young Leaders Program at Cambridge University. She was selected to be the Chair for International Coaching Week 2016 Singapore.\r\n\n\rHer approach has been described as “insightful yet open, challenging but not aggressive.” She has a pragmatic and outcome-focused style, which she combines with strong commercial acumen. Reeta achieves her satisfaction and pride from delighting her clients and working towards generating “Real Results”. She recognizes that successful leaders within organizations need to have the ability to operate and inspire across all facets of the business. This enables her to have the ability to work with individuals and teams in helping them focus towards common goals of the organization.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'reetanathwani',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Rob Nail',
    jobTitle: 'CEO at Singularity University',
    tags: ['Author', 'Entrepreneur', 'Non-Profit', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Rob-nail.jpg',
    bio:
      'Rob is the CEO and Associate Founder of Singularity University. He brings a unique entrepreneurial and globally-focused approach to growing a non-traditional university as a platform to create a future of abundance where exponential technologies empower us to solve the global grand challenges.\r\n\n\rPrior to Singularity, he co-founded Velocity11 in 1999, building automation equipment and robotics for cancer research and drug discovery. After being acquired by Agilent Technologies in 2007, he traded the CEO role for a General Manager role attempting to be a catalyst for change at a big company. He gave up in 2009 to go surfing, then found his true calling and biggest challenge yet with Singularity University. He was recently a director at Harman (HAR), on technology and audit committees. He helped Harman explore options for long-term growth in a rapidly changing automobile industry, ultimately resulting in ~$8 Billion acquisition by Samsung. As their largest acquisition in history, it brings Samsung directly into the automobile and autonomous car market\r\n\n\rHe is currently on the board of Light&Motion, is a co-founder and director of Alite Designs, is an active angel investor and advisor, and holds degrees in Mechanical, Materials Science and Manufacturing Engineering from UC Davis and Stanford University.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'robnail',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Rod MacKenzie',
    jobTitle: 'Executive Vice President, Chief Development Officer, Pfizer',
    tags: ['Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/rob-mckenzie.jpg',
    bio:
      'Rod MacKenzie, PhD, is Executive Vice President, Chief Development Officer for Pfizer. In this role, Rod is responsible for the development and advancement of Pfizer’s pipeline of medicines in several therapeutic areas, including inflammation and immunology, internal medicine, oncology and rare disease. He serves on the Portfolio Strategy and Investment Committee, which focuses on maximizing the return on R&D investment across the Pfizer portfolio, and is a member of Pfizer’s Executive Leadership Team.\r\n\n\rRod joined Pfizer in Sandwich, UK as a Research Scientist and conducted medicinal chemistry research in the cardiovascular, GI, Sexual Health, Urology and Allergy & Respiratory diseases. Rod is the co-inventor of darifenacin (EnablexTM).\r\n\n\rRod has held numerous leadership positions at Pfizer, including Head of PharmaTherapeutics Research and Development where he oversaw the Cardiovascular & Metabolic Diseases, Pain & Sensory Disorders and Neuroscience Research Units and was responsible for all medicinal chemistry at Pfizer, as well as Small Molecule Pharmaceutical Sciences, Pharmacokinetics, Dynamics & Metabolism and Comparative Medicine. He also served as Site Director of the Groton, Connecticut laboratories, Pfizer’s largest global R&D facility. Prior to this role, Rod held a series of research leadership positions, including Senior Vice President and Head of Worldwide Research, Head of Discovery Chemistry in Sandwich, U.K., Head of the Discovery Technology Center in Cambridge, Massachusetts, Head of Discovery Research in Ann Arbor, Michigan, and Head of Drug Safety R&D.\r\n\n\rRod represents Pfizer on the Board of Directors for ViiV Healthcare, a global specialist HIV company established by GlaxoSmithKline and Pfizer to deliver advances in treatment and care for people living with HIV. He also represents Pfizer on the Board of Directors for TransCelerate, a non-profit organization with a mission to collaborate across the biopharmaceutical research and development community to improve the health of people around the world by accelerating and enhancing the research and development of innovative new therapies.\r\n\n\rRod graduated from the University of Glasgow with a 1st Class Honors degree in chemistry and completed his PhD at Imperial College, London. He was awarded a NATO Postdoctoral Research Fellowship and spent two years at Columbia University, New York working in the area of molecular recognition with Professor W.C. Still.',
    links: '',
  },
  {
    coachName: 'Ronnie Miles',
    jobTitle: 'Lead HR / OD / Talent Management Strategic Partner',
    tags: ['Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/ronnie-miles.jpg',
    bio:
      'Ronald Miles, Jr. (Ronnie) is an HR/OD strategic business partner who collaborates with senior-level business leaders, key stakeholders, and colleagues. He assesses organizational capabilities, develops and execute strategies and, builds competencies aimed at helping leaders maximize contributions of their people. His areas of expertise include talent management, performance management, Hi-Po talent identification, leadership development, diversity/inclusion, workforce planning and succession planning. Over the years, he has worked in higher education, federal government, non-profit and private sectors.\r\n\n\rCurrently, Ronnie works as Manager, Organizational Development at the Federal Reserve Board. In this role, he is responsible for employee engagement, talent management, performance management, talking talent and team development efforts which support human capital strategies that focus on attracting, retaining and developing human capital.\r\n\n\rPrior to the Federal Reserve Board, Ronnie was a Global HR Business Partner at EMD Millipore serving as a trusted advisor for delivering HR solutions to business leaders in R&D, marketing, and product management functions in the US, Europe, and Asia with total annual revenue of €400+M. His efforts led to the reduction in actual negative growth, improvement in cross-functional operations, and an increase in employee engagement.\r\n\n\rBefore EMD Millipore, Ronnie served as a senior-level OD partner at Fannie Mae, Waste Management, and other organizations. His strategic accomplishments are highlighted by leading efforts that include: developing a talent management framework to recruit, retain and develop talent; identifying and retaining Hi-Po talent and; identifying redundancies, reducing inefficiencies in business operations and improving ROI through employee engagement, team development, and executive coaching.\r\n\n\rRonnie earned a BA in Economics and Sociology/Anthropology from St. Mary’s College of Maryland, an MS in Applied Industrial/Organizational Psychology from the University of Baltimore, a graduate certificate in the Fellows of Change Management from Johns Hopkins University and, an executive coaching certificate from Georgetown University. In addition, he has several professional certifications and accreditations.\r\n\n\rlinkedin.com/in/ronaldmilesjr/',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'ronaldmilesjr',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'S. Steven Pan',
    jobTitle: 'Chairman, Silk Hotel Group, Taiwan',
    tags: ['Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/s-steven-pan.jpg',
    bio:
      'S. Steven Pan is the Executive Chairman of Silks Hotel Group and the listed FIH Corporation in Taipei, which is the leading hospitality group in Taiwan. FIH is the owner and developer of Group’s flagship Regent Hotel and Regent Galleria, the first luxury hotel and retail mixed use complex in Asia. The Group also operates Silks and Justsleep hotel brands in addition to Domino’s Pizza. \r\n\n\rSteven joined FIH in 1991 and was appointed President in 1992.  In 2000, he led a management buyout of the controlling stake in FIH and subsequently became its Chairman. In 2010, FIH acquired the Regent luxury hotel business: the iconic luxury brand in Asia created by legendary hotelier Mr. Robert Burns. In 2018, FIH formed joint venture with Intercontinental Hotel Group to further expand Regent brand internationally.    \r\n\n\rSteven also founded Pacific Resources Group in 1994 which has become one of the leading international real estate investor in San Francisco Bay Area and throughout the world.  The Group has completed major real estate transactions such as corporate headquarters of Chevron and Apple computers.\r\n\n\rSteven is the founding Chairman of SR Pan Cultural & Educational Foundation.  He was the country winner of the E&Y Entrepreneurs Award. He was former chair of the Young President Organization (YPO) chapter in Taiwan and continues to serve on the YPO regional board in North Asia.  He also serves on the Board of Overseers for the Columbia Business School and was the former chair of both the Columbia and UC Berkeley Alumni Clubs in Taiwan.\r\n\n\rSteven obtained a BA in Economics from the University of California, Berkeley in 1986 and an MBA from Columbia Business School in 1988. Prior to joining FIH in 1991 he was an Associate at First Boston.',
    links: '',
  },
  {
    coachName: 'Sally Helgesen',
    jobTitle: "Premier Expert on Women's Leadership",
    tags: ['Author', 'Executive Coach', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/sally-helgesen.jpg',
    bio:
      'Sally Helgesen is a best-selling author, speaker and leadership coach, cited in Forbes as the world’s premier expert on women’s leadership. For the last thirty years, her mission has been to help women leaders around the world recognize, articulate and act on their greatest strengths. She also works with senior teams seeking to build more inclusive cultures.\r\n\n\rSally’s most recent book, How Women Rise, co-authored with coaching legend Marshall Goldsmith, became the top-selling title in its field within a week of publication. It explores the specific habits most likely to get in women’s way as they seek advancement. And it offers powerful practices to help women realize their full potential.\r\n\n\rSally’s previous books include The Female Advantage: Women’s Ways of Leadership, hailed as a classic and continuously in print since 1990, and The Female Vision: Women’s Real Power at Work, which explores how women’s strategic insights can strengthen their careers and their organizations. The Web of Inclusion: A New Architecture for Building Great Organizations, published in 1995, was cited in The Wall Street Journal as one of the best books on leadership of all time and credited with bringing the language of inclusion into business.\r\n\n\rIn addition to delivering workshops and keynotes in corporations, partnership firms, universities and associations around the world, Sally has consulted with the UN on building more inclusive country offices in Africa and Asia and led seminars at the Harvard Graduate School of Education and Smith College. She is a contributing editor for Strategy + Business magazine and a member of the MG 100 Best Coaches Network and the New York and International Women’s Forums. She lives in Chatham, NY.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'sallyhelgesen',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Sandy Ogg',
    jobTitle: 'Talent & Leadership Innovator, Author, Speaker, Advisor',
    tags: ['Author', 'Consultant', 'Entrepreneur', 'Executive Coach', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Sandy-ogg.jpg',
    bio:
      'Sandy Ogg is the Founder of CEO.works. From 2011 to 2016, Mr. Ogg was Operating Partner in the Private Equity Group at Blackstone, serving their nearly 100 portfolio companies. For eight years prior to that, he was the Chief Human Resources Officer for Unilever based in London, where he spearheaded the change in the organization’s operating framework and leadership system that was at the heart of the business transformation. Prior to joining Unilever, he served as Senior Vice President, Leadership, Learning and Performance at Motorola. Before his corporate roles, Mr. Ogg worked as a consultant with Dove Associates, The VIA Consulting Group (which he founded), and The Center for Leadership Studies. He began his career doing rescue work at sea as a line officer in the U.S. Coast Guard.\r\n\n\rMr. Ogg holds a Bachelor’s degree in Mathematics (U.S. Coast Guard Academy), a Master’s in Human Development (George Washington University) and an MBA (Kellogg School of Management). He has served on the boards of INSEAD, The Rotterdam School of Management (Erasmus University, Netherlands), The European Academy for Business in Society (Vice Chairman), and BBH Advertising in London. In November 2015, the National Academy of Human Resources inducted him into its class of Fellows in recognition of his contributions to organizations, the profession and society at large.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'sandyogg',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Sanyin Siang',
    jobTitle: 'ED Fuqua/Coach K Leadership Ctr and Engineering Professor',
    tags: ['Author', 'Executive Coach', 'Non-Profit', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/sanyin-siang.jpg',
    bio:
      'Sanyin Siang is the founding executive director of the Coach K Leadership and Ethics Center at Duke University’s Fuqua School of Business. The center is a leadership laboratory with programming for all of Duke’s Daytime MBA students and convenes think tank gatherings across sectors to explore today’s complex leadership challenges.\r\n\n\rShe is a leadership coach, working with CEOs and generals. She an advisor for Google Ventures and Duke Corporate Education. Her thought-leadership has appeared in in Forbes, Fortune, The Wall Street Journal, The Huffington Post, and World Economic Forum Platform. She is also a LinkedIn Influencer with more than 700,000 followers. She has spoken at different gatherings from The White House to The Global Sports Owners & Management Summits, to Generation W. She is a Sr. Advisor with Dan Ariely’s Center for Advanced Hindsight and a faculty for Duke StoryLab. She is also an alumnus of the 86th Joint Civilian Orientation Conference, the US Department of Defense’s oldest and most prestigious public liaison program.\r\n\n\rSanyin received a BSE in biomedical engineering and an MBA from Duke where she was an AB Duke Scholar.\r\n\n\rHer new book, The Launch Book: Motivational Stories for Launching Your Idea, Business, or Next Career, is out August 3, 2017. Drawn from first-hand stories with industry leaders and entrepreneurs, it helps readers understand what to know, to feel, and to believe for a successful launch.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'sanyin',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Sarah McArthur',
    jobTitle: 'COO Marshall Goldsmith',
    tags: ['Author', 'Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/sarah-mcarthur.jpg',
    bio:
      'As COO of Marshall Goldsmith Inc., Sarah McArthur manages the company’s daily operations and leads many exciting efforts for Marshall. These include development, coordination, and promotion of Marshall’s exciting pay-it-forward project, 100 Coaches, his most recent book Triggers, which is a #1 New York Times and Wall Street Journal best-selling title; his highly successful Thinkers50 and LinkedIn video and written blogs; and the client sessions, dinners, and events that have become “a mark that you have made it” according to the prestigious folks at Thinkers50.\r\n\n\rFounder and CEO of *sdedit, Sarah is a writer, editor, and writing coach. Her fields of expertise are management, leadership, executive and business coaching, and human resources. With more than two decades of experience in publishing most prominently as a writer, editor, and writing coach, Sarah has authored and edited numerous books including, Coaching for Leadership: Writings on Leadership from the World’s Greatest Coaches with Marshall Goldsmith and Laurence S. Lyons, The AMA Handbook of Leadership, co-edited with Marshall Goldsmith and John Baldoni (chosen one of the Top 10 Business, Management, and Labor Titles of 2010 by Choice), Global Business Leadership with Dr. E.S. Wibbeke, and Optimizing Talent Workbook with Linda Sharkey. Her next book, Work Is Love Made Visible, co-edited with Marshall Goldsmith and Frances Hesselbein will be published by Jossey-Bass in May 2018.\r\n\n\rIn addition to her own works, Sarah has played significant roles in many other book projects including Marshall Goldsmith’s New York Times best-seller MOJO, all three editions of the best-selling management classic Coaching for Leadership, and Marshall’s Amazon.com, USA Today, and Wall Street Journal #1 best-seller, What Got You Here Won’t Get You There.\r\n\n\rA certified Marshall Goldsmith Stakeholder Centered Coach, Sarah has a BA in English and Environmental Studies from the University of Oregon and a Masters in Publishing from The George Washington University.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'sarahmcarthur',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Sean McGrath',
    jobTitle: 'Executive Vice President Global Human Resources at ConvaTec',
    tags: ['Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Sean-McGrath.jpg',
    bio:
      'Sean McGrath, an Irish national, joined the World Bank Group in March 2012 as vice president of human resources. McGrath has senior HR experience within global, European and Irish organizations — both private and public sector — where he gained a reputation as a change agent and implementer, adept at aligning the HR function with the business side.\r\n\n\rMcGrath started his career in the Irish Defence Forces and served on three different occasions in the Middle East with United Nations peacekeeping missions. He then led European operations for a U.S. manufacturing corporation with sites in Ireland and Poland before joining EBS Building Society as their Head of Retail and Head of HR.\r\n\n\rIn his next position with the National Irish Bank, a subsidiary of Danske Banking Group, McGrath held the position of HR Director and was a member of their executive management team. He then worked as Group HR Director for the Irish Health Service, where he led the largest workforce in Ireland with approximately 100,000 staff represented by over 10 different public sector trade unions.\r\n\n\rMcGrath is a fellow of the Chartered Institute of Personnel and Development, a member of the British Academy of Management, and a former board member of the Public Appointments Service (PAS) in Ireland. He holds a BA from University College Galway, a master’s from Dublin City University, and a doctorate in Business Administration from Durham University in the UK.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'sean-mcgrath-aa877920',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Sergey Sirotenko',
    jobTitle: 'Executive Coach, Leadership Development Consultant, Board Member',
    tags: ['Consultant', 'Entrepreneur', 'Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/sergey-sirotenko.jpg',
    bio:
      'Sergey specializes in developing executives and management teams to achieve their goals and successfully reach for new horizons. An executive coach at Ward Howell, a talent equity consultancy based in Moscow, he uses the methods of Dr. Marshall Goldsmith, recognized by Harvard Business Review as the premier expert in leadership development and creating positive, long-term, and measurable changes in behavior. In 2017, Sergey was acknowledged as one of Marshall Goldsmith’s 100 Coaches, having been selected from a pool of more than 12,000 candidates. Currently, Sergey also serves as an Independent Director on the Board of Russian Aquaculture and as a  Member of the Board for Big Brothers Big Sisters of Russia.\r\n\n\rBetween 2014 and 2016, Sergey was a member of the Global Council on Russia with the World Economic Forum in Davos, where he helped in the preparation of several expert reports on Russia’s socio-economic development.\r\n\n\rSince 2015 Sergey has worked as a Director of Leadership Development at Yale University and has taught a course on Interpersonal and Group Dynamics at the Yale School of Management. Starting in 2010, Sergey also worked on various programs for executives as a trainer and coach at business schools such as INSEAD, CEIBS and SKOLKOVO.\r\n\n\rFrom 2003 until 2014, Sergey worked at PwC, focusing on consulting projects on strategy, operations, and restructuring. Sergey’s clients included major Russian and international companies and government organizations, including the Sochi 2014 Winter Olympic Organizing Committee.\r\n\n\rSergey graduated from the Financial University under the Government of the Russian Federation in 2003 and defended his PhD dissertation in Law in 2011. In 2007, Sergey completed a leadership and coaching program with INSEAD Professor Stanislav Shekshnia, and in 2015 completed a two-year Master’s program in Global Affairs at Yale University Jackson Institute focusing on China.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'sergey-sirotenko-492170115',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Soon Loo',
    jobTitle: 'Board member of public and private companies in Asia Pacific',
    tags: ['Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/soon-loo.jpg',
    bio:
      'A serial entrepreneur, Soon is director and board member of public and private companies in Asia Pacific — including formerly being the chairman and board member of a publicly listed Asian company that went IPO for US$1.5 billion of market capitalization. Soon embarks on entrepreneurship development and economic development initiatives in Asia. He is also a founding chairman of Seri Venture Capital. \n\nHe was a council member of APEC Business Advisory Council (ABAC) from 2016 to 2017\n\nSoon was a Regional Vice President for the AXA Group in the Asia-Pacific where he worked on business development and strategy for the regional office that oversaw the AXA Group companies in 11 countries, with a total annual business of US$9.5 billion.\n\nSoon started his career in technology and co-founded a technology company in Silicon Valley that raised over US$37 million of venture capital. The firm went on to be recognised as a top 20 leading emerging technology company for the Red Herring Magazine’s NDA conference.\n\nIn his personal capacity, Soon has been an adjunct faculty in universities in the region, including Singapore Management University, Nanyang Technological University, University of Brunei Darussalam, and Universiti Technologi Brunei of which he served on the international advisory panel. He co-founded the Passion Unleashed Talk Series in Singapore that features leaders including minister of state, chairmen of listed companies, celebrities, world’s extreme endurance race athletes, and climbers of Mt Everest.\n\nSoon was awarded the “Ten Outstanding Young Persons of The World” (TOYP) award 2013-14 organized by Junior Chamber International (JCI). Soon holds an MBA from the Harvard Business School.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'soonloo',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Srikumar Rao',
    jobTitle: 'The Happiness Guru',
    tags: ['Author', 'Consultant', 'Executive Coach', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/srikumar_rao.jpg',
    bio:
      'Has helped thousands of executives and entrepreneurs all over the world discover deep meaning. His methods have enabled them to achieve quantum leaps in effectiveness. Graduates of his workshops have become more creative and more inspiring leaders. Above all they have developed an inner serenity, born of the knowledge that they will be able to appropriately handle whatever comes their way be it a small wave or a tsunami. They become resilient and bounce back nonchalantly from reverses that would floor most peers.\r\n\n\rHe received his Ph.D. in Marketing from the Graduate School of Business, Columbia University. He has a degree in Physics from St. Stephen’s College, Delhi University and an MBA from the Indian Institute of Management, Ahmedabad. \r\n\n\rHe conceived the innovative course Creativity and Personal Mastery. Students found it so overwhelmingly powerful that it remains the only business school course in the world to have its own alumni association. Dr. Rao’s work has been extensively covered in the media including the New York Times, the Wall Street Journal, the London Times, the Independent, Time, the Financial Times, Fortune, the Guardian, Forbes, Business Week and dozens of other publications. These articles, interviews and other details about his work are at www.cpminstitute.com. Here is a sample of the coverage – Business Week and Training Magazine.\r\n\n\rHe has done pioneering work in motivation and helps senior executives and entrepreneurs become more engaged in work and discover their inner purpose as they go about their tasks. He also works with teams and groups and has been extraordinarily successful in using group dynamics to foster lasting personal change. Many who have been through his program experience exponential jumps in personal and professional productivity.\r\n\nDr. Rao is the author of “Are You Ready to Succeed: Unconventional Strategies for Achieving Personal Mastery in Business and Life”, Hyperion, 2006. The book is an international bestseller and has been translated into many languages and distributed in all continents. His latest book “Happiness at Work: Be Resilient, Motivated and Successful V No Matter What”, McGraw Hill, 2010, is also a business bestseller and has been translated into more than a dozen languages. He is also the creator and narrator of The Personal Mastery Program audio course.\r\n\n\rHe is a powerful speaker and his talks are hosted on many sites including TED.com and Thinkers 50 Interview. He has conducted workshops for and spoken before executives of Microsoft, Google, Merrill Lynch, McDonald’s, Chubb, IBM, United Airlines, Allstate, Johnson & Johnson and dozens of other companies.\r\n\n\rHe has been a contributing editor for Forbes and writes regularly on management practices, leadership and personal mastery for Inc.com and CEO.com. He is a member of the American Society of Journalists and Authors. Dr. Rao was an executive with Warner Communications, Continental Group, Data Resources and McGrawVHill and has consulted with such companies as RCA, Reuters, Citicorp, GTE, Pan Am and Diner’s Club. He has been a seminar leader with the Institute for Management Studies and the American Management Association. He is an expert on marketing strategy and has taught in the corporate programs of companies such as Verizon, NorthropVGrumman, Symbol Technologies and General Instruments as well as in the executive programs of London Business School, Columbia Business School and the Haas School of Business at the University of California at Berkeley.\r\n\n\rDr. Rao has taught at Columbia Business School, London Business School, the Kellogg School of Management at Northwestern University and the Haas School of Management at the University of California at Berkeley. He has served as a marketing advisor to the national board of MENSA. His other interests include tennis, squash, karate, table tennis and chess; Eastern philosophy and meditation; and Wodehouse, science fiction and creative writing.\r\n\n\rDr. Rao can be reached at srikumarsrao@gmail.com',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'srikumarsrao',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Stew Friedman',
    jobTitle: 'Author of Leading the Life You Want, Total Leadership, and Baby Bust',
    tags: ['Author', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Stew Friedman in Madrid 2016.jpg',
    bio:
      'Stew is Wharton’s Practice Professor of Management, having founded both the Wharton Leadership Program and the Wharton Work/Life Integration Project. He has been recognized repeatedly as both one of HR’s Most Influential International Thinkers and one of the “world’s top business thinkers” by Thinkers50.  He won Thinkers50’s Distinguished Achievement Award in the talent management field.  Working Mother chose him as one of America’s 25 most influential men to have made things better for working parents and the Families and Work Institute honored him with its Work Life Legacy Award. \r\n\n\rHis bestselling books, both in numerous languages, are Leading the Life You Want: Skills for Integrating Work and Life (2014) and Total Leadership: Better Leader, Richer Life (2008), which describes his world-renowned Total Leadership program. An award-winning teacher, The New York Times cited the “rock star adoration” he inspires in students. While on leave from Wharton in mid-career, Stew served at Ford Motor Company for 2.5 years as the senior executive responsible for global leadership development.  He serves on boards, consults with organizations, and gives inspiring, interactive keynotes worldwide.  Stew is host of the popular national radio show, Work and Life, on SiriusXM Wharton Business Radio (weekly at 7 PM Eastern)  episodes of which are available as free podcasts at workandlifepodcast.com.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'stewfriedman',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Taavo Godtfredsen',
    jobTitle: 'CEO Advisor, Executive Coach, Keynote Speaker',
    tags: ['Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Taavo-Godtfredsen.jpg',
    bio:
      'Taavo Godtfredsen is an executive coach, speaker and founder and co-chair of the CEO Advisory Forum.  Taavo has been selected as an advisor to the 100 Coaches organization to tap into his depth and breadth of leadership know-how.\n\n\n\nTaavo has spent more than 20 years in the leadership development field as a successful business leader and practitioner. He has traveled the world interviewing and collaborating with hundreds of the most recognized CEOs, best-selling business authors and top business school faculty. With both a breadth of experience and depth of knowledge in the leadership development field, Taavo has remained on the cutting edge continuously working with executives as they adapt to changing business environment. As a pragmatist, Taavo’s methodology zeroes in on the most innovative and time efficient leadership actions that yield the greatest impact.\n\nTaavo was the originator of Five@5:00™ and co-created the Leadership Development Channel™. Taavo began his career at Linkage Inc. and held various senior roles leading both functions and business units. He later joined Targeted Learning Corporation to help lead its growth and sale to Skillsoft Corporation. Taavo is a Master Certified Goldsmith coach and holds an MBA from Babson College.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'taavo-godtfredsen-b948013b',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Tal Ben Shahar',
    jobTitle: 'Founder at Happiness Studies Academy',
    tags: ['Author', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/tal-ben.jpg',
    bio:
      'Tal Ben-Shahar is the co-founder and Chief Content Officer of the Happiness Studies Academy. He taught two of the largest course in Harvard University’s history on “Positive Psychology” and the “The Psychology of Leadership.”\r\n\n\rTal consults and lectures around the world to executives in multi-national corporations, the general public, and at-risk populations. Topics include leadership, education, ethics, happiness, self-esteem, resilience, goal setting, and mindfulness. He is the author of the international best sellers Happier, Being Happy, Choose the Life You Want, and The Joy of Leadership, which have been translated into more than 25 languages. He is also the co-founder of Potentialife and Happier.TV.\r\n\n\rAn avid sportsman, Tal won the U.S. Intercollegiate and Israeli National squash championships. Today, for exercise, he swims, dances, and practices yoga. He obtained his PhD in Organizational Behavior and BA in Philosophy and Psychology from Harvard.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'tal-ben-shahar-09943aa7',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Tammy Erickson',
    jobTitle: 'Adjunct Professor, Organisational Behaviour at London Business School',
    tags: ['Author', 'Speaker', 'Thinker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/tammy-erickson.jpg',
    bio:
      'Tamara J. Erickson is a McKinsey Award-winning author and a widely-respected authority on leadership, the changing workforce, collaboration and innovation, and the nature of work in intelligent organizations. She has five times been named one of the 50 most influential living management thinkers in the world by Thinkers50, the respected ranking of global business thinkers. \r\n\n\rErickson is an Adjunct Professor, Organisational Behaviour, at London Business School, where she has designed and directs the school’s premier leadership programme for senior-most executives, Leading Businesses into the Future.  An experienced executive and global advisor, Erickson has also served on the Board of Directors of two Fortune 500 corporations. She holds a BA degree from the University of Chicago and an MBA from the Harvard Graduate School of Business Administration.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'tamara-j-tammy-erickson-16b662',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Telisa Yancy',
    jobTitle: 'Chief Marketing Officer & Executive champion of Growth & Innovation',
    tags: ['Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/telisa_yancy.jpg',
    bio:
      'Telisa Yancy is the Chief Marketing Officer at American Family Insurance, a Fortune 300 company. Ms. Yancy was elevated to the new role after successfully transforming the consumer marketing efforts of the company while serving as the Vice President of Marketing. Ms. Yancy joined American Family Insurance in January of 2009 after a successful career in the automotive, retail, restaurant, media innovation and consulting industries.\r\n\n\rIn her role, Ms. Yancy leads all consumer marketing efforts for the company including digital, social media and nontraditional advertising avenues to build the brand. In 2011, Ms. Yancy and her team spearheaded a re-positioning of the 85 year old company with a Silver Effie Award winning campaign that changed the conversation in the hyper-competitive consumer insurance industry.\r\n\n\rTelisa holds an MBA from Kellogg Graduate School of Business, Northwestern University and a Bachelor’s Degree in Business Administration from the University of Illinois at Urbana- Champaign College of Business and Commerce.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'telisa-yancy-423a653',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Terry Jackson',
    jobTitle: 'Certified Executive Coach at MG Stakeholder Centered Coaching',
    tags: ['Author', 'Entrepreneur', 'Executive Coach', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Terry_Jackson.jpg',
    bio:
      "Terry Jackson is a highly accomplished, experienced and dynamic Executive Advisor, Thought Leader, and Organizational Consultant. Terry is a Coach and Consultant for US State Department International Information Program. Terry’s passion and purpose is helping others improve their quality of life and achieve performance excellence.\r\n\n\rTerry is the COO (co-founder) of JCG Consulting Group LLC. JCG Consulting Group partners with Executives and Organizations to align Strategy, People, and Processes to optimize the Human Experience and sustain Peak Business Performance. Our proprietary methodologies increase Profit and Productivity, help manage change and reduce organizational cost. \r\n\n\rTerry is a visionary with 25+ years of progressive leadership development experience in sales, marketing, operations management, and business consulting within startups and Fortune 10 companies. Terry holds a Ph.D. in Leadership and Organizational Change. Terry is an authority in Leadership Development, Diversity and Inclusion, Emotional Intelligence and its use to create high levels of employee engagement and sustained performance.\r\n\n\rTerry has demonstrated success in catapulting sales, expanding existing markets, building strategic business relationships, and developing professionals.  Terry has extensive experience in P&L management, new product launches, corporate turnarounds, brand management, contract negotiations, auditing, people development, and several process improvement methodologies.\r\n\n\rTerry has worked with and consulted for companies such giants as Norfolk Southern Corp, ExxonMobil, Bristol Meyers Squibb, New York Life, Anthem, McDonald's, Valassis, Dell-EMC, PioneerSol, Bahria University, Lahore University of Management Science, NED University, National Incubation Center, HIVE, KITE Incubator, and FedEx. Terry is currently engaged with the Pakistan government on several major consulting projects.\r\n\n\rTerry has led large scale consulting and coaching engagements in the following industries: Education, Financial, Petroleum, Telecommunications, State and Federal Government, Retail and Consumer Package Goods.",
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'terence-jackson-ph-d-57618410',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Tom Kolditz',
    jobTitle: 'Executive Director, Doerr Institute for New Leaders at Rice University',
    tags: ['Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Kolditz Doerr Institute Headshot.jpg',
    bio:
      'Tom Kolditz is the founding Director of the Doerr Institute for New Leaders at Rice University—the most comprehensive, evidence-based, university-wide leader development program in the world. \r\n\n\rHe also designed the core Leader Development Program at the Yale School of Management, served as the chairman of the Department of Behavioral Sciences and Leadership at West Point, and was the founding director of the West Point Leadership Center. \r\n\n\rA highly experienced leader, Brigadier General Kolditz has more than 28 years in leadership positions, serving on four continents in his 34 years of military service.  He received the Distinguished Service Medal, the Army’s highest award for service, is a Fellow in the American Psychological Association, and is a member of the Academy of Management.\r\n\n\rHis book, titled In Extremis Leadership: Leading as if Your Life Depended on It, was based on more than 175 interviews taken on the ground in Iraq during combat operations. Dr. Kolditz has published in the Proceedings of the National Academy of Sciences and the proceedings of the World Economic Forum’s Annual Meeting of the New Champions.\r\n\n\rHe has been named as a leadership Thought Leader by the Leader to Leader Institute and as a Top Leader Development Professional by Leadership Excellence. In 2017, he received the Warren Bennis Award for Excellence in Leadership. He holds a BA from Vanderbilt University, three master’s degrees, and a PhD in social psychology from the University of Missouri.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'tom-kolditz-7116a3',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Tony Marx',
    jobTitle: 'President of The New York Public Library',
    tags: ['Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/tony-marx.jpg',
    bio:
      'Since 2011, Anthony W. Marx has led The New York Public Library, the nation’s largest public library system with 18 million visits per year. At NYPL, he has expanded the Library’s role as an education provider, creating new after-school programs for children and teens, expanding English language, citizenship, computer and coding classes, and improving programming for all ages at NYPL’s 88 neighborhood branches. Under his leadership, the Library has increased access to e-books, partnered with the City’s public schools to enable millions of books to circulate directly to teachers and students, and launched a pilot to provide internet access in low income homes to redress the digital divide. Research materials are being digitized and new collections acquired, on-site storage, research facilities and more great staff being added.\r\n\n\rFrom 2003 to 2011, Marx served as president of Amherst College in Massachusetts, where low-income student enrollment tripled during his tenure. Before Amherst, Marx was a political science professor and director of undergraduate studies at Columbia University, a Guggenheim Fellow, and had worked on education in South Africa in the 1980s. Marx has a BA from Yale, an MPA from the Woodrow Wilson School at Princeton University, and a PhD, also from Princeton.',
    links: '',
  },
  {
    coachName: 'Wendy Greeson',
    jobTitle: 'Executive Coach, principle consultant, Amplify Your Talent',
    tags: ['Consultant', 'Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/Wendy-Greeson.jpg',
    bio:
      'Wendy Greeson is an innovative and results driven talent management professional with a successful record of leading large-scale initiatives and creating development programs that focus on building leadership bench strength.   With over 15 years of experience, she has consistently managed high profile projects with tight deadlines, defined budgets, and competing agendas.  \n\n\r\rWendy has a MS in Training and Development and a BA in Communications from Eastern Illinois University.   She was selected to participate in a 2-year study on Emotional Intelligence through the University of Illinois in Chicago and has traveled as far as Hong Kong to facilitate leadership development programs.  In 2017, Wendy was selected from over 16,000 candidates to be a protégé of Marshall Goldsmith through his 100 Coaches initiative (#MG100).\r\r\n\nWhile at Arthur J. Gallagher, Wendy was recognized for her extensive work with Harvard Business Publishing.  As a result, Gallagher’s leadership program was highlighted in a Harvard client success story.  Additionally, the program received several Leadership Excellence awards starting in 2015 with Best in Class - Large Company.  In 2016 the program was recognized as the #1 Best Sales/Leadership Program, #3 Best Senior/Experienced Leader Program, #5 Best Global Leadership Program.\r\r\n\nAs the Principal Consultant and Owner of Amplify Your Talent, Wendy partners with Fortune 500 companies to provide integrated talent management solutions.  Throughout the course of her career, she has consistently demonstrated the ability to think strategically and execute with impact, while pursuing her life-long passion to help others learn, lead, and grow.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'wendygreeson',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Will Linssen',
    jobTitle: 'MG Coaching Practice Leader APAC & Europe, Master Certified Coach',
    tags: ['Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/will-linssen.jpg',
    bio:
      '‘Making Change Happen’ is the foundation based on which Will provides top executives with effective business solutions and practical leadership applications that deliver measurable results for their specific organizational challenges. Will has 20 years of in-depth experience in executive positions and managing businesses in Europe and Asia. Currently he is the Practice Leader for Asia and Europe at Marshall Goldsmith Stakeholder Centered Coaching and in this position he also coaches numerous CEOs and other top level executives.\n\nWill is known as the “Coaches Coach” and is one of the first Master Certified Coaches at Marshall Goldsmith Stakeholder Centered Coaching. For over two decades he has been working with executive teams to measurably improve their leadership and organizational effectiveness. He has held several positions in general management and business management at multinational companies in Europe and Asia and he also serves at the board of several multinationals in Asia. Furthermore he travels the globe training executive coaches and business leaders in using Marshall’s methodology.\n\nClients consistently commend his results driven personality combined with his confident, energetic and friendly character. A good listener and problem solver with in depth business knowledge and cross cultural understanding, he has also been recognized for his creative and analytical skills, and most of his executive clients hold international positions in a wide range of industries at Fortune 500 Cos across Asia and Europe such as Coca Cola, GSK, Novartis, McDonalds, Philips, ING, Philip Morris, BAT, LG, Standard Chartered Bank, Bayer, Syngenta, AON Hewitt and SC Johnson.\n\nOriginally from the Netherlands, Will has been living and working in Asia since the early nineties. He holds a Master of Science degree in Technology Management from the Eindhoven University of Technology in the Netherlands and a Master degree in Business Administration from IMD, in Switzerland, which has been consistently ranked among the world’s top MBA schools. Will has earned a number of well recognized professional HR development accreditations in the field of leadership, executive coaching and assessments by reputed international organizations such as:\n\n* Marshall Goldsmith Stakeholder Centered Coaching (Master Certified Coach (MCC)\n* Global Leader of the Future by Marshall Goldsmith\n* Organizational leadership development assessments from Human Synergistics\n* Emotional intelligence leadership from Daniel Goleman / Hay Group\n* 7 Habits of Highly Effective People from FranklinCovey\n* Team collaboration &amp; managing diversity from Belbin\n* Personality typing tools such as MBTI from CPP and Predictive Index from PI International\n  Stress and performance management from HeartMath\n* Will has co-authored various books with Marshall Goldsmith and others such as:\n  * \n  Coaches Handbook for Marshall Goldsmith Stakeholder Centered Coaching\n  * Global Leader of the Future by Marshall Goldsmith – Assessment Guidebook for Certified Professionals\n  * Taking the Stage: Breakthrough Stories from Women Leaders',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'wlinssen',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Marina Cvetkovic',
    jobTitle: 'Board Advisor/Boardroom Futurist, C-Suite Coach, Forbes Coach Council Member, TEDx Speaker',
    tags: ['Executive Coach', 'Consultant', 'Speaker', 'Author', 'Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/dsc_9756_1-marina-cvetkovic-1-.jpg',
    bio:
      "Marina Cvetkovic is a trusted C-Suite coach and advisor – she combines strong financial services background with coaching expertise to help companies and executives redefine their processes as well as build a culture of agility and innovation to successfully face disruption in the market. Currently, Marina is the Vice President of Strategy and Chief of Staff to the CEO at Swiss Re (SIX:SREN), the $34B global/largest reinsurance company worldwide. Her focus is on strengthening the culture of agile innovation for a 4'000 employee organization. She has been selected as the Winner of the prestigious 2019 FinNext Award for her innovative and forward looking contribution to the financial services industry. \n\nShe coaches numerous executive teams and senior vice presidents in the area of executive presence and emotional intelligence, as a certified emotional intelligence and management coach and advisor. Prior to this, Marina has gained substantial leadership experience driving growth for Big 4 and Fortune 500 companies globally. \n\nBOARD EXPERTISE: Marina is the founder of The Peak Alliance, a NYC based consultancy focused on executive coaching and board advising. She is a trusted board member and advisor, focusing on revolutionizing the boardroom to complement digital transformation in underlying organizations. Marina is a board advisor for Rutgers University, Leading Disruptive Innovation Executive Education Program as well as a board member and strategy committee co-chair at Governance Matters, with a mission to build high-performing boards in NY. She studied board governance with the most respected thought leaders in the field at the Wharton School executive program “Boards that Lead”. She is a strong advocate of board diversity and regularly mentors aspiring directors.\n\nTHOUGHT LEADERSHIP: Marina’s thought leadership on Board Governance is published on Forbes. She is also a featured thought leader on Insurtech matters featured on the number one platform in the industry, Insurance Thought Leadership. She is a frequent keynote speaker on board effectiveness, leadership and disruption for the prestigious Conference Board Executive Coaching Conference in NYC, Disruption & Innovation Forum NYC, TEDx salons etc. Marina is the founder of TEDx BethuneStreet, a highly influential platform for TED-like ideas worth spreading in NYC. Marina is an ICF certified executive coach and a faculty member in the EQ Coaching Certification program founded by Prof. Daniel Goleman, pioneer of emotional intelligence. She teaches Leadership and EQ at St John's University Executive Education in NYC. Her work has been published by the International Coaching Federation (ICF) and she served on the Panel of Judges for the ICF International Prism Award, with a mission to annually award the company with the highest coaching standards in the world.\n\nGIVING BACK: Marina gives back generously by advising boards of not-for-profit organizations. She is a board advisor for SixDegrees.org, a charity founded by Hollywood actor Kevin Bacon, with a mission to improve exposure and better outreach of small grassroots non-profit organizations. She is also a board advisor for The New York Mindful Capoeira Center with a mission to teach mindful capoeira in all city schools.\n\nLIFE-LONG STUDENT: Currently studying Cybersecurity at Harvard Business School and Digital Transformation at Berkeley, University of California\n\nGLOBAL CITIZEN: Belgrade/Zurich/currently NYC. Speaks Serbian, English, German, Italian, Spanish",
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'marinacvetkovic',
      twitter: '',
      website: 'https://www.thepeakalliance.com',
    },
  },
  {
    coachName: 'Shoma Chatterjee Hayden',
    jobTitle: 'Leadership Development Expert, ghSMART & Co.',
    tags: ['Executive Coach', 'Consultant'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/shomachatterjee_highres-shoma-chatterjee-hayden-1-.jpg',
    bio:
      'Shoma is a high-performance coach and advisor to C-Suite executives and boards in public and PE-owned companies. Currently, she is an Expert Principal at ghSMART, a firm that brings analytical rigor and data driven approaches to help leaders and their teams build valuable organizations. She is a member of Marshall Goldsmith’s 100 Coaches initiative, a group that shares her belief that leadership is a powerful lever for positive change.\n\nPrior to ghSMART, she co-headed the senior leadership development function at Goldman Sachs (Pine Street), where she focused on advising and coaching the firm’s partners and managing directors on personal and team development. She also architected a number of signature leadership acceleration initiatives for high potential managing directors, senior women leaders, and high-producing traders. Previously, Shoma was a management consultant at Deloitte Consulting’s Strategy & Operations practice and has roles at the Federal Reserve Bank and the United Nations.\n\nShe has contributed to a number of publications including Harvard Business Review, Chief Executive magazine, Forbes, Leader to Leader Journal, and The Handbook of Teaching Leadership.\n\nShoma earned a BA from Northwestern University in economics and math, an MBA from Columbia Business School, and an MA in International Affairs from Columbia University. She has completed coaching certifications from UC-Berkeley Executive Coaching Institute, The Neuroleadership Institute, and the College of Executive Coaching. She is also a trauma counselor with a certificate in Group Interpersonal Psychotherapy from Columbia University’s Global Mental Health Program. She lives in New York with her husband Richard, where she is actively involved in refugee and resettlement efforts in New York and in her native country of Burma.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'shoma-hayden-2b308a2',
      twitter: '',
      website: 'https://www.ghsmart.com/shoma-chatterjee-hayden',
    },
  },
  {
    coachName: 'Howard Jacobson',
    jobTitle: 'Chief of Behavioral Science',
    tags: ['Executive Coach', 'Speaker', 'Author', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/howard-jacobson.jpg',
    bio:
      'Howard Jacobson, PhD is co-founder and Chief of Behavioral Science at WellStart Health, a digital therapeutics platform and care team dedicated to putting chronic disease out of business. \n\nHoward is also co-founder of the WellStart Health Coaching Academy, where he trains wellness coaches to guide their clients to dramatic health improvements. \n\nHoward is co-author of Sick to Fit, with Josh LaJaunie, and contributing author to Whole, by T. Colin Campbell, PhD, and Proteinaholic, by Garth Davis, MD.\n\nHe’s also co-author, with Peter Bregman, of the “Coaching for Performance” chapter in the American Management Association’s Bodies of Knowledge guidebook.\n\nHoward has been coaching high performers since 2001. He is certified in Peter Bregman’s QUICC Coaching methodology, BJ Fogg’s Tiny Habits, and Glenn Livingston’s Never Binge Again system.\n\nHoward earned his MPH and PhD in Health Studies from Temple University, and his BA from Princeton University.\n\nHoward lives on an ecological farm in rural North Carolina, where he writes, gardens, plays Ultimate Frisbee, runs ultra marathons, and practices Russian Martial Arts. \n\nHoward’s goals include shaking up healthcare, sharing how delicious and joyful a healthy life can be, saving the planet, and reintroducing people to their most authentic, antifragile, best selves.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'howardwellstart',
      twitter: '',
      website: 'https://www.WellStartHealth.com',
    },
  },
  {
    coachName: 'Dr. Richard Osibanjo',
    jobTitle: 'Executive Coach, Leadership & Culture Development,  Speaker on Influence.',
    tags: ['Executive Coach', 'Speaker', 'Author', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/mg_richardosibanjo_bio3_photo-richard-osibanjo.jpg',
    bio:
      'Dr. Richard Osibanjo is a leading expert, author, executive coach, program facilitator, and keynote speaker in transformational leadership and senior team performance. His work centers on helping senior leaders energize their organization with bold, transformational strategies that unlock human potential and new market growth. He currently serves as an Organizational Development Partner and trusted advisor to executive leaders at Intel Corporation. \r\n\nDr. Osibanjo was born and raised in Nigeria. A chemist by training, he received a B.Sc.  in Industrial Chemistry from the University of Ibadan in Nigeria, a M.Sc. in Analytical Chemistry and Environmental Science from Loughborough Universality in the United Kingdom, and a Ph.D. in Chemistry from the University of California, Davis. He is a\r John Maxwell certified leadership coach, trainer  and speaker. \r\n\nDr. Osibanjo resides in Portland, Oregon with his wife and two sons and is actively involved with his church and community development. Through his educational foundation, Connect-Learn-Growth (CLG), he works with underrepresented minority youths in Portland to pursue STEM careers through an innovative, project-based outreach program that has been introduced to Nigeria to spur sustainable socioeconomic development.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'richardosibanjo',
      twitter: '',
      website: 'https://www.richardosibanjo.com',
    },
  },
  {
    coachName: 'Ilia Tsulaia',
    jobTitle: 'Partner and Board Member of Archi.  Member of Parliament of Georgia',
    tags: ['Consultant', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/_mg_7866-ilia-tsulaia.jpg',
    bio:
      'Partner and Board Member of Archi – Leading Real Estate Development Company \\\nMember of Parliament of Georgia\\\nMember of Board of Trustees at Businesses Association of Georgia\n\nSince 2006 Mr. Ilia Tsulaia went through a long journey, from the business consulting to creating the leading real estate Development Company in Georgia – LTD Archi. From 2006 until 2016, Ilia was Archi’s CEO and currently remains a partner and a board member of the company.\n\nIn 2009 Archi encountered one of the hardest challenges as a business corporation: World crises of 2008 – 2009 led business to the deadlock, especially the real estate field.\n\nThe above-mentioned impediments forced most of the real-estate companies to halter their business activities, but Archi handled the crisis with admirable professionalism and remarkable competence. Believing in country’s new opportunities, together with the feeling of responsibility towards the company’s partners and customers, Archi led by Mr. Tsulaia, worked harder than ever and became number 1 real estate developer in Georgia.\n\nEven though Georgia is a small country with a population of 3.7 million, Archi’s real estate sales thrived: during the year 2018, the company sold 1200 apartments – regarded as the biggest share (7%) of the country’s real estate market.\n\nAdditionally, Archi contributes to the hospitality development in Georgia through partnership with international companies such as ACCOR S.A and manages 7 ongoing projects with the aim to develop international hotel chains in the country. \n\nEven though Ilia is an entrepreneur at heart, he chose to dedicate himself to the country and people, so he took part in 2016 Parliamentary Elections and became a Member of the Parliament of Georgia. Ilia holds master’s degree in law and is actively involved in the development of the Georgia’s Legislation.\n\nAlso Ilia is a Member of Board of Trustees at Businesses Association of Georgia. BAG is one of the strongest unit which creates 50% of GDP in the country. The mission of BAG is to improve business environment in Georgia by uniting member companies, encoureging close cooperation with government, international and national partners."',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'ilia-tsulaia-5b31056',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Ron Carucci',
    jobTitle: 'Managing Partner, Navalent',
    tags: ['Executive Coach', 'Consultant', 'Speaker', 'Author'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/ron-high-res-ron-carucci.jpg',
    bio:
      'Ron Carucci is co-founder and managing partner at Navalent, working with CEOs and executives pursuing transformational change for their organizations, leaders, and industries.  He has a thirty year track record helping some of the world’s most influential executives tackle challenges of strategy, organization and leadership.  From start-ups to Fortune 10’s, turn-arounds to new markets and strategies, overhauling leadership and culture to re-designing for growth, he has worked in more than 25 countries on 4 continents.  In addition to being a regular contributor to HBR and Forbes, (you can read his work at these links), he has been featured in Fortune, CEO Magazine, BusinessInsider, MSNBC, Inc, Business Week, Smart Business, and thought leaders.  \n\nHe is the bestselling author of 8 books.  He led a ten year longitudinal study on executive transition to find out why more than 50% of leaders fail within their first 18 months of appointment, and uncovering the four differentiating capabilities that set successful leaders apart. Those findings are highlighted in his ground breaking Amazon #1 book Rising To Power, co-authored with Eric Hansen.  These findings are also summarized by Ron in the popular HBR article, which can be found here.  HBR selected that research as one of 2016’s “Ideas that mattered most", and I recently presented it on their Live series, which you can see here: https://www.facebook.com/HBR/videos/10155500067767787/   Ron is a 2-time TEDx speaker, and you can listen to his recent TEDx talk on power here: https://www.youtube.com/watch?v=v234mvaUQ4o&feature=youtu.be\n\nHe has helped CEOs, their executive teams, and their enterprises redesign themselves and build appropriate leadership strategies to ensure the current and next generation of leaders have the capabilities required by the organization. He has been chief architect of several major leadership development simulations and curriculums for global organizations focused on developing high-potential executive talent and connecting strategy execution to leadership capability.\n\nRon is a former faculty member at Fordham University Graduate School as an associate professor of organizational behavior. He has also served as an adjunct at the Center for Creative Leadership. His clients have included Abbvie, Starbucks, Microsoft, Coronal Energy, CitiBank, Corning, Inc., Lamb Weston, The Hershey Company, Bristol-Myers Squibb, Amgen, Deutsche Bank, Gates Corporation, MMC, Edward Jones Investments, ConAgra Foods, TriHealth, OhioHealth, Del Monte Foods, Midnight Oil Creative, Weyerhaeuser, McDonald’s Corporation, Sojourners, The Atlantic Philanthropies, Kleiner Perkins Caufield & Byers, Cadbury, Miller Brewing, the U.S. Patent & Trademark Office, Price Waterhouse Coopers, Johnson & Johnson, ADP, and the CIA.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'navalent',
      twitter: '',
      website: 'https://www.navalent.com',
    },
  },
  {
    coachName: 'Robert Glazer',
    jobTitle: 'Founder & CEO',
    tags: ['Consultant', 'Speaker', 'Author', 'Iconic Leader', 'Corporate Executive', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/ayr-headshot1-robert-glazer-1-.jpg',
    bio:
      "Robert Glazer is the founder and CEO of global performance marketing agency, Acceleration Partners. A serial entrepreneur, he has a passion for helping individuals and organizations build their capacity to outperform.\n\nUnder his leadership, Acceleration Partners has become a recognized global leader in the affiliate and partner marketing industry, receiving numerous industry and company culture awards.  Bob was also named to Glassdoor’s list of Top CEO of Small and Medium Companies in the US, ranking #2.\n\nA regular columnist for Forbes, Inc. and Entrepreneur, Bob’s writing reaches over five million people around the globe each year who resonate with his topics, which range from performance marketing and entrepreneurship to company culture, capacity building, hiring and leadership.\n\nWorldwide, he is also a sought-after speaker by companies and organizations, especially on subjects related to business growth, culture, mindful transitions, building capacity and performance.\n\nBob shares his ideas and insights via Friday Forward, a popular weekly inspirational newsletter that reaches 100,000 people across 50+ countries each week. He’s the author of the international bestselling book, Performance Partnerships. His second book, Elevate, is a based on the lessons of Friday Forward and provides a guide to help readers build their capacity in themselves and others and will be published October 1st 2019.\n\nA strong believer in giving back, Bob serves on the Board of Directors for BUILD Boston, is a global leader in Entrepreneurs' Organization (EO) and founder of The Fifth Night charitable event.\n\nOutside of work, Bob can likely be found skiing, cycling, reading, traveling, spending quality time with his family or overseeing some sort of home renovation project.",
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'glazer',
      twitter: '',
      website: 'https://www.robertglazer.com',
    },
  },
  {
    coachName: 'Stefanie Johnson',
    jobTitle: 'Associate Professor of Management',
    tags: ['Consultant', 'Speaker', 'Author'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/johnson-stefanie-johnson-1-.jpg',
    bio:
      "Dr. Stefanie K. Johnson is an associate professor of leadership at the University of Colorado, Boulder's Leeds School of Business and author of Inclusify: Harnessing the power of uniqueness and belonging to build innovative teams published by Harper Collins.\n\nDr. Johnson studies the intersection of leadership and diversity, focusing on (1) how unconscious bias affects the evaluation of leaders and (2) strategies that leaders can use to mitigate bias.\n\nShe has published 60 journal articles and book chapters in outlets such as Harvard Business Review and The Academy of Management Journal. She has presented her work at over 170 meetings around the world including at the White House for a 2016 summit on diversity in corporate America on National Equal Pay Day.\n\nShe has extensive consulting experience and has created and delivered leadership development training with an emphasis on evidence-based practice. She has received $3,800,000 in external grant funding to study leadership and create leadership development programs.\n\nMedia outlets featuring Stefanie’s work include: The Economist, Newsweek, Time, Wall Street Journal, Bloomberg, HuffPost, Washington Post, Quartz, Discover, CNN, ABC, NBC, CNBC. She has appeared on Fox, ABC, NBC, CNN, and CNN International.",
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'stefanie-johnson-338942a4',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Bruce Kasanoff',
    jobTitle: 'Social Media Ghostwriter for Entrepreneurs',
    tags: ['Executive Coach', 'Consultant', 'Speaker', 'Author', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/bruce-kasanoff-headshot-black-shirt-cropped-less-bruce-kasanoff.jpg',
    bio:
      'Bruce Kasanoff is a social media ghostwriter for entrepreneurs, who also writes (and speaks) under his own name. He lives according to a philosophy of doing well by doing good. He is a LinkedIn Influencer followed by more than 850,000 professionals, and also is a Forbes contributor in the Leadership and Career channels; his focus is on bringing out talent in others.\n\nBruce is the author of How to Self-Promote without Being a Jerk—which has helped tens of thousands of professionals who don’t like to brag—and Never Tell People What You Do. His 2001 book, Making It Personal, predicted many of the personalization practices that have become mainstream today.  He is the co-author with Amy Blaschka of I Am: Escape Distractions, Unlock Your Imagination & Unleash Your Potential, a #1 new release on Amazon in Health & Stress.\n\n His other accomplishments include: \n\n As a strategist:\n\n\\- The Chartered Institute of Marketing named Bruce one of the 50 most influential thinkers in marketing and business today.\n\n\\- He was part of the Ogilvy & Mather team in the mid-90s that helped transform the IBM brand from arrogant to approachable.\n\n\\- He earned an MBA at The Wharton School and has presented at Wharton, Yale University, New York University, Fairfield University and Babson College.\n\nAs an entrepreneur:\n\n\\- He has raised or helped raise $20 million for start-up and entrepreneurial ventures.\n\n\\- He was also the ""marketing guru” for 250 entrepreneurs—over five years—through the Birthing of Giants program.\n\n\\- Bruce was an original partner of the Peppers and Rogers Group, and helped grow that firm from ten to 150 employees in three years.\n\nIn Park City, Bruce is also known as the Chairlift Chats guy, who interviews fascinating people on chairlifts. He skis about 50 days a year, usually 90 minutes at a time. (Your ""lunch"" is his 10,000 vertical feet.)',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'kasanoff',
      twitter: '',
      website: 'https://www.kasanoff.com',
    },
  },
  {
    coachName: 'Cynthia A Burnham',
    jobTitle: 'Executive Coach, Speaker, Author',
    tags: ['Executive Coach', 'Consultant', 'Speaker', 'Author'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/08r_cindyb2017-1-cynthia-burnham-1-.jpg',
    bio:
      'Cynthia Burnham is a Master Corporate Executive Coach (MCEC), Board Certified Coach (BCC), leadership consultant, former Wall Street Senior Vice President, and author of “The Charisma Edge: A How-To Guide for Turning On Your Leadership Power.”  She has been called “life altering” by her clients, and has a deep personal mission to help others become more powerful, confident, and aligned with who they are at their best, most authentic core.  \n\nCynthia specializes in personal presence, leadership enhancement, and powerful communication techniques.  She has more than 30 years of experience working with hundreds of groups and thousands of people in global, U.S.-based and regional companies where she has helped people get out of their own way while delivering business results.  Cynthia earned an MBA in marketing from UCLA, and a B.A. in Creative Studies from UCSB.  She is also a professional singer and a trained Laughter Yoga Instructor, and lives in the mountains east of San Diego where there is actually snow a couple of times a year.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'cynthia-burnham-mba-0732414',
      twitter: '',
      website: 'https://www.cynthiaburnham.com',
    },
  },
  {
    coachName: 'Laura Gassner Otting',
    jobTitle: 'Chief Catalyzing Officer, Limitless Possibility',
    tags: ['Executive Coach', 'Consultant', 'Speaker', 'Author', 'Entrepreneur', 'Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/lgo-headshot-laura-gassner-otting.jpg',
    bio:
      'Laura Gassner Otting helps people get “unstuck” — and achieve extraordinary results.\n\nThrough Limitless Possibility, Laura collaborates with change agents, entrepreneurs, investors, leaders, and donors to push past the doubt and indecision that consign great ideas to limbo. She delivers strategic thinking, well-honed wisdom, and catalytic perspective informed by decades of navigating change across the start-up, nonprofit, political, and philanthropic landscapes.\n\nLaura’s 25-year resume is defined by her entrepreneurial edge. She served as a Presidential Appointee in Bill Clinton’s White House, helping shape AmeriCorps; left a leadership role at respected nonprofit search firm, Isaacson, Miller, to expand the startup ExecSearches.com; and founded and ran the Nonprofit Professionals Advisory Group, which partnered with the full gamut of mission driven nonprofit executives, from start-up dreamers to scaling social entrepreneurs to global philanthropists. She is the author of Mission-Driven, a book for those moving from profit to purpose, and the upcoming Limitless: How to Ignore Everybody, Carve Your Own Path, and Live Your Best Life (April 2019).\n\nThrough her own commitment to give back, Laura has helped build a local Montessori school, co-founded a women’s philanthropic initiative, advised a start-up national women’s PAC, grew a citizen-leadership development program, and completed three charity-inspired marathons—projects emblematic of her passions and values. She’s turned on by the audacity of The Big Idea and that larger-than-life goal you just can’t seem to shake. She’s an instigator, a motivator, and a provocateur, and she’s never met a revolution she didn’t like.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'heylgo',
      twitter: '',
      website: 'https://www.LimitlessPossibility.com',
    },
  },
  {
    coachName: 'Megan Gilgan',
    jobTitle: 'Deputy Director of Public Partnerships, UNICEF',
    tags: ['Corporate Executive', 'Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/megangilgan_photo_44kb-megan-gilgan.jpg',
    bio:
      'Megan is the Deputy Director of the Public Partnerships Division of UNICEF (the United Nations Children’s Fund), responsible for mobilizing more than $ 4 billion in revenues annually.  She has worked in international cooperation for 20 years in some of the most complex situations in the world including Afghanistan, Bangladesh, Kosovo and South Sudan.  She is known as someone that can navigate the most politically and operationally complex situations and build, motivate and support diverse global teams.  Before taking on her current role, she was Deputy Chief of Staff for UNICEF’s Executive Director, where she also acted as UNICEF’s Special Coordinator for Prevention of Sexual Exploitation and Workplace Harassment, initiating sweeping changes to UNICEF’s management culture, policies and systems.  Megan holds a Master’s Degree in International Relations from the London School of Economics and has published on engagement in complex emergencies.  Born and raised in Vancouver, Canada, she has two children and is a lover of the outdoors – skiing, sailing, hiking – and long road trips.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'megan-gilgan-5b8b55a7',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Michael Canic',
    jobTitle: 'President & Chief Flag-Bearer at Making Strategy Happen',
    tags: ['Consultant', 'Speaker', 'Author'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/ydqxe92-t-gxy52trwzxrg_thumb_d303-michael-canic.jpg',
    bio:
      'Michael Canic is President and Chief Flag-Bearer of Making Strategy Happen®. Through high-impact consulting, provocative presentations, and a wealth of resources, Michael helps committed leaders turn ambition into strategy, and strategy into reality.\n\nAs a consultant, he focuses on the often overlooked, mid-market companies that account for roughly one-third of the economy. He has helped hundreds of leaders across North America achieve their strategic goals by instituting the structure and discipline of his Strategic Management System™. His clients say it is the most effective strategic process they’ve experienced.\n\nAs a business leader, Michael managed the consulting division of The Atlanta Consulting Group, a pioneering firm in the field of trust-based leadership. Prior to that, at FedEx, he held a leadership role developing and implementing service quality strategy in field operations.\n\nAs a speaker, Michael has delivered hundreds of invited presentations to audiences on four continents. He has received the top earned designation in the speaking profession: Certified Speaking Professional.\n\nAs a writer, Michael has published over 400 blogs with ready-to-apply concepts, practices and tools. His first book, Ruthless Consistency: How Committed Leaders Execute Strategy, Implement Change and Build Organizations That Win, will be published in 2020 by McGraw-Hill.\n\nAs a volunteer, Michael has served as a board member or advisor to numerous not-for-profit organizations. He has a particular interest in mentoring early-career professionals.\n\nMichael has a PhD in the Psychology of Human Performance from the University of British Columbia (UBC). He was captain and Most Inspirational Player on UBC’s football team, and later helped coach the team to a national championship.\n\nAn adventure traveler, Michael and wife Bernadine have traveled to more than 40 countries. He has journeyed by camel in the Sahara, trekked the mountains of Northern Pakistan, and canoed in the Amazon. Be sure to ask him about swimming with piranha.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'michaelcanic',
      twitter: '',
      website: 'https://www.MakingStrategyHappen.com',
    },
  },
  {
    coachName: 'Caroline Webb',
    jobTitle: 'Author of How to Have a Good Day | Senior Adviser, McKinsey | CEO, Sevenshift',
    tags: ['Executive Coach', 'Consultant', 'Speaker', 'Author', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/cw-book-jacket-square-for-avatars-caroline-webb.jpg',
    bio:
      'Caroline Webb is a management consultant, economist and renowned leadership coach who has worked with hundreds of organizations to help their employees be more productive, energized, and successful – first as a Partner at McKinsey, where she continues to serve as a Senior Advisor, and now as CEO of her own firm, Sevenshift. She specializes in showing people how to transform their life and work for the better by applying insights from the behavioral sciences: behavioral economics, psychology and neuroscience. Her book on that topic – How to Have a Good Day: Harness the Power of Behavioral Science to Transform Your Working Life – has been published in 14 languages and over 60 countries so far. It was hailed by Forbes as one of their “must-read business books,” described by Fortune as one of their top “self-improvement through data” books, and listed by Inc magazine as one of the “best 15 leadership and personal development books of the past five years.” It also won plaudits from publications as diverse as the Financial Times, TIME, and Cosmopolitan magazine.\n\nDuring her twelve years with McKinsey & Company, Caroline co-founded McKinsey’s leadership practice, and designed the firm’s approach to transforming senior team dynamics. She also founded and remains faculty of McKinsey’s flagship training course for senior female executives. Before that, Caroline spent the 1990s working in public policy as an economist at the Bank of England. Her work there included global economic forecasting and institution building in post-communist eastern Europe.\n\nCaroline has written on applied behavioral change topics for HBR, the World Economic Forum, Fast Company, Quartz, Business Insider, Huffington Post and WIRED. Her work has also been widely featured in national and international media over the years, including in The Economist, The Financial Times, The Washington Post, The New York Times, The Guardian, Inc., Forbes, Fortune, and BBC Radio. She is represented by Washington Speakers Bureau for her speaking engagements, is a Founding Fellow of the Harvard-affiliated Institute of Coaching, and has degrees in Economics from Cambridge and Oxford Universities. Caroline splits her time between New York and London, and travels frequently to give speeches and run workshops for clients around the world.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'carolinewebbsevenshift',
      twitter: '',
      website: 'https://www.carolinewebb.co',
    },
  },
  {
    coachName: 'Morag Barrett',
    jobTitle: 'Leadership Development Consultant, Speaker & Author',
    tags: ['Executive Coach', 'Consultant', 'Speaker', 'Author', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/morag-4.jpg',
    bio:
      'Morag Barrett is a sought-out leadership & executive development consultant, professional speaker, and author of Cultivate. The Power of Winning Relationships. Her second book, The Future-Proof Workplace, co-authored with Dr. Linda Sharkey was named Best Business Book of 2017 by Soundview Executive Book Summaries.\n\nAs the founder and CEO of SkyeTeam she partners with and speaks for a diverse range of clients, including Google, NTT Security, Charter Communications, The Society for Information Management and Ultimate Software among others. She has contributed to Entrepreneur.com, and CIO.com and has been featured in Business Insider, Inc and Forbes among others.\n\nMorag holds a master’s degree in Human Resource Management from De Montfort University, UK and received the Senior Professional in Human Resources (SPHR) designation. She’s a recognized business coach for the Corporate Coach University and is a Chartered Fellow of the Chartered Institute of Personnel and Development in the UK.\n\nWhen not at work, Morag can be found sailing with her three sons, playing the bassoon for the Broomfield Symphony Orchestra, or ballroom dancing.\n\nYou can learn more at www.SkyeTeam.com.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'moragbarrett',
      twitter: '',
      website: 'https://www.SkyeTeam.com',
    },
  },
  {
    coachName: 'Lindsey Pollak',
    jobTitle: 'New York Times Bestselling Author and Multigenerational Workplace Keynote Speaker',
    tags: ['Speaker', 'Author', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/lindsey-pollak-close-up-headshot-lindsey-pollak-1-.png',
    bio:
      'Lindsey Pollak is a New York Times bestselling author, keynote speaker, and one of the world’s leading experts on Millennials and the multigenerational workplace. She is the author of three books: The Remix: How to Lead and Succeed in the Multigenerational Workplace; Getting from College to Career: Your Essential Guide to Succeeding in the Real World, and Becoming the Boss: New Rules for the Next Generation of Leaders. Lindsey has served as an official ambassador for LinkedIn, a Millennial workplace expert for The Hartford, and the chair of Cosmopolitan’s Millennial Advisory Board. A graduate of Yale University, she lives in New York City with her husband and daughter.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'lindseypollak',
      twitter: '',
      website: 'https://www.lindseypollak.com',
    },
  },
  {
    coachName: 'Jeff Kirschner',
    jobTitle: 'Founder & CEO',
    tags: ['Speaker', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/jeff-kirschner-jeff-kirschner-1-.jpg',
    bio:
      'When his 4-year old daughter saw a plastic tub of cat litter in the woods, little did Jeff realize that it would be the spark for creating Litterati - a movement that’s “crowdsource-cleaning” the planet. Featured by National Geographic, Rolling Stone, and Time Magazine, Litterati is backed by the National Science Foundation and in partnership with the United Nations and has been featured at TED.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'jeffkirschner',
      twitter: '',
      website: 'https://www.litterati.org',
    },
  },
  {
    coachName: 'Tatiana Oliveira Simonian',
    jobTitle: 'Head of Media Partnerships, Verizon Media (Tumblr)',
    tags: ['Executive Coach', 'Consultant', 'Speaker', 'Author', 'Iconic Leader', 'Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/screen-shot-2019-02-26-at-7.52.44-am-tatiana-grace-1-.png',
    bio:
      "Tatiana Oliveira Simonian is a senior executive in marketing and business development. She has worked for major corporations such as Verizon Media (Tumblr), Twitter, Disney, Hot Topic and Nielsen. Simonian's area of expertise is driving high growth in the digital space via compelling marketing and BD with an emphasis on entertainment and the youth audience. She has a passion for growing and leading high-performing teams. Her work has been covered in numerous outlets, won Webby Awards and she was named the Leading Woman in Social Media Engagement by Billboard Magazine. She is also on the advisory board of the music start up, Vinyl Me, Please.\n\nPrior to her 15 year career in tech, Simonian was an entertainment journalist and editor for many years. She wrote for LA Weekly, LA Times, Rolling Stone and was associate editor of a magazine called Anthem. During this time, she also ran a successful digital marketing consultancy that counted the Smashing Pumpkins, British band Placebo, vegan restaurant chain Native Foods and more as clients.\n\nTatiana is an in-demand public speaker on the subjects of mindfulness in a digital age, ethics in social media, marketing to  and cultivating work/life balance. She is on the board of several non profits related to STEAM education for under served communities, a Luminary donor for the Step Up Women’s Network non profit.\n\nSimonian is a citizen of Brazil and the United States and resides with her husband and two dogs in Los Angeles. Their family is crazy about sports, entertaining and happen to be in a band together (both Tatiana and her husband are touring music vets). Her husband Jeffrey works in the non profit space teaching homeless preschool children. Their goal is to always have their professional pursuits equal or exceed their philanthropic efforts.",
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'tatianasimonian',
      twitter: '',
      website: 'https://www.tatianasimonian.com',
    },
  },
  {
    coachName: 'Catherine Duffy',
    jobTitle: 'Country Manager AIG Bermuda',
    tags: ['Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/catherine-duffy-headshot-standing-1.2019-catherine-duffy.jpg',
    bio:
      'After earning my Bachelor of Business Administration degree from Howard University, I began a career in underwriting. I became the first woman in Bermuda to earn my CPCU (Chartered Professional Commercial Underwriter) designation. As I continued in my insurance career, I was selected for leadership roles to manage larger blocks of business, lead new product launches, and open new operations. Currently, I am the Country Manager for AIG in Bermuda.\r\n\n\r\n\nI wrote the first book on the history of the international insurance industry, Held Captive - A History of International Insurance in Bermuda. This involved a tremendous amount of research including hundreds of interviews. This has led to frequent requests to write and speak on the subject, locally and internationally.\n\n\r\n\nBeyond my professional responsibilities, I have served in community and civic leadership roles, including serving as the only female commissioner of the SAGE Commission. I have led and contributed to numerous professional development and networking programs to advance other professionals in my industry. Because I am passionate about continuous professional development, I have completed executive programs through Wharton as well as MIT. In 2018 I was chosen to be a Fellow for the International Women’s Forum.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'catherine-r-duffy-10a32b6',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Darcy Verhun',
    jobTitle: 'President, FYidoctors | Visique',
    tags: ['Iconic Leader', 'Corporate Executive', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/creative-26.jpeg',
    bio:
      'Darcy Verhun is the President of FYidoctors, the world’s largest doctor owned company that has emerged as one of the fastest growing optical companies in North America.\n\nDarcy obtained his MBA from the Richard Ivey School of Business. Prior to joining FYidoctors he has held senior leadership roles at Ernst & Young, Grant Thornton and Cap Gemini. Darcy has been recognized as a Fellow of the Chartered Professional Accountants of Canada and also as a Distinguished Alumni of MacEwan University. He is a Certified Corporate Director, Certified Management Consultant and holds a Bachelor of Commerce degree from the University of Alberta.\n\nDarcy’s leadership is based on being a lifelong learner and passionate coach who lives his life with gratitude. He is known for the high energy and commitment he brings to everything. His role at FYidoctors brought with it the inspiring alignment of his personal beliefs with an organization whose purpose is ‘enhancing life’. The company lives a coaching culture with every single employee attending coaching training. There are no bosses at FYidoctors – only coaches.\n\nDarcy was a founding Director of The Calgary Homeless Foundation where he served as Treasurer from 1998 to 2017. He serves today as a Director of HomeSpace Society, a non-profit which is intent on eliminating homelessness. In addition to his commitment to help those in need he is a passionate skier with considerable experience as a downhill ski racing coach; he has achieved the highest level of certification in Canada as a Level IV instructor.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'darcy-verhun-113a66b',
      twitter: '',
      website: 'https://www.fyidoctors.com',
    },
  },
  {
    coachName: 'Ekpedeme "Pamay" M. Bassey',
    jobTitle: 'Chief Learning Officer, Chief Experience Officer',
    tags: ['Speaker', 'Author', 'Corporate Executive', 'Entrepreneur', 'Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/_bp_4969-1-pamay-bassey.jpg',
    bio:
      'Ekpedeme “Pamay” M.  Bassey is Chief Learning Officer for the Kraft Heinz Company, where she creates a culture of continuous learning and drives the company’s global learning and development strategy and initiatives through Ownerversity, Kraft Heinz’s corporate university. Pamay has deep expertise in learning theories derived from artificial intelligence research and practical experience designing and developing highly-rated learning solutions and transformative professional development programs.\n\n\n\nPrior to Kraft Heinz, Pamay served as the Global Head of Learning Platform and Professional Development for BlackRock. Before that, she was president of The Pamay Group, an e-learning design and strategy company.\n\n\n\nPamay is also Chief Experience Officer of the My 52 Weeks of Worship Project, through which she facilitates courageous conversations about cultural and interfaith diversity, inclusion, and understanding. Her 2018 TEDx talk, Navigating Sacred Spaces, is based on her project work and her book: My 52 Weeks of Worship: Lessons from a Global, Spiritual, Interfaith Journey.\n\n\n\nShe serves on the Board at the M&G Etomi Foundation, which exists to exists to break the harsh cycle of poverty by creating various programs and activities to teach the value of self-empowerment and improvement to the people of the Niger Delta region in Southern Nigeria, and as Chair of the National Advisory Board for The Haas Center for Public Service at Stanford University. She is a life member of the Council on Foreign Relations and a Diamond Life Member of Delta Sigma Theta Sorority, Incorporated, a public service organization.\n\n\n\nPamay earned a B.S. in symbolic systems from Stanford, with an artificial intelligence concentration, and a M.S. in computer science from Northwestern. She is also a graduate of the Second City Conservatory program in Chicago, an advanced study of improvisational comedy and theater.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'pamay',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Halee Fischer-Wright',
    jobTitle: 'President and Chief Executive Officer',
    tags: ['Consultant', 'Speaker', 'Iconic Leader', 'Corporate Executive', 'Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/dr-halee-fischer-wright-headshot_100coaches_2019-hollon-kohtz.jpg',
    bio:
      '"Halee Fischer-Wright’s passion to help people led her to become a physician. Today, that same passion drives her work as a bestselling author, a speaker, a healthcare and organizational strategist, a leader, and a coach.\n\n\n\nHalee has spent the past 16 years becoming an expert in organizational culture, strategy, and turnarounds. As president of Rose Medical Group, she helped grow the organization to 560 physicians and a best-in-class ranking. She then spent two years as a chief medical officer, helping a regional hospital improve operations and outcomes. At the same time, she earned her MA in medical management from USC’s Marshall School of Business, a certificate in executive coaching from Georgetown University, and a Fellowship in the American College of Medical Practice Executives.\n\n\n\nAs a consultant and partner with CultureSync, she worked with executive teams in Fortune 100 companies, specializing in strategy, leadership development, and building high-performance teams. In 2008, she coauthored the New York Times bestseller Tribal Leadership with Dave Logan and John King.\n\n\n\nNow, as CEO of the Medical Group Management Association, which represents practices and groups that deliver more than half of the healthcare in America, Halee has led a traditional healthcare association into greater influence, thought leadership, and member value with a renewed focus on its mission: to lead meaningful transformation in healthcare. Together with the executive team, she has worked to grow MGMA’s membership from 30,000 to 58,000 while focusing on lean and sustainable operations. And in 2017, she released the national bestseller Back to Balance to help guide the right kind of frontline-driven change in healthcare by balancing the art, science, and business of medicine.\n\n\n\nHalee has been recognized for her work in innovation, business, technology, and women’s leadership. She has been named a Top 100 Healthcare Leader and a Top 25 Women in Healthcare by Modern Healthcare and a 100 Great Leaders in Healthcare by Becker’s Hospital Review, among other awards. She regularly publishes articles on healthcare and leadership, or is sought for her expertise by media outlets such as Forbes and Modern Healthcare.\n\n\n\nAs a speaker and panelist, Halee appears at regional and national events. In addition to addressing the challenges of the healthcare industry, she speaks on creating cultures of excellence, innovation, and women’s leadership.\n\n\n\nHalee lives in Denver with her husband, who is also a physician, and two very spoiled dogs.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'halee-fischer-wright-41a5152',
      twitter: '',
      website: 'https://www.drhalee.com',
    },
  },
  {
    coachName: 'Kent Taylor',
    jobTitle: 'CEO and Chairman of the Board',
    tags: ['Iconic Leader', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/taylor-kent-headshot-travis-doster-1-.jpg',
    bio:
      'Kent Taylor is the founder, CEO and Chairman of the Board of Texas Roadhouse restaurants. Mr. Taylor, who has more than 30 years of experience in the restaurant industry, opened the first Texas Roadhouse in Clarksville, Indiana, in 1993. The company currently has more than 585 restaurants in 49 states and 10 countries. A Louisville native, Mr. Taylor attended the University of North Carolina on a track scholarship, and he earned a Bachelor of Science degree. A self-described ski bum, Kent enjoys the ski slopes in Colorado and Utah. He is also a life-long Rolling Stones fan, having attended more than 50 Rolling Stone’s concerts. Mr. Taylor is an active supporter of a number of organizations, including Special Olympics Kentucky and the Kentucky Nature Conservancy. He sits on the board for Homes for Our Troops and the Leeds School of Business at the University of Colorado Boulder. Mr. Taylor has three children, Michelle, 35; Brittany, 33; and Max, 23. In addition, he has 3 grandchildren.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: '',
      twitter: '',
      website: 'https://www.texasroadhouse.com',
    },
  },
  {
    coachName: 'Fred Lynch',
    jobTitle: 'Retired CEO Masonite',
    tags: ['Executive Coach', 'Consultant', 'Speaker', 'Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/fred-picture-2-fred-lynch-1-.jpg',
    bio:
      'Frederick J. Lynch\n\nPresident and CEO (retired)\n\nMasonite International\n\n\n\nPrior to his retirement in June of 2019 Frederick J. Lynch (Fred) served as President and CEO of Masonite International (NYSE:DOOR) for 12 years.  Masonite is a leading global manufacturer of residential and commercial doors employing more than 10,000 employees providing the highest value door products to customers in more than 70 countries around the world.  During his tenure Fred led the company through the historic housing recession, restructuring the company and capital structure which eventually led to an IPO of the firm on the NYSE in 2013.\n\n\n\nFred joined Masonite from Alpharma, a global pharmaceutical company, where he served as President of the Human Generics Division and Senior Vice President of Global Supply Chain for the corporation before leading the sale of 75% of the company to Actavis Pharmaceuticals.   Prior to joining Alpharma in 2003, Fred’s career spanned 18 years at Honeywell International (formerly AlliedSignal), most recently as Vice President and General Manager of the Specialty Chemical Business.  He began his career at AlliedSignal as a shift foreperson in a chemical manufacturing plant and subsequently held various roles in manufacturing and general management.\n\n\n\nFred (age 55) is a native of the Bronx, New York.  He received a B.S. in Chemical Engineering from Villanova University and an M.B.A in Finance from Temple University.\n\n\n\nFred serves on the board of Ingevity corporation, a specialty chemical firm trading on the NYSE (NGVT). He is a member of the Moffitt Cancer Center Foundation Board and is Vice Chairman of the Institute Finance and Strategy Committee. He also serves as one of Moffit’s representatives on the board of M2Gen, a for profit health informatics joint venture between Moffit, Hearst and Ohio State cancer center. Fred was a founding director of the Michael Lynch Memorial Foundation, a non-profit organization that provides college scholarships to children of firefighters and victims of 9/11 (www.Mlynch.org).',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'frederick-lynch-500623a9',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'John Baldoni',
    jobTitle: 'President, Baldoni Consulting LLC',
    tags: ['Executive Coach', 'Speaker', 'Author'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/john-smile-john-baldoni-1-.png',
    bio:
      'John Baldoni is an internationally recognized leadership educator, executive coach and speaks throughout North America and Europe. John is the author of 14 books, including GRACE: A Leader’s Guide to a Better Us, MOXIE: The Secret to Bold and Gutsy Leadership, Lead with Purpose, Lead Your Boss, and The Leader’s Pocket Guide. John’s books have been translated into 10 languages.\n\n\n\nIn 2018 Inc.com named John a Top 100 speaker and Trust Across America honored John with its Lifetime Achievement Award for Trust. In 2019 Global Gurus ranked John No. 9 on its list of Top 30 global leadership expert, a list John been on since 2007. In 2014 Inc.com listed John as a Top 50 leadership expert.\n\n\n\nJohn established a career as a highly sought after executive coach, where he has had the privilege of working with senior leaders in virtually every industry from pharmaceutical to real estate, packaged goods to automobiles, and finance to health care.\n\n\n\nJohn has authored more than 700 leadership columns for a variety of online publications including Forbes, Harvard Business Review and Inc.com John also produces and appears in a video coaching series for SmartBrief, a news channel with over 4 million readers. John’s leadership resource website is www.johnbaldoni.com',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'jbaldoni',
      twitter: '',
      website: 'https://www.johnbaldoni.com',
    },
  },
  {
    coachName: 'Taeko Inoue',
    jobTitle: 'Communications expert (Japan and overseas), Facilitator, Coach, Career Consultant, Author',
    tags: ['Consultant', 'Speaker', 'Author'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/201107j-win写真_-井上多恵子-1-.jpg',
    bio:
      'TAEKO helps the Japanese and non-Japanese get closer to one another through her superb communications skill and an understanding of cross-cultural issues. Her highly professional translation for Marshall Goldsmith during his visit to Japan received outstanding praise from both Marshall and the audience. She is compassionate when she translates as she experienced the disappointment of not being understood as a 12 year old, attending a junior high school in US with no English skill.\n\n\n\nIn her current role at Sony promoting Diversity and Engagement and Talent Development, she has been creating and facilitating a number of workshops in Japanese and English on diverse topics including Leadership Development, technical skills and human skills. She is known for her empathy for participants’ situation, ability to ask pertinent questions through coaching, creating an environment that optimizes learning and transferring the learning to the workplace. She has a strong passion for this field and is the first Japanese person to receive the Brinkerhoff Certification - for High Performance Learning Journeys®.\n\n\n\nTo further contribute in this field, she has been actively teaching at leading universities such as Tohoku Graduate University and Keio Graduate School of Business Management in Japan, and SKEMA Business School in France. She has also taught at the Association for Overseas Technical Scholarship in Japan as Senior International Lead Lecturer for PMAJ Association Japan.\n\n\n\nFurthermore, her communication skill and ability to understand different jobs through questioning have enabled her to support her father’s Resume Pro business. Together with him, she has edited several hundreds of resumes and has co-authored 3 books on self-promotion in Japanese. applying her Career Consultant skills.\n\n\n\nTAEKO has a B.A. in Sociology from Hitotsubashi University, one of the leading universities in Japan and received a Diploma in Journalism from Macleay College in Australia while working.\n\n\n\nShe enjoys living in Tokyo with her husband and Wonder, the pet robot Aibo.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'taeko-inoue-29ab5118',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Oleg Konovalov',
    jobTitle: 'Global thought leader, international speaker, author and consultant',
    tags: ['Executive Coach', 'Consultant', 'Speaker', 'Author'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/olegkonovalov-2-oleg-konovalov-2-.jpg',
    bio:
      'Oleg Konovalov is a globally-recognized thought leader, international speaker, and consultant to Fortune 500 companies. Oleg made his way from a deep-sea trawler engine room facing gale eleven to the top managerial positions and global rankings. Oleg is on the Thinkers50 Radar and has been recognized as #1 Global Thought Leader on Culture by Thinkers 360 in 2019.\n\n\n\nHe is the author of a several books including LEADEROLOGY which defines the beginning of the Renaissance period in modern management and leadership while helping leaders to reach a new level of success, Corporate Superpower which is named a bible of culture management for modern leaders, and Organisational Anatomy which discusses organizations and management from a biological perspective.\n\n\n\nOleg is passionate to help companies to make a leap in performance. His work identifies leaders’ and entrepreneurs’ strategic needs and helps them to drive their companies to success. He always offers unique perspectives and approaches to enhance the role of people and improve performance and help leaders to attune their companies, culture, and leadership into a customer-centered business at the age of digitalization.\n\n\n\nOleg received his doctoral degree from the Durham University Business School. He is a visiting lecturer at a number of business schools, a Forbes contributor and high in-demand speaker at major conferences around the world. Originally from Russia, he is based in Birmingham, UK and Moscow, Russia.\n\n\n\nMore information http://olegkonovalov.com/\n\nLinkedIn https://www.linkedin.com/in/dr-oleg-konovalov-a6a3401a/',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'dr-oleg-konovalov-a6a3401a',
      twitter: '',
      website: 'https://www.olegkonovalov.com',
    },
  },
  {
    coachName: 'Michelle Tillis Lederman',
    jobTitle: 'Connection Creator, Author, Keynote Speaker and CEO, Executive Essentials',
    tags: ['Executive Coach', 'Speaker', 'Author', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/dsc_2014-michelle-portrait-cropped-final-michelle-lederman-min-1-.jpg',
    bio:
      "Michelle Tillis Lederman, CSP is an expert on workplace communications and relationships. Michelle's mission is to help people work better together and advance their individual impact.\n\n\n\nNamed by Forbes as one of the Top 25 Networking Experts, Michelle is a speaker, trainer, coach, and author of four books including The Connectors Advantage and the internationally recognized, The 11 Laws of Likability.\n\n\n\nAs CEO of Executive Essentials, she provides customized communications and leadership programs for fortune 500, non-profit, university and government clients including the NYPD, Colgate Palmolive, JPMorgan, J&J, Deutsche Bank, Michigan State University, MetLife, Sony, Ernst & Young, the Department of Environmental Protection, and Madison Square Garden. Passionate about education, Michelle served as a Professor at NYU’s Stern School of Business, on the faculty of the American Management Association, Lehigh Executive Education, and Rutgers Executive Education.\n\n\n\nA regular media contributor, her column on INC.com is syndicated to Thrive Global and other outlets. She has appeared on CBS, NBC, Fox, NPR, CNBC, the NY Times, the Wall Street Journal, Working Mother, US News & World Report, MSNBC, Forbes and USA Today.\n\n\n\nMichelle spent a decade in finance with positions in audit, M&A, financial consulting, VC, and hedge fund investing. She received her BS from Lehigh University, her MBA from Columbia Business School, and holds the PCC certification from the International Coaching Federation.\n\n\n\nTo connect with Michelle visit: www.michelletillislederman.com/ and www.linkedin.com/in/communicationexpertspeaker",
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'communicationexpertspeaker',
      twitter: '',
      website: 'https://www.michelletillislederman.com',
    },
  },
  {
    coachName: 'Eddie Turner',
    jobTitle: 'The Leadership Excelerator®',
    tags: ['Executive Coach', 'Consultant', 'Speaker', 'Author'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/eddie-turner-keynote-speaker-hires-eddie-turner.jpg',
    bio:
      'Leading organizations who are dedicated to the next generation of leadership and talent development, rely on Eddie Turner, The Leadership Excelerator® to unlock their treasure trove of cross-generational talent. In today’s business landscape, it is harder to find people who are ready for leadership positions, and even harder to find those who are ready for the C-Suite. Eddie Turner’s Leadership Excelerator® Suite of Leadership Programs gives your Talent Development department a proven pathway to leadership success. As an in-demand expert in the field, Eddie has created and delivered cross-generational leadership development programs for Fortune 500 companies, government agencies, academic institutions, and non-profit organizations looking to enhance their Human Capital.\n\nEddie is the author of an international best-selling book, 140 Simple Messages to Guide Emerging Leaders, in which Eddie shares lessons he has learned. As a C-Suite advisor, and national media commentator, Eddie has appeared on dozens of media platforms including CNN LIVE! and has contributed to Forbes.com. Eddie is also the host of the Keep Leading!® podcast which earned Apple Podcasts coveted New & Noteworthy designation. If you are searching for that elusive competitive edge, Eddie Turner is ready to Accelerate Performance and Drive Impact!® for your organization!',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'eddieturner',
      twitter: '',
      website: 'https://www.eddieturnerllc.com',
    },
  },
  {
    coachName: 'Mitch Joel',
    jobTitle: 'President, Six Pixels Group',
    tags: ['Speaker', 'Author', 'Corporate Executive', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/mitch-joel-canada-small-mitch-joel.jpg',
    bio:
      'Mitch Joel is Founder of Six Pixels Group - an advisory, investing and content producing company that is focused on commerce and innovation. His first book, Six Pixels of Separation, named after his successful blog and podcast is a business and marketing bestseller. His second book, CTRL ALT Delete, was named one of the best business books of 2013 by Amazon.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'mitchjoel',
      twitter: '',
      website: 'https://www.mitchjoel.com',
    },
  },
  {
    coachName: 'Rhett Power',
    jobTitle: 'CEO, Business Coach, Author, Forbes Columnist',
    tags: ['Consultant', 'Speaker', 'Author', 'Entrepreneur', 'Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/rhettpower-rhett-power.jpg',
    bio:
      'Rhett Power co-founded Wild Creations in 2007 and quickly built the startup toy company into the 2010 Fastest Growing Business in South Carolina. Wild Creations was awarded a Blue Ribbon Top 75 US Company by the US Chamber of Commerce and one of Inc. Magazine’s 500 Fastest Growing US Companies. He and his team won over 40 national awards for their innovative toys. He was a finalist for Ernst and Young’s Entrepreneur of the Year award in 2011 and was nominated again in 2012.  Recently he was named one of the world’s top 100 business bloggers and in 2018 the Best Small Business Coach in the United States.\n\n\n\nRhett travels the globe speaking about entrepreneurship, and management alongside the likes of Gates Foundation CEO Sue Desmond-Hellmann, AOL Founder Steve Case, and President Barack Obama. He has been featured in the Huffington Post, Business Insider, The Hill, Time, The Wall Street Journal and CNN Money and is a regular contributor to Inc. Magazine, CNBC, Forbes, and Thrive Global.\n\n\n\nBefore founding Wild Creations, Rhett worked as an economic and small business development consultant for the United States Agency for International Development (USAID), serving seven years in the former Soviet Republics in Central Asia. Prior to that, he was Director of National Service Programs for Habitat for Humanity, which included being Habitat’s chief liaison with The White House, Congress, and the Corporation for National Service. He now has a rapidly growing consulting practice based in Washington DC.\n\n\n\nHe is the co-author of the best-selling book One Million Frogs. His second best-seller THE ENTREPRENEUR’S BOOK OF ACTIONS: Essential Daily Exercises and Habits for Becoming Wealthier, Smarter, and More Successful published by McGraw Hill is now in stores.\n\n\n\nHe developed a love of teaching and service in the US Peace Corps and is a graduate of the University of South Carolina.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'rhettpower',
      twitter: '',
      website: 'https://www.rhettpower.com',
    },
  },
  {
    coachName: 'James Feliciano',
    jobTitle: 'Vice President, General Manager of AbbVie Japan',
    tags: ['Consultant', 'Speaker', 'Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/0521a1e1-03d9-4e3c-8f4b-4cc88d9f0b25-james-f.jpeg',
    bio:
      'James Feliciano is a leading pharmaceutical executive in Japan, with 14 years of experience in the Japanese market — with six of those years as a country manager.  For the last 4 years, James has been the Vice President and General Manager of Japan for AbbVie Pharmaceuticals, a global leader in innovative biopharmaceuticals.  With a personal vision of “Living a life with purpose and being the spark that ignites success,” James thrives on building and contributing to impactful teams that truly make a positive difference in the world.\n\n\n\nJames’ commitment to improving the lives of Japanese patients has been evident from the earliest stages of his professional career in Japan.  As the Head of the Vaccine Division for Pfizer Japan, James led a broad coalition of patient groups, physician groups, industry and government advocates to effectively completely overhaul the infant vaccination program to ultimately include new, innovative vaccines.  As a result, terrible illnesses such as bacterial meningitis have virtually been eliminated in Japan.\n\n\n\nAs the President of AbbVie Japan for the last four years, James has driven organizational change and employee engagement, setting a new benchmark for the industry in Japan.  Through the last 4 years, James has led AbbVie Japan to move from a pharmaceutical sales ranking of 37 to 15.  Through this period, AbbVie Japan has nearly doubled the number of employees, but through well-orchestrated employee engagement initiatives, Employee Engagement scores have consistently improved.  AbbVie Japan now ranks #13 in the “Great Place to Work” annual survey.  In their new office opened in early 2019, AbbVie Japan is demonstrating that a flexible work environment utilizing technology that supports employees work/life balance is not only a viable model in Japan, but that employees can thrive and make an even larger impact in their jobs.\n\n\n\nJames first visited Japan as a college junior while a student at Hampden-Sydney College, a historic all-male college in Virginia.  Upon graduation, James enrolled at the University of Michigan, where he graduated with a MA in Japanese Studies.  He then spent the majority of his twenties living in rural Japan, mastering the Japanese language, teaching English and learning Kendo (bamboo sword fighting) and calligraphy.  His insatiable taste for wanderlust found him backpacking through Asia for 1 year as well - from China to Tibet, overland to Nepal and India, followed by Southeast Asia.  After receiving an MBA from Cornell University in 2002, James entered the pharmaceutical industry, where he has dedicated his life to helping patients.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'james-feliciano-7688361',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Alexi Robichaux',
    jobTitle: 'CEO & Co-Founder',
    tags: ['Speaker', 'Corporate Executive', 'Entrepreneur', 'Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/alexi-robichaux-alexi-robichaux.jpg',
    bio:
      'Recognized as a leadership and development innovator, Alexi is the co-founder and CEO of BetterUp, the first leadership development platform to connect coaching to sustainable behavior change. As CEO, Alexi leads BetterUp on its mission to enable all professionals to live with greater clarity, purpose, and passion.\n\n\n\nPrior to BetterUp, Alexi was Director of Product Management at VMware. He led product and design teams to build enterprise collaboration software that earned Gartner’s “best in class” distinction. He also witnessed the changing relationship between employees and employers that’ll be key to future human flourishing and innovation.\n\n\n\nAlexi is Chairman of Youth Leadership America (YLA), a nonprofit he co-founded in 2003, to foster peer-to-peer leadership development and civic engagement in high school students. YLA has collaborated with leading companies including Disney, Google, and Hilton Hotels to coach and mentor future leaders.\n\n\n\nAlexi holds a B.A. in political science and non-profit management with summa cum laude distinction from the University of Southern California.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'alexirobichaux',
      twitter: '',
      website: 'https://www.betterup.co',
    },
  },
  {
    coachName: 'Courtney Holladay',
    jobTitle: 'Executive Director, Leadership Institute',
    tags: ['Executive Coach', 'Corporate Executive', 'Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/149243_holladay_c-courtney-holladay-min.jpg',
    bio:
      'Courtney L. Holladay, Ph.D. is the Executive Director of the Leadership Institute within Human Resources at the University of Texas MD Anderson Cancer Center. She received her Master’s and Doctoral degrees in Industrial Organizational Psychology from Rice University, holds her license as a psychologist in the state of Texas and has earned her International Coach Federation credential as an executive coach at the professional certified coach level. With more than 15 years of experience in healthcare, she currently leads programs in the Leadership Institute focused on leadership development, enveloping curricula, mentoring, coaching, selection, surveys and assessments, change enablement, teams and personalized development for faculty and administrative leaders. She focuses her team on evaluating the effectiveness of their programs, ensuring evidence underlies their translation across the organization. She is the author of numerous peer-reviewed articles in journals such as Journal of Business and Psychology, Academy of Management Learning and Education, Journal of Applied Psychology and Leadership and Organization Development.',
    links: '',
  },
  {
    coachName: 'Steve Borek',
    jobTitle: 'Master Certified Coach',
    tags: ['Executive Coach', 'Consultant', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/steveborek-1403-600px-head-shot-steve-borek.jpg',
    bio:
      "Steve Borek (MCC, BCC, PMC, MBA) is founder and CEO of End Game Business, a business, executive, and career coaching firm and has been coaching for 15 years. Steve had a successful 25 year career as a Sales Executive and Manager in the IT ERP software application industry. Steve’s vision for his business was to coach from anywhere to anywhere. He’s virtually coached from seven countries to clients in 17 countries. Coaching clients include entrepreneurs, high potentials, executives, teams, career transition, and mentor coaches. In addition, Steve Borek is a faculty leader at Coach University. He’s also been a guest blogger for Erickson International, a Canadian ICF coaching school. Steve offers pro bono services for The Coach Approach and The Coach Initiative who both serve Non Profits. I believe in giving back. My favorite organization is the Rescue Mission, a soup kitchen for the homeless and less fortunate. For 14 years I volunteered to either serve Thanksgiving and Christmas meals or help in the kitchen preparing. I've lived abroad in SE Asia for almost four years. I love to hike, scuba dive, golf, and practice yoga. I also have an artsy side and have produced eight plays for community theatre.",
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'steveborek',
      twitter: '',
      website: 'https://www.endgamebusiness.com',
    },
  },
  {
    coachName: 'Sean Brawley',
    jobTitle: 'Performance Coach & Consultant, TEDx Speaker, and Author',
    tags: ['Executive Coach', 'Consultant', 'Speaker', 'Author'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/sean-brawley-photo-sean-brawley.jpg',
    bio:
      'Sean Brawley is passionate about helping people grow and succeed as leaders. A performance consultant in Spencer Stuart’s Stamford office, Sean is focused on coaching CEOs, and advising clients on top team effectiveness and high-performance cultures. He has more than 25 years of experience working with some of the most successful sports teams and a wide variety of corporations, helping them sustain high performance in high-pressure environments. Sean has extensive experience facilitating workshops, and coaching CEOs and senior leaders in entertainment, technology, healthcare, professional services and finance. \n\n\n\nHigh-performance coach to sports teams and CEOs\n\n\n\n* Before joining Spencer Stuart, Sean was the founder and CEO of the Brawley Leadership group, a CEO coaching and leadership training firm, for 18 years. \n* Among his work with sports organizations, Sean served as a coach adviser to Pete Carroll, former head coach of USC Trojans of the University of Southern California, as well as the team’s mental performance coach. He also was a player development consultant for the New York Yankees for 12 years. \n* Sean also worked with numerous corporate clients, including GE, ITT, Union Bank, and Dave & Buster’s, where he served as a leadership coach for the company’s senior management team, who led a 30% increase in sales, 22% increase in employee engagement and retention, and 50% increase in stock price.\n\n\n\nSean graduated from the University of Southern California with a B.S. in finance from the Marshall School of Business. He also was a highly ranked tennis professional on the ATP Tour and #1 player for the USC tennis team.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'sean-brawley',
      twitter: '',
      website: 'https://www.seanbrawley.com',
    },
  },
  {
    coachName: 'Jeffrey W Hull',
    jobTitle: 'Director of Education & Business Development, Institute of Coaching, Author & Exec Coach',
    tags: ['Executive Coach', 'Consultant', 'Speaker', 'Author', 'Entrepreneur', 'Non-Profit'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/hull-headshot-2.0-9.18-jeffrey-hull-min.jpg',
    bio:
      'Jeffrey Hull, Ph.D. is an author, educator and consultant with over twenty years experience partnering with C-suite executives on issues of high performance leadership, change management, organizational strategy, structure and culture. Dr. Hull is a highly sought-after facilitator, keynote speaker and executive coach to both non-profit and for-profit global organizations.\n\n\n\nDr. Hull is Director of Education & Business Development at the Institute of Coaching, McLean Hospital, a Harvard Medical School Affiliate. He is also a clinical instructor in psychology at Harvard Medical School and an adjunct professor of leadership at New York University.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'jeffrey-hull-ph-d-bcc',
      twitter: '',
      website: 'https://www.jeffreyhull.com',
    },
  },
  {
    coachName: 'Yu Aoki',
    jobTitle: 'Marketer and Coach',
    tags: ['Executive Coach', 'Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/coach_aoki-thumbnail-yu-aoki.jpg',
    bio:
      "Yu Aoki is an Executive Coach and Marketer. He is the Executive Director of BUSINESSCOACH INC. in Japan from 2006. BUSINESSCOACH INC. is one of the largest coaching company in Japan, and provides executive coaching, coaching services that support the transformation of executives and managers using HR tech, and consulting services in HR field.\n\n\n\nYu Aoki helps technology leaders change their behaviors based on 360 degrees and assist in acquiring coaching skills. Yu Aoki had the following series of web media for system engineers: Successful IT manager's “Socializing”.  The series became E-Book.\n\n\n\nPrior to joining BUSINESSCOACH INC., Yu Aoki worked as a systems engineer. While experiencing some project managements, he was convinced that the environment where members could talk to each other when they wanted to say would increase the productivity of the project, and began to learn coaching. (It is now famous as the psychological safety by the Project Aristotle of Google.) He taught his colleagues coaching skills and contributed not only to his own projects but also to the promotion of his colleagues' projects.\n\n\n\nYu Aoki holds a Bachelor of Business Administration, Meiji University in 2001 in Japan.",
    links: '',
  },
  {
    coachName: 'Brian Solis',
    jobTitle: 'Digital Analyst and Anthopologist, Author, Speaker, Advisor',
    tags: ['Executive Coach', 'Consultant', 'Speaker', 'Author', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/7623251124_8ebb2dde73_o-brian-solis.png',
    bio:
      'Brian Solis is globally recognized independent digital analyst and anthropologist. He is also an award-winning author, prominent blogger/writer, and world renowned keynote speaker. Contact him via email.\n\n\n\nBrian Solis has been called “one of the greatest digital analysts of our time.” Brian is also a world renowned keynote speaker and an award-winning author of seven best-selling books including, X: The Experience When Business Meets Design, What’s the Future of Business and The End of Business as Usual.\n\n\n\nIn his new book, Lifescale: How to live a more creative, productive and happy life, Brian tackles the struggles of living in a world rife with constant digital distractions. His model for “Lifescaling” helps readers overcome the unforeseen consequences of living a digital life to break away from diversions, focus on what’s important, spark newfound creativity and unlock new possibilities.\n\n\n\nFor almost 30 years, Solis has studied and influenced the effects of emerging technology on business and society. His research and books help executives, and also everyday people, better understand the relationship between the evolution of technology and its impact on people and also the role we each play in evolution. As a result of his work, Solis also helps leading brands, celebrities, and startups develop new digital transformation, culture 2.0, and innovation strategies that enable businesses to adapt to new connected markets from the inside out.\n\n\n\nWith a loyal online audience of over 700,000 people online, his work makes him a sought-after thought-leader to leading brands, celebrities such as Oprah, Shaq and Ashton Kutcher and over 1,000 startups around the world.\n\n\n\nBrian also hosts (r)evolution, a popular online video series that examines technology, trends and best practices and introduces viewers to the thought leaders who are blazing the trail. Guests have included Katie Couric, Mark Burnett, Shaq, Billy Corgan, and Adrian Grenier.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'briansolis',
      twitter: '',
      website: 'https://www.briansolis.com',
    },
  },
  {
    coachName: 'Frank J. Maduri',
    jobTitle: 'Certified Professional Coach (CPC) ELI-MP',
    tags: ['Consultant', 'Author', 'Iconic Leader'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/20526378_336821633443247_1488205071906625936_n-frank-maduri.jpg',
    bio:
      'Frank J. Maduri is a CPC, ELI-MP who seeks to help his clients unlock their true potential. He is experienced in sales management in a variety of industries, currently with Best Buy, where he coaches, trains, and motivates sales professionals. Frank is an author of numerous news stories, commentary pieces, poetry, and religious reflection pieces. He has two works published on Amazon: a poetry collection entitled "The Promise of Tomorrow" and a religious book, "Reflections on The Passion: A Modern Guide to The Stations of The Cross". Frank hosts a podcast titled "Undivided" on the Life Coach Radio Network which seeks to find solutions to societal issues or divisions and find harmony and unity. He lives in New Jersey with his wife, Maureen, and is an active member in his parish community.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: '',
      twitter: '',
      website: 'https://www.frankjmaduricoaching.com',
    },
  },
  {
    coachName: 'David S. Cohen',
    jobTitle: 'Founder DS Cohen & Associates',
    tags: ['Executive Coach', 'Consultant', 'Speaker', 'Author'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/david-cohen.jpeg',
    bio:
      "Dr, David S Cohen, Ed. D. has a vision: organizations that thrive by living their values in good time and VUCA times. David's first career was in elementary and high school education, where he built a reputation for building school communities based on purpose and social responsibility.\n\n\n\nThirty-three years ago, David transitioned to corporate consulting. As a consultant, David earned a reputation as a contrarian consultant, helping leaders understand what is and what is not necessary to build a reliable organization. He does not always follow what is popular in his chosen field, becoming known as the contrarian consultant. David works with leaders to establish the conditions in which they identify and sustain authentic corporate cultures, value creation and a highly engaged workforce for the firm to flourish.\n\n\n\nHe helps leaders' step into life's challenges, inspiring them to create a sustained approach through a positive values-based focus, resulting in better business results. David has had the privilege of partnering with firms around the globe and across all business sectors. He also works with governments and not-for-profits.\n\n\n\nDavid loves his work as a thought leader in talent management, author and speaker. What he cherrished the most s his time hanging out with his five grandchildren and seeing the world through them.",
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'david-s-cohen-0b0191',
      twitter: '',
      website: 'https://www.sagltd.com',
    },
  },
  {
    coachName: 'Jenny Blake',
    jobTitle: 'Founder of Pivot Method, Author and Podcaster at Pivot',
    tags: ['Consultant', 'Speaker', 'Author', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/jenny_blake_pivot_author-and-podcast_2-jenny-blake-1-.jpg',
    bio:
      "Jenny Blake is the founder of Pivot Method, a change strategy company that helps people and forward-thinking organizations map what’s next.  She is the author of Pivot: The Only Move That Matters is Your Next One, which won the Axiom Best Business Books award in the careers category. Jenny also hosts the popular Pivot Podcast, which CNBC listed among 6 podcasts to make you smarter about your career, and Entrepreneur selected as one of the top 20 female-hosted business podcasts.\n\n\n\nAfter two years at a technology start-up in Silicon Valley, followed by five years at Google in Training and Career Development where she helped co-create and launch the Career Guru drop-in coaching program, Jenny moved to New York City in 2011 where she has been running her Pivot consulting business in the years since. Today, Jenny works with forward-thinking organizations such as Google, Microsoft, and CHANEL on rolling out large-scale Pivot programs to help employees develop a Pivot mindset as they map what’s next for the year ahead, and to help managers improve their coaching skills for holding transformative 1:1 career conversations with their team. She also runs a private coaching community, Momentum, to help small business owners design and grow their ideal heart-based business.\n\n\n\nJenny lives in Harlem with her husband Michael, and loves practicing yoga, geeking out on systems and new technology, reading business books, and ever-refining her meticulously color-coded bookshelves. Her motto: if change is the only constant, let's get better at it. And when it comes to work and solving big, creative challenges: Let it be easy, let it be fun.",
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'jennyblake',
      twitter: '',
      website: 'https://www.PivotMethod.com',
    },
  },
  {
    coachName: 'Mike Maddock',
    jobTitle: 'CEO and Founding Partner Maddock Douglas',
    tags: ['Executive Coach', 'Consultant', 'Speaker', 'Author', 'Corporate Executive', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/mikebookphoto_new-backgroundhr_v2-mike-maddock-min-1-.jpg',
    bio:
      "Mike Maddock is an entrepreneur, a keynote speaker, an executive coach and a writer.\n\n\n\nHe calls himself an Idea Monkey because he loves to solve problems with disruptive ideas. This passion for problem solving led him to establish Maddock Douglas, Inc. in 1991. Maddock Douglas has become an internationally recognized innovation consultancy that has helped more than 25% of the Fortune 100 create and launch new products, services and business models.\n\n\n\nMike has launched six successful businesses. He also co-chairs the Gathering of Titans Entrepreneurial Conclave at MIT, he is past president of Entrepreneurs' Organization and Young Presidents' Organization, both chapters located in Chicago.\n\n\n\nA doodler, turned cartoonist, turned author, Mike has been using words and pictures to get laughs and build ideas his entire life. Today, Mike is a contributor to Forbes and author of four bestselling books: Free the Idea Monkey...to focus on what matters most!, Brand New: Solving the Innovation Paradox and Flirting With the Uninterested, Innovating in a Sold, Not Bought Category. And finally, Plan D––his latest book about Disruptors.",
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'innovationexpert',
      twitter: '',
      website: 'https://www.maddockdouglas.com',
    },
  },
  {
    coachName: 'Eugene Frazier',
    jobTitle: 'Founder of My Coach Eugene | EF Choice & Associates',
    tags: ['Executive Coach', 'Consultant', 'Speaker', 'Corporate Executive', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/eugene_fraizer_01_302_My_Coach_Eugene2-web.jpg',
    bio:
      'Mr. Eugene Frazier is the founder and CEO of My Coach Eugene and The Inclusivity Coaching University at EF Choice & Associates. He strives to cultivate and bring about effectiveness and efficiency in all business engagements. EF Choice is a business coaching consulting firm that delivers innovative, high-quality services that enable companies to promote effectiveness and efficiency across all business engagements. EF Choice services academic institutions, health institutions, Team Science, entrepreneurs, and municipalities in real-time to meet and or exceed their desired business objectives. \n\nMr. Frazier is a former Human Resources executive from Motorola Inc., who is highly skilled in which driving development of programs and navigate sustainable change initiatives in dynamic environments. He develops and deploys strategic protocol that enhances the capability of clients to retain critical leadership talent and reduce the cost and impact of organizational transitions. Mr. Frazier’s executive thought leadership and coaching expertise transcend across a host of industries and professional disciplines. \n\nBased in Houston, Texas, expertise includes Executive Coaching, Leadership Transformation Strategist, Organizational Effectiveness, Legacy and Wealth Building Coaching, Business Consultant, Merger & Acquisition Integration Expert, C-Suite Pathway Coaching. To explore more innovative service offerings, visit, https://efchoice.com/.\n\nTransformation Affiliations: \n•\tStakeholder Centered Coaching (SCC) by Dr. Marshall Goldsmith, Ph.D.\n•\tMaster Certified Coach (MCC) by RHR International and Certified Professional Life Coach (CPLC)\n•\tForbes Coaches Council\n•\tFounder of Inclusivity Coaching\n•\tLinkedIn Business Advisor\n•\tFlashpoint Leadership Consulting (Affiliate)\n•\tThe Leadership Challenge (Master Facilitator)\n•\tMerger & Acquisition Integration Expert\n•\tHUB Certified',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'eugene-frazier-8ab0a06',
      twitter: '',
      website: 'https://www.EFChoice.com',
    },
  },
  {
    coachName: 'Tom Griffiths',
    jobTitle: 'CEO & Co-founder of Hone',
    tags: ['Executive Coach', 'Corporate Executive', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/tom_headshot-tom-griffiths.jpg',
    bio:
      'Tom Griffiths is the co-founder and CEO of Hone, a technology company reimagining leadership and manager training for modern teams. Prior to Hone, Tom was co-founder and Chief Product Officer at gaming unicorn FanDuel, where over a decade he helped create a multi-award winning product and a thriving distributed team. He has had lifelong passions for education, technology and business and is grateful for the opportunity to combine all three at Hone. He lives with his wife and daughter in San Diego.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'tomgriffithsuk',
      twitter: '',
      website: '',
    },
  },
  {
    coachName: 'Anna Yusim, MD',
    jobTitle: 'Medical Doctor / Board-Certified Psychiatrist ',
    tags: ['Executive Coach', 'Speaker', 'Author', 'Iconic Leader'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/a820d83f-6195-4125-8e53-47c0a76a677a-anna.jpeg',
    bio:
      'Dr. Anna Yusim is an award-winning, Stanford- and Yale-educated, Board Certified Psychiatrist with a robust private practice in New York City. On the Clinical Faculty at Yale Medical School, Dr. Yusim is internationally recognized as a trailblazer among physicians, a gifted speaker, and the best-selling author of Fulfilled: How the Science of Spirituality Can Help You Live a Happier, More Meaningful Life. Having personally helped over 1200 patients live happier, more meaningful lives, Dr. Yusim is presently starting a Spirituality and Mental Health Center at Yale.\n\n \n\nDr. Yusim has published over 70 academic articles, book chapters, scientific  abstracts and book reviews on various topics in psychiatry. She has been a guest on countless national and international TV shows, radio programs and podcasts. She is a highly sought-after speaker and has received numerous awards and distinctions including the National Institute of Mental Health Outstanding Research Resident Award, the American Psychoanalytic Association Fellowship, the William Webb Fellowship from the Academy for Psychosomatic Medicine, the American Psychiatric Institute for Research & Education (APIRE) Janssen Research Award, the Seed Research Grant from the American Medical Association, First Prize in the Sermo Resident Challenge, the Carta Fellowship from the World Psychiatric Association, the Janet M. Glasgow- Rubin Award for Women Leaders at Yale Medical School, the William F. Downs Fellowship for International Research, the Max Kade Fellowship, the Samuel F. and Sara G. Feinman Scholarship for Leadership, the Foreman Fleisher Foundation Scholarship for Academic Excellence, the Golden Award for Top Thesis written in the Humanities at Stanford University, the Hoefzer Prize for Top Essay Written in Stanford University Course, the Bessie F. Lawrence International Fellowship, and the National Science Foundation Scholarship.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'annayusim',
      twitter: '',
      website: 'https://www.annayusim.com',
    },
  },
  {
    coachName: 'Charlene Li',
    jobTitle: 'Senior Fellow at Altimeter, a Prophet company',
    tags: ['Executive Coach', 'Speaker', 'Author', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/charlene-li-square-charlene-li-1-.jpg',
    bio:
      'For the past two decades, Charlene Li has been helping people see the future. She’s an expert on digital transformation, leadership, customer experience and the future of work and the author of six books, including the New York Times bestseller “Open Leadership” and the co-author of the critically-acclaimed book “Groundswell”. Her latest book is the bestseller The Disruption Mindset.\n\n\n\nShe’s also an entrepreneur, the Founder and Senior Fellow at Altimeter, a disruptive analyst firm that was acquired in 2015 by Prophet. Charlene was named one of the Top 50 Leadership Innovators by Inc, and one of the most creative people in business by Fast Company. She serves on the regional board of YPO, a global network of 27,000 CEOs. Charlene graduated magna cum laude from Harvard College and received her MBA from Harvard Business School. She lives in San Francisco.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'charleneli',
      twitter: '',
      website: 'https://www.charleneli.com',
    },
  },
  {
    coachName: 'Neelam Verma',
    jobTitle: 'TV Presenter and Communications Coach',
    tags: ['Executive Coach', 'Consultant', 'Speaker'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/neelam-neelam-verma.jpeg',
    bio:
      'Neelam Verma is a TV Presenter and Communications Coach\n\n\n\nShe won the Miss Canada title and competed on a world stage at the Miss Universe pageant to an audience of 2 billion where she placed as a top 10 finalist. She presented TV shows for leading networks around the world including CNN, ESPN, Discovery Channel and Rogers Media.\n\n\n\nWith over two decades of world-class experience, Neelam helps leaders elevate their brand and communicate their message powerfully to audiences. She taps into her media expertise, corporate background and experience winning on a world stage to coach leaders on how to win on-camera, on-stage, on-line and in the boardroom.\n\n\n\nShe shares industry insights on how to own the room, overcome fear, communicate with authenticity, and gain a competitive edge with executive presence, media training and a winning mindset.\n\n\n\nNeelam graduated from a leading Canadian business school and worked as brand marketer for Procter & Gamble before launching a career in media. She has worked with Fortune 500 companies, international brands, media networks, start-ups, universities and non-profits.\n\n\n\nNeelam has had the privilege of interviewing high profile individuals including celebrities, royalty, New York Times authors, CEOs, entrepreneurs, athletes and spiritual leaders. Notable interviews include the Dalai Lama, Marshall Goldsmith and Ronaldinho.\n\n\n\nHer career has taken her across the globe from Canada, USA, India and the Middle East. Neelam supports global initiatives that empower women and champion diversity in the workplace.\n\n\n\nFor speaking, coaching, media training, corporate workshops and communications consulting contact neelamvermainc@gmail.com\n\nwww.neelamverma.com',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'neelamverma1',
      twitter: '',
      website: 'https://www.neelamverma.com',
    },
  },
  {
    coachName: 'Karin Stawarky',
    jobTitle: 'Managing Partner and Founder',
    tags: ['Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/stawarky-headshot-karin-stawarky-karin-stawarky.jpg',
    bio:
      'Karin Stawarky has spent over 20 years at the intersection of strategy and organization as a seasoned executive coach and advisor to CEOs, founders, and business leaders from the Fortune 100 to start-up companies across a range of industries. She brings a strategic general management mindset and deep organizational expertise to increase the effectiveness of leaders and organizations. As Managing Partner and Founder of Spark Leadership Partners, a boutique coaching and advisory ﬁrm, she is the one whom individuals, teams, and organizations turn to when they are ready to maximize their potential and experience massive growth.\n\n\n\nKarin provides unique experience and perspectives in leading through change and uncertainty – from rapid growth, strategic shifts, mergers/acquisitions, and turnarounds – in her work with clients. While serving in executive level positions at companies such as Vistaprint (as Chief Talent & Experience Officer), and Monitor Deloitte, a global strategy consulting ﬁrm, she created and led transformational initiatives that enhanced organizational performance and well=being while defining and evolving the strategic direction for growth. As a Partner at Monitor, she co-founded the Executive Development business unit and was a global leader of the Organization business unit. Unafraid to ask the tough questions and challenge assumptions while oﬀering thoughtful guidance, she is an expert at enabling her clients to articulate and execute on their vision while elevating the way they lead in the process.\n\n\n\nKarin is an executive coach in Harvard Business School’s ﬂagship executive education programs for global leaders. She is an Executive in Residence at Babson College, where she also is adjunct faculty at Babson’s Center for Women’s Entrepreneurial Leadership and an advisor/coach to women entrepreneurs in their venture incubator (WIN Lab). Karin also is an executive coach with the Center for Creative Leadership. She has writing collaborations with senior faculty at the Center for Positive Organizations at the Ross School of Business at University of Michigan in the area of leadership effectiveness and organizational engagement. Karin is adjunct faculty in executive education and MBA programs at the Amos Tuck School of Business at Dartmouth College and Babson. Beyond her work as a coach and advisor, Karin is a speaker who lends her voice to conversations surrounding leadership, organizational change, energizing cultures, and team performance. With a focus on the human side of business, she oﬀers insightful talks that engage, inform, and inspire.\n\n\n\nKarin is a Phi Beta Kappa, summa cum laude graduate of Bowdoin College and received her MBA from the Amos Tuck School of Business at Dartmouth College, where she received several awards in leadership and general management excellence. Karin is a certified executive coach; she is an affiliate member of the Institute of Coaching – McLean Hospital/Harvard Medical School and a member of the International Coaching Federation (ICF).  She is trained and experienced in numerous assessments and methodologies. Karin serves in a board capacity in early stage as well as non-profit organizations.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'karin-stawarky-44b217',
      twitter: '',
      website: 'https://www.sparkpartnersllc.com',
    },
  },
  {
    coachName: 'Beth Polish',
    jobTitle: 'Innovation Leader, Growth Strategist, Change Catalyst, Trusted Advisor',
    tags: ['Executive Coach', 'Consultant', 'Speaker', 'Author', 'Corporate Executive', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/beth-polish-headshot-color.crop-beth-polish.jpg',
    bio:
      'Beth Polish started her career in a small advanced-research group at D&B, reporting to the CTO.  She was a pioneer in the New York tech community – founding COO/CFO of iVillage, president of Dreamlife (co-founded with Tony Robbins and backed by Allen & Co.), managing director at KPMG working with clients’ digital initiatives, and CFO of Goldman Sachs Ventures.   She has wide deal experience as an investment banker and as a partner with a venture firm, and she has negotiated game-changing strategic partnerships and raised $300+MM from leading institutional and strategic investors.\n\n\n\nAt Hearst Corp., reporting to the CEO, Beth created and for 5 years led Hearst Corporate Innovation, fostering a company-wide culture of innovation and knowledge-sharing, building bridges at all levels across seven siloed business groups, and establishing a pipeline of internally-generated ideas for new digital businesses.\n\n\n\nBeth is a big-picture thinker who can see and communicate the essence of business opportunities and effective strategies for making them happen.  She brings to her work as consultant and coach years of experience as an entrepreneur and executive at the intersection of media, entertainment, information, and digital transformation, informed by the anthropology-based perspective of looking at the world through other people’s eyes.\n\n\n\nAs founder of The Critical Junctures Group Beth works closely with senior decision makers to help them find the insights and strategies they need to navigate through critical junctures.   Her goal is to consistently provide vision, create value, and produce results.  Representative engagements include a big-data analytics company working with a Fortune 100 client and the UK’s largest weight-loss company.\n\n\n\nBeth speaks around the country and internationally, including at the Stockholm School of Economics, the European Journalism Centre, and Best Buy, and for years was an adjunct professor at NYU.\n\n\n\nBeth was a producer of PBS’s An American Tribute to Vaclav Havel, Farm Aid IV, and 3 Grammy-nominated children’s programs.  Board memberships include UGA’s Grady College of Journalism and Mass Communication, WAHVE, and What Will It Take Movements. She has an AB in anthropology from Franklin and Marshall College and an MBA from Harvard.',
    links: '',
  },
  {
    coachName: 'Tiffani Bova',
    jobTitle: 'Chief Innovation Evangelist, Salesforce / Author / Keynote Speaker',
    tags: ['Consultant', 'Speaker', 'Author'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/20141215_tiffani_bova_0142r-tiffani-bova.jpg',
    bio:
      "Tiffani Bova is the growth and innovation evangelist at Salesforce and the author of the Wall Street Journal and 800-CEO-READ bestselling book GROWTH IQ: Get Smarter About the Choices that Will Make or Break Your Business (Portfolio). Bova was recently named to Thinkers50’s Radar Class of 2019 and was Thinker of the Month in December 2018. She has appeared on MSNBC and Yahoo Finance, among others, and was featured in the January 2019 issue of Rotman Management Magazine's Disruption Issue. She has also contributed to publications including Harvard Business Review, Forbes, Entrepreneur, and Huffington Post, and is a frequent guest on Wharton Business Radio and a variety of industry-leading podcasts.\n\n\n\nAs host of What's Next! with Tiffani Bova, one of the top 100 business and marketing podcasts on iTunes and top sales podcast of 2018 and 2019 according to Top Sales Magazine, she has interviewed guests from Arianna Huffington and Tom Peters to Dan Pink.\n\n\n\nBova is a top influencer in Customer Experience, Digital Transformation, the Future of Work, and Sales, and she was recently recognized as one of Inc. Magazine's 37 Sales Experts You Need to Follow on Twitter, a LinkedIn Top Sales Expert to follow in 2019, a Top 100 Women in Tech, a Brand Quarterly Magazine Top 50 Marketing Thought Leader, and one of the most Powerful and Influential Women in California according to the National Diversity Council. Her book Growth IQ was one of 800-CEO-READ's top 5 strategy and leadership books of 2018, and the #1 Salesforce, Dreamforce Bookstore seller in 2018.\n\n\n\nHaving delivered over 500 keynote presentations on sales transformation and business model innovation to over 400,000 people on six continents, Bova is highly sought after keynote speaker. Prior to working with Salesforce she was a Distinguished Analyst and Research Fellow at Gartner where she won the Thought Leadership award and earned accolades from the best leaders in the technology world for her cutting-edge analysis and her skill at inventing bold strategies for growth.\n\n\n\nBova has also lived in the fast lane of high tech, leading sales, marketing and customer service organizations, driving growth and creating durable competitive advantages for startups and Fortune 500 Companies alike such as Sprint, Inacom, Interland (web.com) and Gateway Computers. Throughout, she learned how to lead sales and marketing teams in hotly competitive markets. She is considered one of the early pioneers of cloud based sales strategies, and completely reinvented indirect \"go-to-market\" tactics in several hardware and services businesses. Her high velocity years at the front lines also gave Bova the hands-on expertise executives crave in their strategic partners and made her an authentic, passionate and brilliant advocate committed to her clients’ success and prosperity.",
    links: {
      facebook: '',
      instagram: '',
      linkedin: 'tiffanibova',
      twitter: '',
      website: 'https://www.tiffanibova.com',
    },
  },
  {
    coachName: 'Sharon Melnick, PhD',
    jobTitle: 'Leading authority on women’s next level success',
    tags: ['Speaker', 'Author', 'Executive Coach'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/sharonmelnick041b-small.jpg',
    bio:
      'Sharon Melnick, PhD is a leading authority on women\'s advancement and stress resilience.  Her methods are informed by 10 years of psychology research at Harvard Medical School.  A sought after coach and speaker, her approaches are field tested by coaching clients/trainees at 35 Fortune 500 companies and over 200 conferences worldwide (as well as at the White House and the United Nations). \n\nHer current work supports C-suite women leaders to be influential Change Agents.  She also specializes in helping mid-level female talent overcome gender bias so they can shift from "pigeon-holed" to "promoted" into senior roles.   She created the Next Level Leader initiative which partners with associations to provide group coaching for their members.  She has recently launched a global network of senior women leaders to harness their collective learnings and power across organizations.\n\nDr. Melnick became a subject matter expert on the three skillsets women need for next level impact: Resilience, Confidence, and Influence.  Her first book was Success under Stress: Powerful Tools for Staying Calm, Confident, and Productive when the Pressure\'s On, and her second book is Confidence when it Counts: Rise Above Self Doubt and Bias to Make your Mark. She is now writing a 3rd book on how Power works in organizations - it explores how women and Inclusive leaders (of either gender) get into positions of power and use power to raise others.\n\nDr. Melnick\'s work with women leaders is strengthened through neuro-coaching stress resilience techniques and a proprietary root cause solution developed in her research. This unique "Magic Bullet" instantly and permanently shifts women leaders\' self doubt into self confidence, thus contributing to their unwavering leadership Presence and deep impact.',
    links: {
      facebook: '',
      instagram: '',
      linkedin: '',
      twitter: '',
      website: 'https://www.sharonmelnick.com/',
    },
  },
  {
    coachName: 'Alex Lazurus',
    jobTitle: 'Leadership and Team Coach | Behaviour Change Scientist',
    tags: ['Speaker', 'Author', 'Executive Coach', 'Consultant'],
    photo: 'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/alex-l.jpg',
    bio:
      'Based in London, I spent many years in multinationals such as Virgin HQ (working as part of the support office for Richard Branson and Simon Wright), Fox Family Worldwide (marketing, sponsorship, strategy) and The Walt Disney Family (PR, marketing, sponsorship, partnerships) where after serving as their Marketing Director with a responsibility of over 20 emerging markets, launching new channels and organising awards events on major broadcaster platforms, I left to set up my own consultancy Lazarus & Maverick.  \n\nAfter years of business experience and at the height of my much-loved career, the more I served as a leader, the more I was drawn to launching people, not products, into success. Examining the success of our business through the lens of human behaviour has always been my starting point and I felt I had to learn more to truly give back. Having attended a Disney Leadership Accelerate programme in Los Angeles, I was inspired by the coaches we worked there to change career, to retrain, and my consultancy, Lazarus & Maverick Limited was born. \n\nMany coaching courses later including years of incredible learning experience at the Henley Business School (MSc, 2019) and becoming a practitioner in various psychometric and assessment models from the Lumina Learning range (Spark | Leader | Sales | Emotion) and others, together with a group of colleagues we proudly help leaders and organisations to enable their people to work better together, to unpack unhelpful group dynamics, to think freely and creatively about the future possibilities and to bring basic human psychology to the corporate space (KPMG, Spotify, Apple, Toast, Disney, EndemolShine and others)',
    links: {
      facebook: '',
      instagram: '',
      linkedin: '',
      twitter: '',
      website: 'http://www.lazarusandmaverick.co.uk',
    },
  },
  {
    coachName: 'Jennifer Paylor',
    jobTitle: 'People Engineer, IBM',
    tags: ['Executive Coach', 'Speaker', 'Corporate Executive'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/img_4064-coach-jennifer-paylor.jpg',
    bio:
      'Jennifer Paylor is the leader of the IBM Coaching Community & Practice, which has more than 3,000 members worldwide. Jennifer is known as an industry thought-leader in business coaching, senior executive leadership development, Agile, and large scale culture transformation.\n\nJennifer has been a keynote speaker for the annual CEB Executive Coaching & Leadership Conference, CEB Talent Management Conference, and the US Navy Coaching Summit to name a few. Jennifer leverages her engineering background and human-centered approach to design science based solutions that address today’s business challenges.\n\nJennifer built the Global Talent Development team in IBM’s Global Process Services Delivery before moving to IBM’s Corporate Headquarters to lead the coaching strategy and executive leadership development programs.\n\nJennifer is on the Advisory Board for the diversity start-up called itsDandi and a Fast Company Impact Council member. She served as the vice chair for Recity Network, a nonprofit helping to rewrite the story for the 4,000 disadvantaged youth, the Secretary/Treasurer for the International Coaching Federation Raleigh Area Chapter, and Board President for the Institute of Behavioral Heath.\n\nJennifer devotes time singing, recording, and producing gospel music, developing Christian leaders in church, and helping widows in the community.',
    links: '',
  },
  {
    coachName: 'Jonathan Passmore',
    jobTitle: 'Director of Coaching, Henley Business School',
    tags: ['Executive Coach', 'Speaker', 'Author', 'Entrepreneur'],
    photo:
      'https://raw.githubusercontent.com/claygiffin/100-coaches-site/master/static/uploads/70-2010-dr-jonathan-passmore-jonathan-passmore.jpg',
    bio:
      "Jonathan is a professor of coaching and behavioural change, he holds five degrees, several coach accreditations and is a licensed I/O psychologist. He has written widely with over 100 scientific papers and book chapters, 30 books including 'Excellence in Coaching' and 'Top Business Psychology Models’, and has presented over 200 conference papers around the world. he is the editor of the premier coaching journal ‘International Coaching Psychology Review’ and series editor for Wiley Blackwell's academic I/O series of handbooks. Jonathan was nominated as a Thinkers50 Top8 coach in 2019 and his work has been recognized by a range of awards by the British Psychological Society, Association for Coaching and Best Paper in 2019 in 'Coaching at Work' magazine\n\nJonathan combines his academic role with a private coaching practice. He has coached leaders across the public, private and the not for profit sector, including well known names in government and the media. Prior to this Jonathan has held a number of board level posts. He has been a local government director, a chief executive for a national mental health charity in the UK and has worked for PricewaterhouseCoopers and IBM on business transformation projects.",
    links: '',
  },
]

const importFunc = async () => {
  const coachProfiles = data

  // const categories = coachProfiles.flatMap((coachProfile) => coachProfile.tags)
  // const uniqueCategories = uniq(categories)

  // uniqueCategories.forEach(async (category) => {
  //   await client.items.create({
  //     itemType: '248364',
  //     category_name: category,
  //   })
  // })


  coachProfiles.forEach(async (coach) => {

    const matchedCategories = await client.items.all({
      filter: {
        type: 'coach_category',
        fields: {
          category_name: {
            in: coach.tags,
          },
        },
      },
    })
    const categoryIdArray = matchedCategories.map(category => category.id)

    const photo = await client.uploadFile(coach.photo)

    await client.items.create({
      itemType: '248363',
      coach_name: coach.coachName,
      job_title: coach.jobTitle,
      coach_categories: categoryIdArray,
      photo: photo,
      bio: coach.bio,
      website: coach.links.website,
      linkedin: coach.links.linkedin,
      twitter: coach.links.twitter,
      facebook: coach.links.facebook,
      instagram: coach.links.instagram,
    })

    // console.log(record)
  })
}

importFunc()
