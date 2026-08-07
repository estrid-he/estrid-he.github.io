(function () {
  const records = {
    "One Pass, Any Order: Position-Invariant Listwise Reranking for LLM-Based Recommendation": {
      type: "inproceedings", key: "bito2026one", authors: "Bito, Ethan and Ren, Yongli and He, Estrid",
      venueField: "booktitle", venue: "49th International ACM SIGIR Conference on Research and Development in Information Retrieval", year: "2026",
      pdf: "assets/papers/one-pass-any-order.pdf",
      code: "https://github.com/ejbito/InvariRank"
    },
    "Position Bias Undermines Preference Consistency in Listwise LLM-Based Reranking": {
      type: "inproceedings", key: "bito2026position", authors: "Bito, Ethan and Ren, Yongli and He, Estrid",
      venueField: "booktitle", venue: "ACM Conference on Recommender Systems", year: "2026",
      pdf: "assets/papers/position-bias-listwise-llm-reranking.pdf",
      code: "https://github.com/ejbito/InvariRank"
    },
    "I Am No One: Style-Aware Paraphrasing for Text Anonymization": {
      type: "inproceedings", key: "khan2026noone", authors: "Khan, Ahmed Sohair and He, Estrid and Wachowicz, Monica and Naghizade, Elham",
      venueField: "booktitle", venue: "INTERSPEECH", year: "2026",
      pdf: "assets/papers/i-am-no-one-style-aware-paraphrasing.pdf",
      code: "https://github.com/ahmedsohair/SAPTA26"
    },
    "Do We Still Need Gazetteers in the Era of LLMs? Chaining Retrieval with a Spatial Neuro-Symbolic Index": {
      type: "inproceedings", key: "hordevo2026gazetteers", authors: "Horde Vo, Alexis and He, Estrid and Duckham, Matt",
      venueField: "booktitle", venue: "ACM SIGSPATIAL International Conference on Advances in Geographic Information Systems", year: "2026"
    },
    "Learning on Multimodal Graphs": {
      type: "article", key: "peng2026learning", authors: "Peng, Ciyuan and He, Estrid and Xia, Feng",
      venueField: "journal", venue: "IEEE Intelligent Systems", year: "2026",
      pdf: "assets/papers/learning-on-multimodal-graphs.pdf"
    },
    "AdaptMol: Domain Adaptation for Molecular Image Recognition with Limited Supervision": {
      type: "article", key: "hu2026adaptmol", authors: "Hu, Feng and He, Estrid and Verspoor, Karin",
      venueField: "journal", venue: "Journal of Cheminformatics", year: "2026",
      pdf: "assets/papers/adaptmol.pdf"
    },
    "Hallucinate Less by Thinking More: Aspect-Based Causal Abstention for Large Language Models": {
      type: "inproceedings", key: "nguyen2026hallucinate", authors: "Nguyen, Vy and Xu, Ziqi and Chan, Jeffrey and He, Estrid and Xia, Feng and Zhang, Xiuzhen",
      venueField: "booktitle", venue: "40th Annual AAAI Conference on Artificial Intelligence", year: "2026",
      pdf: "assets/papers/hallucinate-less-by-thinking-more.pdf"
    },
    "ConASD: Contrastive Few Shot Learning for Detecting Autism Spectrum Disorder via Eye Tracking Scanpath": {
      type: "article", key: "mousli2025conasd", authors: "Mousli, Sharifah and Taheri, Sona and He, Estrid",
      venueField: "journal", venue: "Multimedia Systems", year: "2025",
      pdf: "assets/papers/conasd.pdf"
    },
    "Evaluating Position Bias in Large Language Model Recommendations": {
      type: "article", key: "bito2025evaluating", authors: "Bito, Ethan and Ren, Yongli and He, Estrid",
      venueField: "journal", venue: "arXiv preprint arXiv:2508.02020", year: "2025", pdf: "assets/papers/evaluating-position-bias.pdf"
    },
    "A Comprehensive Systematic Review Dataset Is a Rich Resource for Training and Evaluation of AI Systems for Title and Abstract Screening": {
      type: "article", key: "chan2025comprehensive", authors: "Chan, Gary C. K. and He, Estrid and Leung, Janni and Verspoor, Karin",
      venueField: "journal", venue: "Research Synthesis Methods", year: "2025",
      pdf: "assets/papers/systematic-review-screening-dataset.pdf",
      dataset: "https://data.mendeley.com/datasets/7sgmg89zb6/1"
    },
    "Principles from Clinical Research for NLP Model Generalization": {
      type: "inproceedings", key: "elangovan2024principles", authors: "Elangovan, Aparna and He, Jiayuan and Li, Yuan and Verspoor, Karin",
      venueField: "booktitle", venue: "2024 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies", year: "2024",
      pdf: "assets/papers/principles-clinical-research-nlp-generalization.pdf"
    },
    "mBGT: Encoding Brain Signals with Multimodal Brain Graph Transformer": {
      type: "article", key: "peng2024mbgt", authors: "Peng, Ciyuan and Guo, Tianqi and Xie, Chengyao and Bai, Xiaomei and Zhou, Jingjing and Zhao, Xiaohui and He, Estrid and Xia, Feng",
      venueField: "journal", venue: "IEEE Transactions on Consumer Electronics", year: "2024",
      pdf: "assets/papers/mbgt.pdf"
    },
    "FuGNN: Harmonizing Fairness and Utility in Graph Neural Networks": {
      type: "inproceedings", key: "luo2024fugnn", authors: "Luo, Renqiang and Huang, Huafei and Yu, Shuo and Han, Zhuoyang and He, Estrid and Zhang, Xiuzhen and Xia, Feng",
      venueField: "booktitle", venue: "30th ACM SIGKDD Conference on Knowledge Discovery and Data Mining", year: "2024",
      pdf: "assets/papers/fugnn.pdf",
      code: "https://github.com/yushuowiki/FUGNN"
    },
    "Focused Contrastive Loss for Classification with Pre-trained Language Models": {
      type: "article", key: "he2023focused", authors: "He, Jiayuan and Li, Yuan and Zhai, Zenan and Fang, Biaoyan and Thorne, Camilo and Druckenbrodt, Christian and Akhondi, Saber and Verspoor, Karin",
      venueField: "journal", venue: "IEEE Transactions on Knowledge and Data Engineering", year: "2023",
      pdf: "assets/papers/focused-contrastive-loss.pdf"
    },
    "Effects of Human Adversarial and Affable Samples on BERT Generalization": {
      type: "inproceedings", key: "elangovan2023effects", authors: "Elangovan, Aparna and He, Jiayuan and Li, Yuan and Verspoor, Karin",
      venueField: "booktitle", venue: "2023 Conference on Empirical Methods in Natural Language Processing", year: "2023",
      pdf: "assets/papers/effects-human-adversarial-affable-samples.pdf"
    },
    "Evolution of Short-Range Optical Wireless Communications": {
      type: "article", key: "wang2023evolution", authors: "Wang, Ke and Song, Tingting and Wang, Yitong and Fang, Chengwei and He, Jiayuan and Nirmalathas, Ampalavanapillai and Lim, Christina and Wong, Elaine and Kandeepan, Sithamparanathan",
      venueField: "journal", venue: "Journal of Lightwave Technology", year: "2023",
      pdf: "assets/papers/evolution-short-range-optical-wireless.pdf"
    },
    "ChEMU 2020: Natural language processing methods are effective for information extraction from chemical patents": {
      type: "article", key: "he2021chemu2020", authors: "He, Jiayuan and Nguyen, Dat Quoc and Akhondi, Saber A. and Druckenbrodt, Christian and Thorne, Camilo and Hoessel, Ralph and Afzal, Zubair and Zhai, Zenan and Fang, Biaoyan and Yoshikawa, Hiyori and others",
      venueField: "journal", venue: "Frontiers in Research Metrics and Analytics", year: "2021",
      pdf: "assets/papers/chemu-2020.pdf",
      dataset: "https://d2fl46zwezcpr6.cloudfront.net/2022/"
    },
    "ChEMU 2021: reaction reference resolution and anaphora resolution in chemical patents": {
      type: "inproceedings", key: "he2021chemureferences", authors: "He, Jiayuan and Fang, Biaoyan and Yoshikawa, Hiyori and Li, Yuan and Akhondi, Saber A. and Druckenbrodt, Christian and Thorne, Camilo and Afzal, Zubair and Zhai, Zenan and Cavedon, Lawrence and others",
      venueField: "booktitle", venue: "European Conference on Information Retrieval", year: "2021",
      pdf: "assets/papers/chemu-2021.pdf"
    },
    "Memorization vs. Generalization: Quantifying Data Leakage in NLP Performance Evaluation": {
      type: "inproceedings", key: "elangovan2021memorization", authors: "Elangovan, Aparna and He, Jiayuan and Verspoor, Karin",
      venueField: "booktitle", venue: "16th Conference of the European Chapter of the Association for Computational Linguistics", year: "2021",
      pdf: "assets/papers/memorization-vs-generalization.pdf"
    },
    "ChEMU-ref: A corpus for modeling anaphora resolution in the chemical domain": {
      type: "inproceedings", key: "fang2021chemuref", authors: "Fang, Biaoyan and Druckenbrodt, Christian and Akhondi, Saber A. and He, Jiayuan and Baldwin, Timothy and Verspoor, Karin",
      venueField: "booktitle", venue: "16th Conference of the European Chapter of the Association for Computational Linguistics: Main Volume", year: "2021",
      pdf: "assets/papers/chemu-ref.pdf",
      code: "https://github.com/biaoyanf/ChEMU-Ref"
    },
    "A Joint Context-Aware Embedding for Trip Recommendations": {
      type: "inproceedings", key: "he2019joint", authors: "He, Jiayuan and Qi, Jianzhong and Ramamohanarao, Kotagiri",
      venueField: "booktitle", venue: "35th IEEE International Conference on Data Engineering", year: "2019",
      pdf: "assets/papers/joint-context-aware-trip-recommendations.pdf",
      code: "https://github.com/Estrid0112/context_aware_trip_recommendation"
    },
    "Continuous Spatial Query Processing: A Survey of Safe Region Based Techniques": {
      type: "article", key: "qi2018continuous", authors: "Qi, Jianzhong and Zhang, Rui and Jensen, Christian S. and Ramamohanarao, Kotagiri and He, Jiayuan",
      venueField: "journal", venue: "ACM Computing Surveys", year: "2018",
      pdf: "assets/papers/continuous-spatial-query-processing.pdf"
    }
  };

  function bibtex(title, record) {
    return `@${record.type}{${record.key},\n` +
      `  author = {${record.authors}},\n` +
      `  title = {${title}},\n` +
      `  ${record.venueField} = {${record.venue}},\n` +
      `  year = {${record.year}}\n` +
      `}`;
  }

  function scholarPdfSearch(title) {
    return `https://scholar.google.com/scholar?q=${encodeURIComponent(`\"${title}\" filetype:pdf`)}`;
  }

  const articles = document.querySelectorAll('.pub-item');

  articles.forEach((article, index) => {
    const heading = article.querySelector('h3');
    if (!heading) return;

    const title = heading.textContent.trim();
    const record = records[title];
    if (!record) return;

    const panelId = `bib-panel-${index + 1}`;
    const actions = document.createElement('div');
    actions.className = 'publication-actions';

    const bibButton = document.createElement('button');
    bibButton.type = 'button';
    bibButton.className = 'publication-action';
    bibButton.textContent = 'BIB';
    bibButton.setAttribute('aria-expanded', 'false');
    bibButton.setAttribute('aria-controls', panelId);

    const pdfLink = document.createElement('a');
    pdfLink.className = 'publication-action';
    pdfLink.textContent = 'PDF';
    pdfLink.href = record.pdf || scholarPdfSearch(title);
    pdfLink.target = '_blank';
    pdfLink.rel = 'noopener noreferrer';
    if (!record.pdf) pdfLink.title = 'Find an available PDF on Google Scholar';

    actions.append(bibButton, pdfLink);

    if (record.code) {
      const codeLink = document.createElement('a');
      codeLink.className = 'publication-action';
      codeLink.textContent = 'CODE';
      codeLink.href = record.code;
      codeLink.target = '_blank';
      codeLink.rel = 'noopener noreferrer';
      actions.append(codeLink);
    }

    if (record.dataset) {
      const datasetLink = document.createElement('a');
      datasetLink.className = 'publication-action';
      datasetLink.textContent = 'DATASET';
      datasetLink.href = record.dataset;
      datasetLink.target = '_blank';
      datasetLink.rel = 'noopener noreferrer';
      actions.append(datasetLink);
    }

    const panel = document.createElement('div');
    panel.className = 'bib-panel';
    panel.id = panelId;
    panel.hidden = true;

    const panelToolbar = document.createElement('div');
    panelToolbar.className = 'bib-panel-toolbar';

    const panelLabel = document.createElement('span');
    panelLabel.textContent = 'BibTeX';

    const copyButton = document.createElement('button');
    copyButton.type = 'button';
    copyButton.className = 'bib-copy';
    copyButton.textContent = 'Copy';

    const pre = document.createElement('pre');
    const code = document.createElement('code');
    const citation = bibtex(title, record);
    code.textContent = citation;
    pre.append(code);
    panelToolbar.append(panelLabel, copyButton);
    panel.append(panelToolbar, pre);

    bibButton.addEventListener('click', () => {
      const willOpen = panel.hidden;
      document.querySelectorAll('.bib-panel:not([hidden])').forEach((openPanel) => {
        openPanel.hidden = true;
        const openButton = document.querySelector(`[aria-controls="${openPanel.id}"]`);
        if (openButton) openButton.setAttribute('aria-expanded', 'false');
      });
      panel.hidden = !willOpen;
      bibButton.setAttribute('aria-expanded', String(willOpen));
    });

    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(citation);
        copyButton.textContent = 'Copied';
        window.setTimeout(() => { copyButton.textContent = 'Copy'; }, 1600);
      } catch (_) {
        copyButton.textContent = 'Select text to copy';
      }
    });

    const oldActions = article.querySelector('.inline-actions');
    if (oldActions) oldActions.remove();
    article.append(actions, panel);
  });
})();
