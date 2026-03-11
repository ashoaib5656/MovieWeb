import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { QUESTION_DATA } from "../constants";
import Footer from "./Footer";
import HeaderComp from "./HeaderComp";
import "./Questions.css";

const QuestionContainer = () => {
    const { step } = useParams();
    const navigate = useNavigate();
    const currentStep = parseInt(step || "1");
    const question = QUESTION_DATA.find((q) => q.id === currentStep);

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login");
        }
    }, [navigate]);

    const [selections, setSelections] = useState<string[]>([]);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Reset selections and trigger animation when question changes
    useEffect(() => {
        setSelections([]);
        setIsTransitioning(true);
        const timer = setTimeout(() => setIsTransitioning(false), 500);
        return () => clearTimeout(timer);
    }, [currentStep]);

    if (!question) {
        return <div className="error-message">Question step not found</div>;
    }

    const handleSelect = (optionId: string) => {
        if (question.type === "multiple") {
            if (selections.includes(optionId)) {
                setSelections(selections.filter((s) => s !== optionId));
            } else {
                setSelections([...selections, optionId]);
            }
        } else {
            setSelections([optionId]);
        }
    };

    const isSelected = (optionId: string) => selections.includes(optionId);

    const isNextDisabled = selections.length === 0;

    const handleNext = () => {
        if (currentStep === QUESTION_DATA.length) {
            navigate("/movies/best");
        } else {
            navigate(`/discovery/${currentStep + 1}`);
        }
    };

    const handleBack = () => {
        if (currentStep === 1) {
            navigate("/");
        } else {
            navigate(`/discovery/${currentStep - 1}`);
        }
    };

    return (
        <div className="discovery-elite-wrapper">
            <HeaderComp />
            
            {/* Visual background layers */}
            <div className="ambient-glow-top"></div>
            <div className="ambient-glow-bottom"></div>
            
            <Box className={`discovery-elite-container ${isTransitioning ? 'switching' : ''}`}>
                <div className="elite-card">
                    <div className="elite-card-shine"></div>
                    
                    <div className="elite-progress-track">
                        <div 
                            className="elite-progress-bar" 
                            style={{ width: `${(currentStep / QUESTION_DATA.length) * 100}%` }}
                        >
                            <div className="progress-glow"></div>
                        </div>
                    </div>

                    <div className="elite-card-body">
                        <div className="elite-header">
                            <div className="elite-step-badge">
                                <span>Phase {currentStep}</span>
                                <div className="dot-pulse"></div>
                            </div>
                            <h1 className="elite-title">{question.text}</h1>
                            <p className="elite-subtitle">Select the options that best match your current preference</p>
                        </div>

                        {question.type === "emoji" && (
                            <div className="elite-emoji-grid">
                                {question.options.map((opt) => (
                                    <div
                                        key={opt.id}
                                        className={`elite-emoji-item ${isSelected(opt.id) ? "is-active" : ""}`}
                                        onClick={() => handleSelect(opt.id)}
                                    >
                                        <div className="emoji-wrap">
                                            <i className={`fa-regular ${opt.icon}`}></i>
                                        </div>
                                        <span className="emoji-name">{opt.label}</span>
                                        <div className="selection-pulse"></div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {question.type !== "emoji" && (
                            <div className={`elite-options-list ${question.type === "multiple" ? "grid-mode" : ""}`}>
                                {question.options.map((opt) => (
                                    <div
                                        key={opt.id}
                                        className={`elite-option-box ${isSelected(opt.id) ? "selected" : ""}`}
                                        onClick={() => handleSelect(opt.id)}
                                    >
                                        <div className="box-indicator">
                                            <div className="inner-dot"></div>
                                        </div>
                                        <span className="box-label">{opt.label}</span>
                                        <div className="box-hover-effect"></div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="elite-footer-nav">
                            <button className="elite-nav-btn btn-outline" onClick={handleBack}>
                                <i className="fa-solid fa-arrow-left-long"></i>
                                <span>Previous Step</span>
                            </button>
                            <button 
                                className="elite-nav-btn btn-primary" 
                                onClick={handleNext}
                                disabled={isNextDisabled}
                            >
                                <span>{currentStep === QUESTION_DATA.length ? "Generate Recommendations" : "Carry Forward"}</span>
                                {currentStep !== QUESTION_DATA.length && <i className="fa-solid fa-arrow-right-long"></i>}
                                <div className="btn-shine"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </Box>
            <Footer />
        </div>
    );
};

export default QuestionContainer;
