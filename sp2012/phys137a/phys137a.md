<a name='1'></a>

Physics 137A: Quantum Mechanics
===============================
Wednesday, January 18
---------------
Wick Haxton
haxton@berkeley.edu
431 Old LeConte

GSI: Grant Larsen
420B Old LeConte
larsen.ge@berkeley.edu

Decide office hours during discussion next week.

Generic Introduction
====================

special relativity; new theory returns to old theory as some ε→0.
ℏ = h/2π (Planck's constant – angular momentum).

(E₁-E₂)̱\bar{E} = (E₁-E₂)/(p²/2m)>(πℏ/pd)² ≈10^{-69}
ℏ = h/2π = 1.05·10^{-34} J·s

<a name='2'></a>

Physics 137A: Quantum Mechanics
===============================
Friday, January 20
--------------------

Historical review
=================
Planck: energy is infinite. (remove this paradox by quantization
of all matter.)

T{blackbody} > T{environment} → radiates

encountered contradiction by looking at higher and higher energy modes
in the box.

Incorrect implicit assumption was that energy is not continuous
(i.e. arrives in discrete "packets").

(dimensional analysis)

[ Planck radiation formula. ]

[ photoelectric effect also consistent with quantization of light. ]

de Broglie: particles behaving as waves, in addition to waves behaving as
particles.

(double-slit experiment)

"NOT an effect due to the interference of different photons passing
through the two slits. lower the light intensity so that on average
only one photon is in flight at one time. The intensity pattern is
still produced once the experiment is carried out long enough to
accumulate counts → the interference effect is a property of a single
photon. BUT pattern disappears if one slit is closed."

(superposition of multiple states.)

(Schrödinger's wave equation. blah. Dirac's relativistic version)

(uncertainty & conjugate bases)

(fourier analyses, more about uncertainty)

Schrödinger's wave equation
---------------------------
iℏ(∂ψ(x,t)/∂t) = [-(ℏ²/2m)(∂²/∂x² + V(x)] ψ(x,t) = H(x)ψ(x,t)
[ only one-dimensional, so far ]

Operators now written with a circumflex.

<a name='3'></a>

Physics 137A: Quantum Mechanics
===============================
Monday, January 23
--------------------

Use of Mathematica/Matlab/WolframAlpha encouraged for homework.

Recap. Talk about _how_ uncertain, measured by product of two related
properties, e.g. momentum + position Schrödinger's equation.

Classical mechanics teaches us (incorrectly!) that physics is
deterministic. This is actually just the most likely path that you can
follow from point a to point b.

The issue is that we have Heisenberg's uncertainty principle, so it is
impossible to precisely know momentum and position simultaneously.

three primary interpretations of QM
 * Einstein - deterministic (hidden variables). Wrong.
   + "God does not play dice."
   + Not enough information to fully ascertain position of particle;
     must be an issue with the theory.
 * Copenhagen (Bohr) - nondeterministic. Widely accepted.
   + "orthodox position", 
   + Actually does exist in all possible results simultaneously until
     measurement is made and wavefunction is collapsed.
 * "agnostic position": who cares?
 
variance is 〈(Δi)²〉 = 〈i²〉 - 〈i〉²


<a name='4'></a>

Physics 137A: Quantum Mechanics
===============================
Wednesday, January 25
--------------------

Discrete distributions and somesuch.

moments and stuff. mean: first moment. variance: roughly second
moment. skewness: third moment. kurtosis (wtf?): fourth moment.

Moments are the analogue of derivatives for distributions. Sort
of. You also have derivatives, which aren't very useful, usually.

stuff with normalizing wave function, |ψ|² = ψ*ψ, etc.

<a name='5'></a>

Physics 137A: Quantum Mechanics
===============================
Friday, January 27
------------------
Talk about using WolframAlpha to compute integrals.

blah, complex numbers. |Ψ|² ≡ ΨΨ*

Satisfying Schrödinger's equation in itself guarantees that
normalizing at a fixed point in time guarantees normalization for all
time.

[ derivations, consulting of notes. Correcting of errors. ]

[ working out expectation of momentum from the wave function. ]

〈v〉 = (d/dt)〈x〉 = [ℏ/im ∂/∂x]{Ψ}Ψ*
m〈v〉 = 〈p〉
\hat{p} = [ℏ/i ∂/∂x]

〈Ô〉 ≡ ∫[Ô]{Ψ}Ψ*dx

ΔxΔp ≥ ℏ/2
e^{ip·x}

Fourier transform of the Gaussian:
P(x) = 1/(√(2π)σ) e^{-x²/(2σ²)} = 1/(2π) ∫[cos(px/ℏ) e^{-p²σ²/(2ℏ²)}]∂(p/h)

<a name='6'></a>

Physics 137A: Quantum Mechanics
===============================
Monday, January 30
------------------

Nothing that hasn't already been covered in statistical mechanics.

fourier transform blah blah blah

quaternions and stuff

Stationary states ⇔ solving the Schrödinger equation (time independent).

iℏ ∂Ψ/∂t = (-ℏ²/2m ∂²/∂² + V(x))Ψ
	     = (T + V)Ψ
V = V(x,t) = V(x)
Ψ(x,t) = Ψ(x)e^{-iEt/ℏ}

Eliminated time dependence with Fourier transform.

Time independent Schrodinger equation:
EΨ′(x) = [-ℏ²/2m ∂²/∂x² + V(x)]Ψ′(x)
Ψ(x,t) = Ψ′(x) e^{-iEt/ℏ}

Probability density is fixed over time. Very strong statement.

Such a solution is called a stationary state because the probability
density is independent of time. i.e. V(x,t) → V(x)

First big idea, stationary states.
〈Ĥ〉 = ∫Ψ⁺ĤΨdx

σ{Ĥ} = 〈H²〉 - 〈H〉² = 0. Stationary states have definite
energy. Eigenvalues.

<a name='7'></a>

Physics 137A: Quantum Mechanics
===============================
Wednesday, February 1
---------------------
REMINDER: surfaces ⇒ boundaries.

Mostly duplicated information.

variance in energy is 〈H²〉 - 〈H〉² = 0.

proof of orthogonality; partial integrations and stuff. For two
different eigenvectors.

〈2|\hat{O}|1〉.

If you combine results with other results, we have a Krönecker delta.
∫Ψ*{i}Ψ{j} = δ{ij}.

The basic idea is that if you just focus on the time-independent
Schrödinger equation, it's quite powerful and used over and over again
in quantum mechanics.

 * First idea is time-independent solutions of the Schrödinger equation.
   + Basis vectors don't change over time.
 * Second idea is stationary states or eigenvalues or whatever (definite
   energy).
   + Basis vectors are eigenvectors.
 * Third idea is orthogonality.
   + These basis vectors are orthonormal.
 * Fourth idea is completeness.
   + This basis is a complete basis.

parity? arbitrary coordinates. V(x) is infinite outside the well, 0
inside the boundaries. We want to know how to solve that equation with
quantum mechanics. blah blah blah, construct Fourier series
already. Nothing interesting.

Ψ(x) = Asin(kx) + Bcos(kx).

We want our divergence to be 0. Continuous, zero at boundaries. Must
be zero at boundaries. THESE ARE BASIC BOUNDARY CONDITIONS.
½ka = π/2 + ℓπ  (ℓ ∈ \mathbb{N})
  a = (2ℓ+1)π/k

blah, constructing fourier series still

<a name='8'></a>

Physics 137A: Quantum Mechanics
===============================
Friday, February 3
------------------

Observations:

 * Eigenvalues discrete

	 ⇔ imposed by boundary conditions
	 Ψ(x) = 0 at x = a/2, -a/2.

 * wavefunction with En ∝ n²

Properties
==========

* Even/odd states under reflection around origin
  + V(x) = V(-x).

* Wave functions differ by the number of nodes.
  + n - 1 = # nodes.

* Wave functions are orthonormal. 〈Ψ{m}|Ψ{n}〉
* Wave functions are also complete.

blarg, constructing fourier series (finally) and bra-ket notation
(only now?).

<a name='9'></a>

Physics 137A: Quantum Mechanics
===============================
Monday, February 6
------------------

Anything prepared in an eigenstate stays in an eigenstate. But what if we
don't prepare our state in this way?

You can expand this wave function in terms of this complete basis, and you
have to write down the initial equations that you got. Guess. That guess is
right. iℏ∂/∂t Φ = [-ℏ²/2m ∂²/∂x² + V] Φ

iℏ ∑a{n}Ψ{n}(-iEn/ℏ)exp(-iEnt/ℏ) = ∑[a{n}exp(-iEnt/ℏ)[-ℏ²/2m d²/dx² + V(x)]Ψ{n}]

Summary
=======
# V(x,t) = V(x)
# We solve for special stationary states ⇔ [-ℏ²/2m d²/dx² + V]Ψ = EΨ ⇒
  complete set {Ψ, E} n ∈ N
  |Ψ|² = |Ψ|² end of time
# General solution
  Φ = ∑aΨ

〈Φ|H|Φ〉 = ∑|a{n}|²E{n}

stuff with conjugates and whatnot.

<a name='10'></a>

Physics 137A: Quantum Mechanics
===============================
Wednesday, February 8
---------------------

Harmonic oscillator

	V(x)| __          ____
		|/  \        /
		|    |   ___/
		|    \__/
		|_________________
						 x

This potential is symmetric in momentum and position. A wave packet in
coordinate space, if you Fourier-transform it, is the same wave packet is
momentum space. Has this property that if you want to do many-body physics
(not in this class) and use as a basis the harmonic oscillator, then you
get nice stuff that happens. One of the great things about the harmonic
oscillator is that, say you have 3 particles. Three coordinates describing
them. Most of the time, you're not interested in said coordinates, but
rather what the wave function looks like. Take out center-of-mass
motion. You have the same problem in general many-body theory. Excitations
in nucleus, whatever. Would love to have a big set of basis states where
you could write things down simply and just work with the interesting
part. The harmonic oscillator allows you to do that. For all these reasons
this problem is actually important, but you don't see them in the
textbook. tl;dr: this makes life easier when you get to harder problems.

You recognize such a potential because of springs. W = kx²/2. Because the
potential is quadratic, the restoring force is linear. You can calculate
the frequency omega ≡ √(k/m)

Let's start by writing down the time-independent Schrödinger
equation. There's a potential term, and that we'll write as ½momega². What prof
is going to do is straight out of the book, so don't take notes. Cool.

**Adding 0 and multiplying by 1: most useful math tricks.**

**Addition/subtraction: physicist's worst nightmare.**

**Regularization: it is your best friend.**

<a name='11'></a>

Physics 137A: Quantum Mechanics
===============================
Friday, February 10
-------------------

So, last time we were doing a harmonic oscillator. Calculation takes two
full lectures. Energy has to be quantized. Good first start. Lots of
motivation for the harmonic oscillator. Useful in general for lots of
different interactions. The first step is to define the time-independent
solutions. First thing to do is to introduce a dimensionless coordinate.

Talk about solution to simple harmonic oscillator. Why it must be a finite
polynomial (actually, no good reason -- it's just easier). how to get said
finite polynomial. numerator has to vanish. result must be either odd or
even. it's in the math. working out hermite polynomials by hand. haven't
even gotten around to the closed-form version.

(n+1)(n+2)T(n+2) = (2n+1 - 2E/ℏomega)T(n)

δ(nm)√π 2ⁿn!. Orthogonal.

Recurrence relation. H{n+1} = 2yH{n} - 2n(H{n-1}.

dⁿH{n}/dn = 2nH{n-1}.

Now you just have to go ahead and plug in this formula into our wave
function. It's just a whole lot of algebra, so Haxton will just write down
the result instead of possibly getting it wrong. Will probably be in the
text.

You have to choose either a₀ or a₁ to be 0. Choosing both yields a useless
result.

blarg, orthog basis saves time.

**Protip: You can violate energy conservation as long as you don't do it
too much.**
|x| > √(ℏ/momega (2n+1)) ⇒ ∫Ψ*x²Ψdx.

whenever you have an x that is more than twice its root-mean-square, you
are violating mathematics. Which is great. This happens 11% of the
time. This is excellent.

Next Monday: calculating expectation value of p².

<a name='12'></a>

Physics 137A: Quantum Mechanics
===============================
Monday, February 13
-------------------

Hermite relations:
∫Hm(y)Hn(y)e⁻{y²/₂}dy = √π 2ⁿ n! δ{nm}
H{n+1} = 2yH{n} - 2nH{n-1}
dH{n}/dy = 2nH{n-1}.

〈x²〉n = ∫Ψ*(x)x xΨ(x)dx. Use recurrence relation, then use first
relation.

〈p²〉 = momegaℏ²(2n+1)/2. 〈T〉 = 〈p²〉/2m = ℏω/2 (2n+1)/2

σ{x}σ{p} = ℏ/2 (2n+1) ≥ ℏ/2 (n guaranteed to be non-negative)

Barrier presentation. Potential greater than energy.

Talk about free particles.

<a name='13'></a>

Physics 137A: Quantum Mechanics
===============================
Wednesday, February 15
----------------------

Recap: free particle schrödinger equation has a set of solutions. \Psi(x) =
1/√(2π)e^{ikx}. |Ψ(x)|² = 1/2π. Not normalizable. Analogous to sin, cos
functions in a box. -∞ < k < ∞. _both signs_. E{k} = ℏ²k²/2m

Finite a box. from -πa to πa.

e^{ikx} as our wave functions.

Boundary conditions: e^{-ikπa} = e^{ikπa}. PERIOD ≡ 1/a; freq ≡ a by
construction.

We now have a discrete set of wave functions over a finite width. We know
how to normalize this. Do what we would normally do. Our interval is (as
stated earlier) [-π/a,π/a]. blah, demonstration of orthonormality. Take
limit as a → ∞.

talk about boxes. lots of handwaving. sucky explanation of δ(r).

Now that we have our δ (finally!) we can just write down the answer. Or
not.

When all the dust clears, what do you get? What we've discovered from these
arguments is that we wanted to get these a{k}. So we had the right idea,
(not really) and we worked out the math by hand and had to check for
orthonormality as opposed to completeness.

We naturally get a(k′). "If you squint at this, it looks just like our
Krönecker delta."

The final step is that we write the solution. Evolves just as you expected
it to be. Plug it back into the Schrödinger equation.

(blarg, this is the Fourier transform. Finally. The _obvious_ way to do the
problem.)

wave packets, momentum composition. blah blah blah, you can show that
they're equivalent, etc.

<a name='14'></a>

Physics 137A: Quantum Mechanics
===============================
Friday, February 17
-------------------

finite square well???
=====================

# pset ->
	week from Monday.
# midterm ->
	no  δ function potential.
	yes δ-function ⇔ Fourier
	up to bound-state square well
# notes ->
	Saturday
# schedules/accommodations -> Thursday?

fourier transform! fourier transform!

Finite square well (finally)
============================

We'll set some zero energy, and a potential that has a depth of -V₀. This
is the base of our well. My wells are always symmetric around the origin,
and they always have width a. So we've got two regions: E > 0 and E < 0.

Negative energy: "is bound". It's just a shift of our ground. No physics
involved whatsoever. So we want to solve this problem. We'll do both bound
state and continuum solutions for this thing.

Curvature of the wave function corresponds to energy. If I look at the
energy (relative to 0) of the first and second eigenstates, the energy gaps
are going to be smaller than higher up.

Not an infinite number of energies, since it's not an infinite well. Gets
increasingly compact on the way up.

Continuous stuff.

Let's first consider stuff in our well. We've got two regions: x<-a/2,
x>a/2, and -a/2 < x < a/2. The first part is the free SE. Nothing
interesting there.

<a name='15'></a>

Physics 137A: Quantum Mechanics
===============================
Wednesday, February 22
----------------------

No cheatsheet. Won't need it. Mostly qualitative questions. One really hard
question for bored people. Five points. Believe it or not, we're catching
up on the homework. Too much turmoil, so these will just be in the
discussion sections.

So what we were doing last time, we were halfway through the wave
function. Derivatives have to be continuous, functions must be
continuous.

We know is that wave functions either break down into odd solutions or even
solutions. So solve each separately.

Standard solving of ordinary differential equations: write down general
form, then enforce boundary conditions.

\kappa is pre-propagation, so doesn't know about potential. k is
propagation.

Remember that this only gives us half of the solutions.

<a name='16'></a>

Physics 137A: Quantum Mechanics
===============================
Monday, February 27
-------------------
$\let\onabla\nabla
\renewcommand{\vec}[1]{\overset{\rightharpoonup}{#1}}
\renewcommand{\nabla}{\vec{\onabla}}
\newcommand{\div}{\vec{\onabla}}
\newcommand{\tens}[1]{\overset{\rightharpoonup\hspace-6pt\rightharpoonup}{\mathbf{#1}}}$
Talk about solving transcendental equations by plotting. More room for
bound states as blue line gets larger. Intersections correspond to
eigenstates. If you're deep down in the bottom of an finite well, it should
look like an infinite well. Your probability of penetrating into the
forbidden region is governed by an exponential in $\kappa$.

Zero-energy bound state (parameter $V_0 a^2$ very small) corresponds to an
arbitrarily weak potential and arbitrarily wide well.

Similarly, the $\delta$ potential corresponds to $a \to 0$, $V_0
\to \infty$.

Talk about how the wave function has continuous zeroth and first
derivatives at boundaries.

Tunnelling makes the sun work.

<a name='17'></a>

Physics 137A: Quantum Mechanics
===============================
Wednesday, February 29
----------------------

<a name='18'></a>

Physics 137A: Quantum Mechanics
===============================
Transmission, Reflection, Tunneling
===================================
Friday, March 2
---------------

if we include in our finite basis wave numbers k_n = n\pi/b such that n \gg
b/a can resove bump.

idea: use large basis in n, construct stationary states numerically.

Fourier basis complete over interval.

Stationary state satisfies S.E.

<a name='19'></a>

Physics 137A: Quantum Mechanics
===============================
Monday, March 5
---------------
Handing back of exams.

One repeat problem on next midterm.

Chapter 3
=========
Departure from this point; beginning of chapter 3.

Last time was a brief introduction. What we did Friday: Up to now:
differential equation to stationary states. But limiting!

Friday: Found them numerically: basis, then truncated: Physics. You have to
match truncation with Physics you want to capture in the problem.

Numerically diagonalized approximate stationary states.

Why? Fun applications; introduced notions of matrix form of $T + V$,
vectors as solutions to time-independent Schr\"odinger equation.

vectors: $\alpha_i\ket{x_i}$; inner products: $\braket{\alpha}{\beta}
\equiv \alpha^\dagger \beta$: linear transformations/operators: $\op{
\alpha}$ (must be Hermitian, even). Representable by a matrix.

Our vector spaces are usually infinite. This should not confuse you.

Quantum vector spaces (Hilbert spaces -- this is technically a lie --
Hilbert spaces in this sense do not contain the zero matrix, nor are they
closed under anything -- it's really more of a k-sphere): examples:
infinite square well: $\sqrt{\frac{2}{a}} e^{i\pi nx/a}$

So we know some things about these products. The point about QM is that not
all possible functions are allowable. We know we want to be able to
calculate expectation values of things, which we measure. It's a real
number. Spectral theorem.

$\braket{\psi_m}{\psi_n} = \delta_{mn}$

What do we do when eigenvalues are degenerate?
 a) Curl up into a ball and cry.
 b) Ignore said fact.
 c) Mathematica

orthonormal basis.

<a name='20'></a>

Physics 137A: Quantum Mechanics
===============================
Friday, March 9
---------------
Quaternions:

[1 0]  [-i 0]  [0 -1]  [0 i]
[0 1], [ 0 i], [1  0], [i 0]

  1       i       j      k

\sum_k e_k \ket{\psi_k}

[x,p] = xp - px

<a name='21'></a>

Physics 137A: Quantum Mechanics
===============================
Monday, March 12
----------------

Recap: spectral theorem; completeness of eigenfunctions.

Dirac orthonormality (consider Fourier transform)

Now it gets a little more interesting. Suppose we have some wave packet
(the book calls this generalized statistical interpretation). Not this
example, but the next which will be important. Will tell when you can label
with more than one quantum number.

Reason why this is being done is because you can start thinking about
operators abstractly. Fact that you know the general theorems that go with
any operator, etc.

Let's go through and see what he means by this idea of a generalized
statistical interpretation. Consider operator H (hamiltonian). We'll have
some wave packet $\Phi\equiv \alpha_i\ket{\phi_i}$. The expansion of this
is simply $\braKet{\Phi}{H}{\Phi}$.

There will be an eigenspectrum corresponding to all the possible outcomes
of a measurement. You'll wind up getting this completeness relationship,
where the probabilities correspond to the coefficients.

probability of a particle being at a specific point means nothing in
continuous case -- rather, we have to speak of it being found in some
interval.

Let's write out this idea of simultaneous measurements and commuting
operators.

So now let's go ahead and compute that the commutator is zero.

Another way to measure how different these eigenvectors are is to see
whether these matrices commute or not. If they commute, they have a common
set of eigenvectors. Commuting means $XZ - ZX = 0$. So we want to look at $XZ
- ZX$ (a commutator, denoted by $[X,Z]$).

So what does this look like between $\hat{x}$ and $\hat{p}$? We have product
rule coming into play... yielding $[x,p] \equiv i\hbar$.

We'll use this to derive $\Delta x\Delta p = \hbar/2$.

Recall: given an observable A and a state $\ket{Ψ}$, the expected value is
$\braKet{\Psi}{A}{\Psi}$. We also saw that the variance was $E(x^2) -
E(x)^2$, so in this case $\sigma^2 = \braKet{\Psi}{A^2}{\Psi} -
\braKet{\Psi}{A}{\Psi}^2$.

Wednesday, what we're going to do is try some derivation of what the
uncertainty principle looks like in general.

<a name='22'></a>

Physics 137A: Quantum Mechanics
===============================
Wednesday, March 14
-------------------

playing around with uncertainty principle; derivation through (commutator +
anticommutator)/2. Consideration of Cauchy-Schwarz inequality. Schwarz
inequality becomes equality in certain cases.

<a name='23'></a>

Physics 137A: Quantum Mechanics
===============================
Wednesday, March 14
-------------------

Uncertainty relation: what is its meaning? How do you measure a particle?
Observations disturb state.

Uncertainty principle is why we exist. Hydrogen atom: proton surrounded by
some electron orbit. THe size of the proton is roughly $10^{-15} m$, or one
fm (fermi, as we come to know it). THe electron sits a distance $a_0$ (Bohr
radius) away from the proton, roughly $5 \cdot 10^{-11}$. Pauli exclusion
principle leads to repulsive force. 1931: Ehrenfest postulated. Later,
1967: Freeman Dyson along with collaborator A. Lenard proved that this
causes normal force: matter would be much squishier.

H = T + V. We know $T = \frac{p^2}{2m}$, and V is given by $-\frac{e^2}{r
4\pi\epsilon_0}$. We thus have $\int d^3x \Psi^*\parens{-\frac{\hbar^2}
{2m}\nabla^2 \Psi}$. This is roughly $R$. Then we know the kinetic energy,
which is the sum of all the momenta, $\frac{1}{2m}\avg{p_x^2 + p_y^2 +
p_z^2} = \frac{1}{2m}3\frac{\hbar^2}{4R^2} \approx \frac{3}{8}
\frac{\hbar^2}{mR^2}$. So $\avg{H} \approx \frac{3}{8}\frac{\hbar^2}{mR^2}
- \frac{e^2}{R4\pi\epsilon_0}$. $\pderiv{}{R}\avg{H} = 0$. Therefore $R =
  \frac{3}{4}\frac{\hbar^2}{mc\alpha}$. 

Two good examples of generalizing uncertainty in text. Decay,
travel.

There's another uncertainty relation that's common to write down, i.e. the
time-energy uncertainty principle. Time scale for observable quantity:
width of particle inversely proportional to lifetime.

Let's do a more specific example: consider a wave function given by the
following gaussian wave packet: $\phi = \frac{e^{-(x - x_0)^2 / 2a^2}
e^{ip_0x/\hbar}}{(\pi a^2)^{1/4}}$. What is the uncertainty in the position
of the particle?

$\sigma_x = \frac{a}{\sqrt{2}}$.

Assume we have an infinite hilbert space. Note that one is represented by
$\infint dx \abs{xXx}$.

Dirac's bra-ket Notation
========================

talk about finding eigenvalues and eigenvectors. $\ketbra{i}{j}H_{ij}$.

Note that $\braket{i}{j} = \delta_{ij}$

More bra-ket notation. Basis must span Hilbert space. Completeness
relation.

<a name='24'></a>

Physics 137A: Quantum Mechanics
===============================
Monday, March 19
----------------

Recaps. Uncertainty principle at multiple places. Showed that if you show
momentum acting on Gaussian, it's effectively $-\frac{\hbar}{i} \frac{1}{2
\sigma_x^2} \hat{x}$. Showed that inequality became an equality, so our
fudging worked just fine.

Time dependence shows up explicitly in some operators; none that we've
encountered thus far.

Two things to take away: $\pderiv{}{t}\avg{\hat{Q}_H} = \frac{i}{\hbar}
\avg{\comm{\hat{H}}{\hat{Q}_H}} + \avg{\pderiv{Q_H^\prime}{t}}$. We can use
this to derive the generalized uncertainty principle: $\sigma_H^2\sigma_Q^2
\ge \avg{\frac{1}{2i}\comm{H}{\hat{Q}}}^2\implies \sigma_H\sigma_Q \ge
\frac{\hbar}{2}\abs{\pderiv{\avg{\hat{Q}}}{t}}$. Using this for energy and
time, we show that we've also got a time-energy uncertainty principle.

Interesting things that aren't stationary: e.g. 2p in hydrogen. Somewhat
important, since using a laser, one thing you want to do is pump hydrogen
to an excited state.

Talk about lifetimes being $\delta t \approx \frac{1}{\omega}$.

Bandgaps. Slowing down of atoms. Doppler shift.

More dimensions! Toy models.

Spherical symmetry.

Schrodinger equation in three dimensions: just replace $x$ with
$\vec{r}$. Thus $\pderiv{}{x} \to \nabla$.

We have a different normalization, now: it's now an integral over ALL
SPACE. Same reasoning: particle must be *somewhere*. So, as before, we can
take our wave function and write $\Psi(\vec{r},t) = \psi(\vec{r})
e^{-iEt/\hbar}$. Plug this in, and we get the time-dependent Schrodinger
equation.

Solve this equation, and we'll get the stationary states.

Hydrogen atom! Make use of fact that we'll have various conserved
quantities. This is why we talked about commutators and stuff. Angular
momentum and stuff.

One very interesting class of problems: $V(r)$ (not $\vec{r}$). For
instance, $V = \frac{\alpha}{r}$.

<a name='25'></a>

Physics 137A: Quantum Mechanics
===============================
Wednesday, March 21
-------------------

Recaps. In 3 dimensions, note that k,p,x are now vectors, and instead of
$kx$, we have $\vec{k}\cdot \vec{r}$.

Beautifully similar to what we have in one dimension. For many problems
we'll be interested in, the potential is spherically symmetric.

$$
2\braKet{\psi}{x^2}{\psi} = \braKet{\psi_1e^{-iE_1t/\hbar} +
\psi_2e^{-iE_2t/\hbar}}{x^2}{\psi_1e^{-iE_1t/\hbar} +
\psi_2e^{-iE_2t/\hbar}}
\\ = \braKet{\psi_1e^{-iE_1t/\hbar}}{x^2}{\psi_1 e^{-E_1t/\hbar}} + 
\braKet{\psi_1e^{-iE_1t/\hbar}}{x^2}{\psi_2 e^{-E_2t/\hbar}} + 
\\ \braKet{\psi_2e^{-iE_2t/\hbar}}{x^2}{\psi_1 e^{-E_1t/\hbar}} + 
\braKet{\psi_2e^{-iE_2t/\hbar}}{x^2}{\psi_2 e^{-E_2t/\hbar}}
\\ = \braKet{\psi_1}{x^2}{\psi_1} + 
e^{-i(E_2 - E_1)t/\hbar} \braKet{\psi_1}{x^2}{\psi_2} + 
\\ e^{-i(E_1 - E_2)t/\hbar} \braKet{\psi_2}{x^2}{\psi_1 } + 
\braKet{\psi_2}{x^2}{\psi_2}
\\ = \braKet{\psi_1}{x^2}{\psi_1} + \braKet{\psi_2}{x^2}{\psi_2} +
2\cos\parens{\frac{(E_2 - E_1)t}{\hbar}} \braKet{\psi_1}{x^2}{\psi_2}
$$

Solving 3-dimensional separation of variables. Angular equation; radial
equation. Legendre polynomials. $\ell(\ell + 1)$

<a name='26'></a>

Physics 137A: Quantum Mechanics
===============================
Friday, March 23
----------------
???

<a name='27'></a>

Physics 137A: Quantum Mechanics
===============================
Monday, April 2
---------------

for small r, the singular parts have to be equal. We know that $U_l$ looks
like $Ar^{l+1} + Br^{-l}$. The second term has to be zero, since that
would diverge.

First example we can solve: analogue of infinite square well. Inifnite
potential beyond $r = a$. Conceptually: confinement of particle in 3-D. Now
confined in three dimensions.

Introduce wave number $k = \frac{\sqrt{2mE}}{\hbar}$. $\deriv{^2 u}{r^2} =
\bracks{\frac{l(l+1)}{r^2} - k^2}u$. $u(r) = A\sin kr + B\cos kr$. B must
be zero, since wave function is zero at origin. At $r = a$, wave function
must also vanish. So we must have $ka = n\pi$. So you have your
quantization, so your energies are $E = \frac{\hbar^2 k^2 a^2}{2ma^2} =
\frac{\hbar^2 n^2 \pi^2}{2ma^2}$. We've learned that the difference between
one-dimensional and three-dimensional case is angular momentum, but there
is no angular momentum in an s wave. So this looks very similar to infinite
square well: we just have the additional boundary condition that $u(0) =
0$.

So the total solution for this, $\Psi_{nlm}(\vec{r}) = \sqrt{\frac{2}{a}}
Y_{00}(nx) \frac{\sin(n\pi r/a)}{r} = \sqrt{\frac{2}{a}}\frac{\sin(n\pi
r/a)}{\sqrt{4\pi}{r}}$.

spherical bessel function -- sinc?

$\Psi_{n00}(\vec{r} = \frac{1}{\sqrt{2\pi a}}\frac{n\pi}{a} \sinc(\frac
{nr}{a}) = n\sqrt{\frac{\pi}{2}} \frac{1}{a^{3/2}} J_0(\kappa r); \kappa
\equiv \frac{n\pi}{a}$

$J_0$ is our spherical Bessel function. Two places: scattering (coming in
with plane wave, outgoing wave is spherically symmetric wave function that
spreads out from the scatterer, so write as plane wave and stuff
(e.g. $e^{i\vec{k}\cdot \vec{r}} = \sum_{lm} Y_{lm}(\theta, \phi)Y^*_{lm}
(\theta_k, \phi_k)$ -- turns into a Bessel function).

General problem we actually wanted to solve: $\bracks{\deriv{^2}{r^2} + k^2
- \frac{\ell(\ell + 1)}{r^2}}u_\ell(r) = 0$. This leads to
  $\bracks{r^2\deriv{^2}{r^2} + 2r\deriv{}{r} + k^2r^2 - \ell(\ell + 1)}
  R_{n\ell} = 0 \implies \bracks{k^2r^2\deriv{^2}{k^2r^2} + 2kr\deriv{}{kr}
  + k^2r^2 - \ell(\ell + 1)} R_{n\ell} \\ = 0 = \bracks{z^2\deriv{^2}{z^2} +
  2z\deriv{}{z} + z^2 - \ell(\ell + 1)} R_{n\ell}(z)$.

Indeed, there are two classes of solutions: "good" and "bad"
solutions. General form is going to be $R_{n\ell}(kr) = AJ_\ell(kr) +
Bn_\ell (kr)$. $n_\ell$ is a different spherical Bessel function that is
poorly-behaved, Another set of Bessel functions called the spherical Hankel
functions. This is one particular case where they map onto sinusoids; the
case where they map onto complex exponentials corresponds to the Hankel
functions.

The $J_\ell$ are our good solutions; the $n_\ell$ ($n_0 =
-\frac{\cos(x)}{x}$) are our bad functions.

$J_1(x) = \frac{\sin x}{x^2} - \frac{\cos x}{x}$, $n_1(x) = -\frac{\cos
x}{x^2} - \frac{\sin x}{x}$. Recursion formula (not in the book): $f_{\ell
+ 1}(x) = \frac{2\ell + 1}{x}f_\ell(x) - f_{\ell-1}(x)$.

For small x, $J_\ell(x) \approx \frac{x^\ell}{(2\ell + 1)!!}$.

Note that in the general case, $AJ_\ell(ka) = 0$. Eigenvalue problem for
all $\ell$. So what you need to do is find the math tables. Find the
$B_{n\ell}$, which are the $n^{th}$ zeros of the $\ell^{th}$ spherical
Bessel functions.

<a name='28'></a>

Physics 137A: Quantum Mechanics
===============================
Friday, April 6
---------------
Radial ball; no longer imposing the restriction that $V(0) = \infty$.

Recall: recursion relation for spherical Bessel functions.

Prejudices confirmed by thought (look up data in table).

We have all the tools to go in and slog through some harder problem.

fine structure constant for translating Coulomb potential:
$-\frac{e^2}{4\pi\epsilon_0 r} = -\frac{e^2/\hbar c}{4\pi\epsilon_0}
\frac{\hbar c}{r} = \alpha \frac{\hbar c}{r}$; $\alpha \approx
\frac{1}{137}$. Useful for QED. $\hbar c \approx 1973 eV-A = 197.3
MeV-f$. Atomic physicists will usually use the first value.

$u = rR \bracks{-\frac{\hbar^2}{2m}\deriv{^2}{r^2} - \alpha \frac{\hbar
c}{r} + \frac{\hbar^2}{2m} \frac{\ell(\ell + 1)}{r^2}}u(r)$ $\rho = kr =
\frac{\sqrt{-2mE}}{\hbar}r$ ($E < 0$). You wind up getting some
differential equation you need to solve: $\deriv{^2 u}{\rho^2} = \bracks{1
- \frac{\rho_0}{\rho} + \frac{\ell(\ell + 1)}{\rho^2}}u$; $\rho_0 \equiv
\alpha \sqrt{\frac{2mc^2}{\abs{E}}}$.

<a name='29'></a>

Physics 137A: Quantum Mechanics
===============================
Monday, April 9
---------------

Recap from last time: stuff with Coulomb potential.

Talk about Laguerre polynomials.

As with Hermite polynomials, must self-truncate (some term $j_{\max}$ must
go to 0).

$\alpha \approx \frac{1}{137}; mc^2 \approx 0.511 MeV; \hbar c \approx 1973
eV-A$.

Hydrogen!

<a name='30'></a>

Physics 137A: Quantum Mechanics
===============================
Wednesday, April 11
-------------------
Radial wave function, Exponential that goes like $e^{-r/an}$. Scale should
jump out at you. You get this feeling as you go to higher and higher
states, stuff gets weaker, and whatever. Solns to Lapl's eq on sphere;
worked out formula using Frobenius method. Worked out eigenvalue problem;
had to have Laguerre polynomials -- auto-truncating, not unlike Hermite
polys. Write energies that correspond to truncation in one of two ways:
electron mass-energy. Could also write in terms of distance.

Book's normalization is weird -- usual: either constant term is 1 or
highest-order term has coefficient of 1.

Our $L_j^p$ are gotten from the underlying Laguerre polynomials. The
Laguerre polynomials, going from the text's definition, is as follows:
$L_q(x) e^x\parens{\deriv{}{x}}^q\parens{e^{-x} x^q} = \sum_{k=0}^q (-1)^k
\expfrac{q!}{k!}{2}\frac{x^k}{(q-k)!}$. Thus our wave function $\psi_{n\ell
m} (r,\theta, \phi) = \bracks{\expfrac{2}{na}{3}\frac{(n-\ell - 1)!}{2n
\bracks{(n+\ell)!}^3}}^{1/2}e^{-r/na}\expfrac{2r}{na}{\ell}L_{n-\ell-1}^{2
\ell + 1}\parens{\frac{24}{na}}Y_{\ell m}(\theta, \phi)$.

Last couple of little properties: orthogonality. Must be careful with
orthogonality. A lot comes from the $Y_{\ell m}$s. Orthogonality in the
angular components enforced by $Y_{\ell m}$, which we've already shown.

<a name='31'></a>

Physics 137A: Quantum Mechanics
===============================
Friday, April 13
----------------
Nothing much.

<a name='32'></a>

Physics 137A: Quantum Mechanics
===============================
Monday, April 16
================
Think about $e^{i\vec{k} \cdot \vec{r}}\vec{\sigma}$.

Recap: commutators. raising/lowering (ladder) operators. Levi-Civitta
tensor. Maximal commuting set of operators.

Ladder operators anti-hermitian (skew-hermitian). Have very interesting
property.

Couple things to think about. Phase transitions.

We now have a really interesting trick: if we wanted to, we could have
write this $\ket{lm} \equiv \parens{L_-}^{l-m}\ket{ll}$.

Maybe we can avoid some algebra. Invoke Wigner-Eckart theorem?

Two states with just one value of $m$. Must somehow be able to do these
operations efficiently.

Choice of bases is just a matter of convention. Underlying all of this must
be some result, some physical quantity that is independent of your
coordinate system. This is how you figure it out.

All of these matrix elements -- I'll write down the notation -- can be
written as a single element with no dependence on $m$ (3-j symbol?).

Will see this stuff if you start to use it in practical
applications. Annoying, lots of algebra, but you get simple results that
allow you to do more stuff efficiently.

PREVIOUSLY in quantum mechanics: we wrote down $L^2 = (\vec{x} \times p)^2$
and stuff.

These are not pulled out of a hat: written out because we know what these
are in Cartesian coordinates, and we know how to transform from Cartesian
to spherical. Not doing derivation because that has nothing to do with
quantum mechanics. One of the problems for next homework: raising and
lowering operators in $L_\pm \equiv \pm \hbar e^{\pm i\phi}\parens{
\pderiv{}{\theta} \pm i\cos\theta\pderiv{}{itheta}}$.

Zeeman: decided to break spherical symmetry by putting hydrogen atom in
a magnetic field. Nice discretisation.

First observed by Pauli: looks like you missed a quantum number. When you
plot magnetic field, you see twice the number of states.

Talk about Alfred Landay. Pauli also coming at that time (just a kid at
that time, evidently, but did stuff like a paper on special
relativity). Missing quantum number?! Electron spin. Thought about this
classically. Idea was basically very interesting: source of this extra
quantum number. (internal!). Electrons had to have half-integer spins (from
Zeeman effect): here you would have two quantum numbers. Got 2 initially
for g-factor -- surprising quantum-mechanically. Applied to other problem:
fine structure splitting. Explained another factor explained by magnetic
moments. Needed a different value of g-factor (1). Pauli had two objections:
couldn't be right, since they were different values, and only one valid
radius you could use: $r = \frac{e^2}{m c^2}$.

Figuring out how fast this surface was rotating, had to be 100x speed of
light. Special relativity says this is impossible. Told same thing to Niels
Bohr,

Nine months later, two guys in Holland (also very young) had exactly the
same idea: had notion that there must be a new quantum number, almost must
be spin; talked to their boss Ehrenfest. Said it was either nonsense or
very important. Then said to talk to most famous Dutch theorist at the time
Lorentz. Lorentz said everything was nonsense. Turns out this wasn't
stupid: within two years they figured out problems. First, not classical
spin. Also had interaction that looked like inner product between spin and
angular momentum. This is what gives the fine structure splitting.

Should have used Dirac's equation: need relativity.

Nobody ever heard about the guy who actually discovered spin. Moral: don't
listen to anyone over 30, and publish if you have something to discuss.

If you want a fantastic review article (just wonderful), Jean Cummins from
the atomic group. Coming out in a couple months. Called "electron
spin". Talking about how theories were broken. How to fix in new QM.

So what is this spin? The idea is that spin is an intrinsic quantity and
quantum-mechanical, so don't try to think of it as a spinning soccer
ball. Same algebra. What we're going to do is build this with something
that we do have classical relations for, i.e. orbital angular momentum. Go
through cyclical permutations, and this again can be summarized in this
relationship that $\comm{S_i}{S_j} \equiv i\hbar\epsilon_{ijk}S_k$. Once
again, you can choose eigenfunctions with quantum numbers $s,
m_s$. Electron has  $s = \frac{1}{2}$ (fermions).

Diagonal quantum numbers: $s^2\ket{s m_s}= \frac{3}{4}\hbar^2 \ket{s m_s}$,
$s_z \ket{s m_s} \equiv \hbar m \ket{s m_s}$. You can do raising and
lowering operators just as before: mimic what we did with angular orbital
momentum. All particles are fundamental: point-like. Test with $e^\pm,
\mu^\pm, \tau^\pm$ (electrons, muons, tauons). Quarks: u,d/c,s/t,b. All of
these constitute our fermions.

We also have $\gamma, w^\pm, z$: our bosons.

Composite particles act just like elementary particles. The theory
(i.e. SM) thinks that various fermions (i.e. electrons, muons, tauons) are
also composed of quarks.

Spin-up, spin-down wave functions.

<a name='33'></a>

Physics 137A: Quantum Mechanics
===============================
Wednesday, April 18
===================

Stuff.

Raising, lowering, Pauli matrices

<a name='34'></a>

Physics 137A: Quantum Mechanics
===============================
Friday, April 20
===================

Pauli matrices. Electron in magnetic field.

Larmor precession. More stuff. Not quite the Bloch sphere.

Beyond SG machines!

Introduction to addition of angular momentum. Actually important! Reason
for picking this example: how to go further with hydrogen atom, now that
you understand spin.

People began to test spin carefully: explained Zeeman effect, explained
specific levels of hydrogen. Splitting of p(1/2), p(3/2). No degeneracy:
spin of electron interacts with orbital: magnetic field from relative
motion of proton (with respect to electron).


<a name='35'></a>

Physics 137A: Quantum Mechanics
===============================
Monday, April 23
================

Let's start up where we left off last time: Larmor frequency (electron in
magnetic field).

learn to manipulate products of angular momenta.

Important: linear combination of coupled states can often be used to
represent uncoupled states. Clebsch-Gordan coefficient.


<a name='36'></a>

Physics 137A: Quantum Mechanics
===============================
Wednesday, April 25
===================

Klepsch-Gordan coefficients. Corresponds to unitary (and hermitian)
transformation between bases.

Fine-structure of hydrogen: taking into account spin interaction with
magnetic field induced by relative motion of proton (larmor precession)

Quadrupoles, nuclear spin, total angular momentum of electron. Angular
momentum of atom: $I_N + \vec{J} = \vec{F}_{\mathrm{atom}}$.

<a name='37'></a>

Physics 137A: Quantum Mechanics
===============================
Friday, April 27
================

spin combinations, parity, stuff. spans space. doesn't have good symmetry
under imagined operators.

Annihilation of conjugate coordinates: discrete Fourier transforms and
stuff. $M = m_1 + m_2$, $\mu = \frac{m_1m_2}{m_1 + m_2}}$.

center of mass and stuff. Two-body problem.

$\frac{1}{\Psi(R)} \frac{p^2}{2M}\Psi_{cm} = E_{cm}$.

$\frac{1}{\Psi(r)} \parens{\frac{p^2}{2M} + \gamma} \Psi_{rel} = E_{rel}$.

$E = E_{rel} + E_{cm}$.

Everything on the one-body problem maps directly onto the two-body
problem. There's one small difference: we can claim we're not interested in
the center-of-mass motion. We want to know the intrinsic structure, so we
can just worry about the relative motion.

In addition, there's spin. There are now two spins. $\ket{nlm; s_1m_{s1}
s_2m_{s2}}$.

Bosons and fermions. If you use separation of variables for
$\Psi(\vec{r_1}, \vec{r_2})$, what does this wave function have to look
like if we require symmetry? This wave function has probably one of two
possibilities: we exchange quantum numbers, or we introduce a minus
sign. Symmetric or antisymmetric under interchange of particle quantum
numbers.

Powerful theorem: depending on particle, only one is possible. Bosons: must
build symmetry under interchange. Fermions: must be antisymmetric.

Spin triplet state is even under particle exchange, and spin singlet is odd
under particle exchange.

Symmetry: can interchange. Have another spin buried in that Pauli
originally introduced. Now you have this proton neutron stuff and can just
continue.
