searchState.loadedDescShard("argmin", 0, "argmin is a numerical optimization library written …\nCreate an <code>ArgminError</code> with a provided message.\nCreate an <code>ArgminError</code> with a provided message wrapped in a …\nCreates the <code>bulk_X</code> methods.\nRelease an <code>T</code> from an <code>Option&lt;T&gt;</code> if it is not <code>None</code>. If it is …\nargmin optimization toolbox core\nConvert a constant to a float of given precision\nCreates an <code>KV</code> at compile time\nSolvers\nTODO A for linear programs\nTODO A for linear programs\nCalls <code>A</code> defined in the <code>LinearProgram</code> trait.\nArgmin error type\nAn alias for float types (<code>f32</code>, <code>f64</code>) which combines …\nBoolean values\nCheckpoint was not found\nIndicates that a condition is violated\nDefines computation of a cost function value\nThe <code>Error</code> type, a wrapper around a dynamic error type.\nSolves an optimization problem with a solver\nFloating point values\nPrecision of floats\nFloating point precision (f32 or f64)\nDefines the computation of the gradient.\nType of the gradient\nDefines the computation of the Hessian.\nType of the Hessian\nIndicates an impossible error\nSigned integers\nAlgorithm manually interrupted with SIGINT (Ctrl+C), …\nIndicates and invalid parameter\nMaintains the state from iteration to iteration of a solver\nDefines the computation of the Jacobian.\nType of the Jacobian\nA simple key-value storage\nTypes available for use in <code>KV</code>.\nDefines a linear Program\nMaintains the state from iteration to iteration of a solver\nReached maximum number of iterations\nIndicates that a function is not implemented\nIndicates that a function is not initialized\nExecution is running\nDefines the application of an operator to a parameter …\nResult of an optimization returned by after running an …\nType of the return value of the operator\nType of the return value of the cost function\nType of the parameter vector\nType of the parameter vector\nType of the parameter vector\nType of the parameter vector\nType of the parameter vector\nType of the parameter vector\nType of parameter vector\nMaintains the state from iteration to iteration of a …\nFor errors which are likely bugs.\nWrapper around problems defined by users.\nTrait alias for <code>Send</code>\nThe interface all solvers are required to implement.\nConverged\nSolver exit with given reason\nMinimal interface which struct used for managing state in …\nStrings\nTrait alias for <code>Sync</code>\nReached target cost function value\nExecution is terminated\nReasons for optimization algorithms to stop\nStatus of optimization execution\nTimeout reached\nUnsigned integers\nAdds an observer to the executor. Observers are required …\nCalls <code>anneal</code> defined in the <code>Anneal</code> trait and keeps track …\nApplies the operator to parameters\nCalls <code>apply</code> defined in the <code>Operator</code> trait and keeps track …\nGet String representation of <code>KvValue</code>\nTODO b for linear programs\nTODO b for linear programs\nCalls <code>b</code> defined in the <code>LinearProgram</code> trait.\nGet the backtrace for this Error.\nCurrent best cost function value\nCurrent best cost function value\nCurrent best cost function value\nCurrent best individual vector\nCurrent best parameter vector\nCurrent best parameter vector\nCompute <code>apply</code> in bulk. If the <code>rayon</code> feature is enabled, …\nCompute <code>apply</code> in bulk. If the <code>rayon</code> feature is enabled, …\nCalls <code>bulk_apply</code> defined in the <code>Operator</code> trait and keeps …\nCompute <code>cost</code> in bulk. If the <code>rayon</code> feature is enabled, …\nCompute <code>cost</code> in bulk. If the <code>rayon</code> feature is enabled, …\nCalls <code>bulk_cost</code> defined in the <code>CostFunction</code> trait and …\nCompute <code>gradient</code> in bulk. If the <code>rayon</code> feature is enabled, …\nCompute <code>gradient</code> in bulk. If the <code>rayon</code> feature is enabled, …\nCalls <code>bulk_gradient</code> defined in the <code>Gradient</code> trait and …\nCompute <code>hessian</code> in bulk. If the <code>rayon</code> feature is enabled, …\nCompute <code>hessian</code> in bulk. If the <code>rayon</code> feature is enabled, …\nCalls <code>bulk_hessian</code> defined in the <code>Hessian</code> trait and keeps …\nCompute <code>jacobian</code> in bulk. If the <code>rayon</code> feature is enabled, …\nCompute <code>jacobian</code> in bulk. If the <code>rayon</code> feature is enabled, …\nCalls <code>bulk_jacobian</code> defined in the <code>Jacobian</code> trait and …\nGives access to the stored <code>problem</code> via the closure <code>func</code> …\nTODO c for linear programs Those three could maybe be …\nTODO c for linear programs Those three could maybe be …\nCalls <code>c</code> defined in the <code>LinearProgram</code> trait.\nAn iterator of the chain of source errors contained by …\nCheckpointing\nConfigures checkpointing\nTwo <code>OptimizationResult</code>s are equal if the absolute of the …\nThis method gives mutable access to the internal state of …\nConsumes another instance of <code>Problem</code> by summing ob the …\nConsumes another instance of <code>Problem</code>. The internally …\nWrap the error value with additional context.\nCompute cost function\nCalls <code>cost</code> defined in the <code>CostFunction</code> trait and keeps …\nSet the current cost function value. This shifts the …\nSet the current cost function value. This shifts the …\nSet the current cost function value. This shifts the …\nCurrent cost function value\nCurrent cost function value\nCurrent cost function value\nOverrides state of counting function executions (default: …\nOverrides state of counting function executions (default: …\nOverrides state of counting function executions (default: …\nUpdate evaluation counts?\nUpdate evaluation counts?\nUpdate evaluation counts?\nKeeps track of how often methods of <code>problem</code> have been …\nEvaluation counts\nEvaluation counts\nEvaluation counts\nEnables or disables CTRL-C handling (default: enabled). …\nAttempt to downcast the error object to a concrete type.\nDowncast this error object by mutable reference.\nDowncast this error object by reference.\nTwo <code>OptimizationResult</code>s are equal if the absolute of the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nSet all function evaluation counts to the evaluation …\nSet all function evaluation counts to the evaluation …\nSet all function evaluation counts to the evaluation …\nSet all function evaluation counts to the evaluation …\nRetrieve an element from the KV by key\nReturns best cost function value\nReturns current best cost function value.\nReturns the current best cost function value\nReturns current best cost function value.\nReturns the current best cost function value\nReturns current best cost function value.\nReturns a reference to the current best parameter vector\nReturns a reference to the current best parameter vector\nReturns a reference to the current best parameter vector\nReturns a reference to the current best individual\nExtract bool from <code>KvValue</code>\nReturns current cost function value\nReturns the current cost function value\nReturns current cost function value.\nReturns current cost function value.\nReturns the current cost function value\nReturns current cost function value.\nExtract float from <code>KvValue</code>\nReturns current cost function evaluation count\nReturns function evaluation counts\nReturns function evaluation counts\nReturns function evaluation counts\nReturns a reference to the gradient\nReturns a reference to the current Hessian\nExtract int from <code>KvValue</code>\nReturns a reference to the current inverse Hessian\nReturns current number of iterations\nReturns current number of iterations.\nReturns current number of iterations.\nReturns current number of iterations.\nReturns a reference to the current Jacobian\nReturns iteration number where the last best parameter …\nReturns iteration number of last best parameter vector.\nReturns iteration number of last best parameter vector.\nReturns iteration number of last best individual\nReturns maximum number of iterations that are to be …\nReturns the maximum number of iterations.\nReturns the maximum number of iterations.\nReturns the maximum number of iterations.\nReturns a reference to the current parameter vector\nReturns a reference to the current parameter vector\nReturns a reference to the current parameter vector\nReturns a reference to the current individual\nReturns a reference to the population\nReturns the previous best cost function value\nReturns the previous best cost function value\nReturns a reference to previous best individual\nReturns a reference to previous best parameter vector\nReturns the previous cost function value\nReturns the previous cost function value\nReturns a reference to the previous gradient\nReturns a reference to the previous Hessian\nReturns a reference to previous individual\nReturns a reference to the previous inverse Hessian\nReturns a reference to the previous Jacobian\nReturns a reference to previous parameter vector\nReturns a reference to the previous residuals\nReturns the internally stored user defined problem by …\nReturns a reference to the residuals\nExtract String from <code>KvValue</code>\nReturns target cost\nReturns target cost function value.\nReturns the target cost function value\nReturns target cost function value.\nReturns target cost function value.\nReturns the target cost function value\nReturns the termination reason if terminated, otherwise …\nReturns the termination reason if terminated, otherwise …\nReturns the termination reason if terminated, otherwise …\nReturns the termination reason if terminated, otherwise …\nReturns termination status.\nReturns the termination status.\nReturns the termination status.\nReturns the termination reason.\nGet time passed since the beginning of the optimization …\nReturns the time elapsed since the start of the …\nReturns the time elapsed since the start of the …\nReturns the time elapsed since the start of the …\nExtract unsigned int from <code>KvValue</code>\nCurrent gradient\nCompute gradient\nCalls <code>gradient</code> defined in the <code>Gradient</code> trait and keeps …\nSet gradient. This shifts the stored gradient to the …\nCompute Hessian\nCalls <code>hessian</code> defined in the <code>Hessian</code> trait and keeps track …\nSet Hessian. This shifts the stored Hessian to the …\nCurrent Hessian\nIncrement the number of iterations by one\nIncrements the number of iterations by one\nIncrements the number of iterations by one\nIncrements the number of iterations by one\nSet best individual of current iteration. This shifts the …\nCurrent individual vector\nInitializes the algorithm.\nInitializes the algorithm.\nInsert a key-value pair\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSet inverse Hessian. This shifts the stored inverse …\nCurrent inverse Hessian\nReturns true if <code>E</code> is the type held by this error object.\nReturns whether the current parameter vector is also the …\nReturns whether the current parameter vector is also the …\nReturns whether the current parameter vector is also the …\nReturns whether the current individual is also the best …\nCurrent iteration\nCurrent iteration\nCurrent iteration\nCompute Jacobian\nCalls <code>jacobian</code> defined in the <code>Jacobian</code> trait and keeps …\nSet Jacobian. This shifts the stored Jacobian to the …\nCurrent Jacobian\nReturns all available keys and their <code>KvValue</code> kind\nReturns the kind of the <code>KvValue</code>\nThe actual key value storage\nIteration number of last best cost\nIteration number of last best cost\nIteration number of last best cost\nMacros\nSet maximum number of iterations\nSet maximum number of iterations\nSet maximum number of iterations\nMaximum number of iterations\nMaximum number of iterations\nMaximum number of iterations\nMerge with another <code>KV</code>\nCreate a new error object from a printable error message.\nName of the solver. Mainly used in Observers.\nConstruct a new state\nConstructs an <code>Executor</code> from a user defined problem and a …\nCreate a new error object from any error type.\nConstructor a new empty <code>KV</code>\nWraps a problem into an instance of <code>Problem</code>.\nConstructs a new instance of <code>OptimizationResult</code> from a …\nCreate a new IterState instance\nCreate new <code>LinearProgramState</code> instance\nCreate a new PopulationState instance\nComputes a single iteration of the algorithm and has …\nObservers\nIndicates whether to parallelize calls to <code>apply</code> when using …\nIndicates whether to parallelize calls to <code>apply</code> when using …\nIndicates whether to parallelize calls to <code>cost</code> when using …\nIndicates whether to parallelize calls to <code>cost</code> when using …\nIndicates whether to parallelize calls to <code>gradient</code> when …\nIndicates whether to parallelize calls to <code>gradient</code> when …\nIndicates whether to parallelize calls to <code>hessian</code> when …\nIndicates whether to parallelize calls to <code>hessian</code> when …\nIndicates whether to parallelize calls to <code>jacobian</code> when …\nIndicates whether to parallelize calls to <code>jacobian</code> when …\nSet parameter vector. This shifts the stored parameter …\nSet parameter vector. This shifts the stored parameter …\nCurrent parameter vector\nCurrent parameter vector\nTwo <code>OptimizationResult</code>s are equal if the absolute of the …\nSet population.\nAll members of the population\nPrevious best cost function value\nPrevious best cost function value\nPrevious best cost function value\nPrevious best individual vector\nPrevious best parameter vector\nPrevious best parameter vector\nPrevious cost function value\nPrevious cost function value\nPrevious cost function value\nPrevious gradient\nPrevious Hessian\nPrevious individual vector\nPrevious inverse Hessian\nPrevious Jacobian\nPrevious parameter vector\nPrevious parameter vector\nValue of residuals from previous call to apply\nGives access to the stored <code>problem</code> via the closure <code>func</code> …\nReturns a reference to the stored problem.\nProblem defined by user\nProblem\nResets the function evaluation counts to zero.\nSet residuals. This shifts the stored residuals to the …\nValue of residuals from recent call to apply\nThe lowest level cause of this error — this error’s …\nRuns the executor by applying the solver to the …\nReturns a reference to the stored solver.\nSolver\nReturns a reference to the stored state.\nIteration state\nMoves the best individual out and replaces it internally …\nMoves the best parameter vector out and replaces it …\nMoves the gradient out and replaces it internally with <code>None</code>\nMoves the Hessian out and replaces it internally with <code>None</code>\nMoves the current individual out and replaces it …\nMoves the inverse Hessian out and replaces it internally …\nMoves the Jacobian out and replaces it internally with <code>None</code>\nMoves the current parameter vector out and replaces it …\nTakes population and replaces it internally with <code>None</code>.\nMoves the previous best individual out and replaces it …\nMoves the previous best parameter vector out and replaces …\nMoves the gradient out and replaces it internally with <code>None</code>\nMoves the previous Hessian out and replaces it internally …\nMoves the previous individual out and replaces it …\nMoves the previous Hessian out and replaces it internally …\nMoves the previous Jacobian out and replaces it internally …\nMoves the previous parameter vector out and replaces it …\nMoves the previous residuals out and replaces it …\nReturns the internally stored problem and replaces it with …\nMoves the residuals out and replaces it internally with …\nSet target cost.\nSet target cost.\nSet target cost.\nTarget cost function value\nTarget cost function value\nTarget cost function value\nUsed to implement stopping criteria, in particular …\nUsed to implement stopping criteria, in particular …\nChecks whether basic termination reasons apply.\nChecks whether basic termination reasons apply.\nSets the termination status to <code>Terminated</code> with the given …\nSets the termination status to <code>Terminated</code> with the given …\nSets the termination status to <code>Terminated</code> with the given …\nSets the termination status to <code>Terminated</code> with the given …\nReturn whether the algorithm has terminated or not\nReturn whether the algorithm has terminated or not\nReturns <code>true</code> if a solver terminated and <code>false</code> otherwise.\nStatus of optimization execution\nStatus of optimization execution\nStatus of optimization execution\nConvenience utilities for testing\nReturns a textual representation of what happened.\nSet time required since the beginning of the optimization …\nSets the time required so far.\nSets the time required so far.\nSets the time required so far.\nTime required so far\nTime required so far\nTime required so far\nSets a timeout for the run.\nEnables or disables timing of individual iterations …\nThis method is called after each iteration and checks if …\nChecks if the current parameter vector is better than the …\nChecks if the current parameter vector is better than the …\nChecks if the current individual is better than the …\nText\nText\nText\nText\nText\nText\nText\nCreate checkpoint in every iteration\nAn interface for checkpointing methods\nDefines at which intervals a checkpoint is saved.\nCreate checkpoint every N iterations\nNever create checkpoint\nIndicates how often checkpoints should be saved\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nLoads a saved checkpoint\nSave a checkpoint\nSaves a checkpoint when the checkpointing condition is met.\nCall observer in every iteration\nCall observer every N iterations\nNever call the observer\nCall observer when new best is found\nAn interface which every observer is required to implement\nIndicates when to call an observer.\nContainer for observers.\nThe default for <code>ObserverMode</code> is <code>Always</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if there are no observers stored.\nConstruct a new empty <code>Observers</code> instance.\nCalled at the end of a solver run\nCalled at the end of a solver run. Loops over all stored …\nCalled once after initialization of the solver.\nAfter initialization of the solver, this loops over all …\nCalled at every iteration of the solver\nCalled after each iteration.\nAdd another observer with a corresponding <code>ObserverMode</code>.\nPseudo problem useful for testing\nA (non-working) solver useful for testing\nA struct representing the following sparse problem.\nReturns a clone of parameter <code>p</code>.\nReturns a clone of parameter <code>p</code>.\nReturns <code>1.0f64</code>.\nReturns a sum of squared errors.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns a clone of parameter <code>p</code>.\nReturns a gradient of the cost function.\nReturns <code>vec![p, p]</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>vec![p, p]</code>.\nCreate an instance of <code>TestProblem</code>.\nCreate an instance of <code>TestSparseProblem</code>.\nCreate an instance of <code>TestSolver</code>.\nBrent’s methods\nConjugate Gradient methods\nNewton Methods\nGolden-section search\nGradient descent methods\nLandweber iteration\nLine search methods\nNelder-Mead method\nNewton Methods\nParticle Swarm Optimization (PSO)\nQuasi-Newton methods\nSimulated Annealing\nTrust region method\nBrent’s method\nBrent’s method\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstructor\nConstructor The values <code>min</code> and <code>max</code> must bracketing the …\nSet the tolerance to the value required.\nConjugate Gradient method\nNon-linear Conjugate Gradient method\nBeta update methods for <code>NonlinearConjugateGradient</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturn the previous search direction (Needed by <code>NewtonCG</code>)\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstructs an instance of <code>ConjugateGradient</code>\nConstruct a new instance of <code>NonlinearConjugateGradient</code>.\nPerform one iteration of CG algorithm\nSpecify the number of iterations after which a restart …\nSet the value for the orthogonality measure.\nFletcher and Reeves (FR) method\nHestenes and Stiefel (HS) method\nInterface for beta update methods (…\nPolak and Ribiere (PR) method\nPolak and Ribiere Plus (PR+) method\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstruct a new instance of <code>FletcherReeves</code>.\nConstruct a new instance of <code>PolakRibiere</code>.\nConstruct a new instance of <code>PolakRibierePlus</code>.\nConstruct a new instance of <code>HestenesStiefel</code>.\nUpdate beta.\nUpdate beta using the Fletcher-Reeves method.\nUpdate beta using the Polak-Ribiere method.\nUpdate beta using the Polak-Ribiere+ (PR+) method.\nUpdate beta using the Hestenes-Stiefel method.\nGauss-Newton method\nGauss-Newton method with line search\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstruct a new instance of <code>GaussNewtonLS</code>.\nConstruct a new instance of <code>GaussNewton</code>.\nSet step width gamma.\nSet tolerance for the stopping criterion based on cost …\nSet tolerance for the stopping criterion based on cost …\nGolden-section search\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nConstruct a new instance of <code>GoldenSectionSearch</code>.\nSet tolerance.\nSteepest descent\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nConstruct a new instance of <code>SteepestDescent</code>\nLandweber iteration\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nConstruct a new instance of <code>Landweber</code>\nBacktracking line search\nHager-Zhang line search\nLine search trait\nMore-Thuente line search\nAcceptance conditions\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nSet the initial step length\nSet initial step length\nSet initial alpha value\nSet initial alpha value\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstruct a new instance of <code>BacktrackingLineSearch</code>\nConstruct a new instance of <code>HagerZhangLineSearch</code>\nConstruct a new instance of <code>MoreThuenteLineSearch</code>\nSet contraction factor rho\nSet the search direction\nSet search direction\nSet search direction\nSet search direction\nSet lower and upper bound of step\nSet lower and upper bound of step\nSet the constants c1 and c2 for the sufficient decrease …\nSet delta and sigma.\nSet epsilon\nSet eta\nSet gamma\nSet theta\nSet relative tolerance on width of uncertainty interval\nArmijo Condition\nGoldstein conditions\nInterface which a condition needs to implement.\nStrong Wolfe conditions\nWolfe conditions\nEvaluate the condition\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstruct a new <code>ArmijoCondition</code> instance.\nConstruct a new instance of <code>GoldsteinCondition</code>.\nConstruct a new instance of <code>StrongWolfeCondition</code>.\nConstruct a new instance of <code>WolfeCondition</code>.\nIndicates whether this condition requires the computation …\nNelder-Mead method\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nConstruct a new instance of <code>NelderMead</code>\nSet alpha parameter for reflection\nSet gamma for expansion\nSet rho for contraction\nSet sample standard deviation tolerance\nSet sigma for shrinking\nNewton’s method\nNewton-Conjugate-Gradient (Newton-CG) method\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstruct a new instance of <code>NewtonCG</code>\nConstruct a new instance of <code>Newton</code>\nSet curvature threshold\nSet step size gamma\nSet tolerance for the stopping criterion based on cost …\nA single particle\nParticle Swarm Optimization (PSO)\nCost of particle\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstruct a new instance of <code>ParticleSwarm</code>\nCreate a new particle with a given position, cost and …\nPerform one iteration of algorithm\nPosition of particle\nSet cognitive acceleration factor\nSet inertia factor on particle velocity\nSet the random number generator\nSet social acceleration factor\nBFGS method\nDavidon-Fletcher-Powell (DFP) method\nLimited-memory BFGS (L-BFGS) method\nSymmetric rank-one (SR1) method\nSR1 Trust region method\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstruct a new instance of <code>BFGS</code>\nConstruct a new instance of <code>DFP</code>\nConstruct a new instance of <code>LBFGS</code>\nConstruct a new instance of <code>SR1</code>\nConstruct a new instance of <code>SR1TrustRegion</code>\nSet denominator factor\nSet denominator factor\nSet eta\nActivates L1-regularization with coefficient <code>l1_coeff</code>.\nSet initial radius\nSets tolerance for the stopping criterion based on the …\nSets tolerance for the stopping criterion based on the …\nSets tolerance for the stopping criterion based on the …\nThe algorithm stops if the norm of the gradient is below …\nThe algorithm stops if the norm of the gradient is below …\nThe algorithm stops if the norm of the gradient is below …\nThe algorithm stops if the norm of the gradient is below …\nThe algorithm stops if the norm of the gradient is below …\nThis trait handles the annealing of a parameter vector. …\n<code>t_i = t_init / ln(i)</code>\n<code>t_i = t_init * x^i</code>\nPrecision of floats\nReturn type of the anneal function\nType of the parameter vector\nTemperature functions for Simulated Annealing.\nSimulated Annealing\n<code>t_i = t_init / i</code>\nAnneal a parameter vector\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstruct a new instance of <code>SimulatedAnnealing</code>\nConstruct a new instance of <code>SimulatedAnnealing</code>\nPerform one iteration of SA algorithm\nSet the number of iterations that need to pass after the …\nSet the number of iterations that need to pass after the …\nSet number of iterations after which reannealing is …\nIf there are no accepted solutions for <code>iter</code> iterations, …\nIf there are no new best solutions for <code>iter</code> iterations, …\nSet temperature function\nCauchy point method\nDogleg method\nSteihaug method\nTrust region method\nAn interface methods which calculate approximate steps for …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstruct a new instance of <code>CauchyPoint</code>\nConstruct a new instance of <code>Dogleg</code>\nConstruct a new instance of <code>Steihaug</code>\nConstruct a new instance of <code>TrustRegion</code>\nComputes reduction ratio\nSet the initial radius\nSet current radius.\nSet current radius.\nSet current radius.\nSet epsilon\nSet eta\nSet maximum number of iterations\nSet maximum radius\nSet radius")